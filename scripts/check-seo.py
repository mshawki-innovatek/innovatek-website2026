"""Validate the exported HTML that crawlers receive, without a running JS app."""
import json
import re
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
from xml.etree import ElementTree as ET

OUT = Path('out')
INDEXABLE = ['/', '/ar/', '/about/', '/ar/about/', '/contact/', '/ar/contact/']
PRODUCT_IDS = ['donation-hub', 'tajir', 'agent-management', 'jood', 'bunyan-cmms', 'twin-ai', 'visitor-management-system', 'smart-kiosk', 'insight-360', 'communication-platform']
REVIEW_PAGES = [f'{prefix}/products/{slug}/' for prefix in ('', '/ar') for slug in PRODUCT_IDS]
RETIRED = ['/solutions/', '/ar/solutions/']


def normalize(value):
    return ' '.join(unescape(value).split())


class Page(HTMLParser):
    def __init__(self, file):
        super().__init__(convert_charrefs=True)
        self.file = file
        self.meta, self.links, self.ids, self.images, self.schemas = {}, [], [], [], []
        self.title = ''
        self.text = []
        self.h1s = 0
        self.booking_inputs = []
        self.in_title = False
        self.in_script = False
        self.in_style = False
        self.script_type = ''
        self.script = ''
        self.lang = ''
        self.feed(file.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.append(attrs['id'])
        if tag == 'html':
            self.lang = attrs.get('lang', '')
        if tag == 'title':
            self.in_title = True
        if tag == 'h1':
            self.h1s += 1
        if tag == 'meta':
            key = attrs.get('name') or attrs.get('property')
            if key:
                self.meta[key] = attrs.get('content', '')
        if tag in ('a', 'link'):
            self.links.append({'tag': tag, **attrs})
        if tag == 'input' and attrs.get('id', '').startswith('demo-'):
            self.booking_inputs.append(attrs)
        if tag == 'img':
            self.images.append(attrs)
        if tag == 'script':
            self.in_script, self.script_type, self.script = True, attrs.get('type'), ''
        if tag == 'style':
            self.in_style = True

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script':
            if self.script_type == 'application/ld+json':
                self.schemas.append(json.loads(self.script))
            self.in_script = False
        if tag == 'style':
            self.in_style = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_script:
            self.script += data
        elif not self.in_style:
            self.text.append(data)

    def canonical(self):
        links = [link['href'] for link in self.links if link.get('rel') == 'canonical']
        assert len(links) == 1, f'{self.file}: expected one canonical'
        return links[0]


def file_for(path):
    return OUT / path.lstrip('/') / 'index.html'


pages = {path: Page(file_for(path)) for path in INDEXABLE + REVIEW_PAGES}
origin = urlsplit(pages['/'].canonical())
assert origin.scheme == 'https' and origin.hostname not in ('localhost', '127.0.0.1')
origin = f'{origin.scheme}://{origin.netloc}'
assert origin == 'https://www.innovatek-swd.com', 'Canonical origin must match the owner-confirmed domain'
seen_titles, seen_descriptions = set(), set()
for path, page in pages.items():
    assert [i.get('name') for i in page.booking_inputs] == ['name', 'email', 'organization'], f'{path}: booking fields differ'
    assert all('required' in i for i in page.booking_inputs), f'{path}: missing required booking field'
    assert page.h1s == 1, f'{path}: expected one H1'
    assert page.title and page.title not in seen_titles, f'{path}: missing/duplicate title'
    seen_titles.add(page.title)
    description = page.meta.get('description', '')
    assert description and description not in seen_descriptions, f'{path}: missing/duplicate description'
    seen_descriptions.add(description)
    for robot in ('robots', 'googlebot'):
        if path in REVIEW_PAGES:
            assert 'noindex' in page.meta.get(robot, ''), f'{path}: review page must stay noindex'
        else:
            assert 'noindex' not in page.meta.get(robot, ''), path
    assert page.canonical() == origin + path, f'{path}: noncanonical trailing slash or host'
    assert page.lang.startswith('ar' if path.startswith('/ar/') else 'en'), path
    alternates = {a.get('hreflang'): a.get('href') for a in page.links if a.get('rel') == 'alternate'}
    counterpart = path[3:] if path.startswith('/ar/') else '/ar' + path
    english = path[3:] if path.startswith('/ar/') else path
    expected = {'en': origin + english, 'ar': origin + '/ar' + english, 'en-AE': origin + english, 'ar-AE': origin + '/ar' + english, 'x-default': origin + english}
    assert alternates == expected, f'{path}: incorrect language alternates'
    assert pages[counterpart].canonical() in alternates.values(), path
    for key in ('og:title', 'og:description', 'og:image', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'):
        assert page.meta.get(key), f'{path}: missing {key}'
    assert page.meta.get('og:url') == page.canonical(), f'{path}: OG URL differs'
    assert len(page.ids) == len(set(page.ids)), f'{path}: duplicate IDs'
    for img in page.images:
        assert 'alt' in img, f'{path}: image missing alt'
        src = img.get('src', '')
        if src.startswith('/'):
            assert (OUT / unquote(urlsplit(src).path).lstrip('/')).exists(), f'{path}: missing {src}'
    for link in page.links:
        if link['tag'] != 'a':
            continue
        url = urlsplit(link.get('href', ''))
        if url.scheme or url.netloc:
            continue
        destination = url.path or path
        assert not any(destination.startswith(old) for old in RETIRED), f'{path}: retired link'
        if destination.startswith('/'):
            file = file_for(destination)
            if not file.exists():
                assert (OUT / destination.lstrip('/')).is_file(), f'{path}: broken link {destination}'
            elif url.fragment:
                target = pages.get(destination) or Page(file)
                assert unquote(url.fragment) in target.ids, f'{path}: missing anchor {destination}#{url.fragment}'

for path in ('/', '/ar/'):
    page = pages[path]
    text = normalize(' '.join(page.text))
    nodes = [node for schema in page.schemas for node in schema.get('@graph', [schema])]
    services = [node for node in nodes if node.get('@type') == 'Service']
    assert len(services) == 10, f'{path}: expected all ten products'
    assert len({s['@id'] for s in services}) == 10, f'{path}: duplicate product IDs'
    for service in services:
        assert normalize(service['name']) in text, f'{path}: product missing from HTML'
        assert normalize(service['description']) in text, f'{path}: schema description differs from visible copy'
        assert urlsplit(service['url']).path in pages, f'{path}: missing product page'
        assert any(a.get('href') == urlsplit(service['url']).path for a in page.links), f'{path}: product missing crawlable link'
    faq = next(node for node in nodes if node.get('@type') == 'FAQPage')
    for question in faq['mainEntity']:
        assert normalize(question['name']) in text, f'{path}: FAQ question not in HTML'
        assert normalize(question['acceptedAnswer']['text']) in text, f'{path}: FAQ answer not in HTML'
    assert all('//#' not in node.get('@id', '') for node in nodes), f'{path}: malformed schema ID'
    for destination in ('about/', 'contact/'):
        prefix = '/ar/' if path == '/ar/' else '/'
        assert any(a.get('href') == prefix + destination for a in page.links), f'{path}: orphaned {destination}'

# Product pages must expose unique content and matching structured data in static HTML.
for path, page in pages.items():
    if '/products/' not in path:
        continue
    text = normalize(' '.join(page.text))
    nodes = [node for schema in page.schemas for node in schema.get('@graph', [schema])]
    service = next(node for node in nodes if node.get('@type') == 'Service')
    assert service['url'] == page.canonical(), f'{path}: incorrect service URL'
    assert service['@id'] == page.canonical() + '#service', path
    assert normalize(service['description']) in text, f'{path}: hidden service description'
    assert normalize(service['name']) in text, f'{path}: hidden service name'
    faq = next(node for node in nodes if node.get('@type') == 'FAQPage')
    assert len(faq['mainEntity']) >= 2, path
    for question in faq['mainEntity']:
        assert normalize(question['name']) in text, f'{path}: hidden FAQ question'
        assert normalize(question['acceptedAnswer']['text']) in text, f'{path}: hidden FAQ answer'
    breadcrumb = next(node for node in nodes if node.get('@type') == 'BreadcrumbList')
    assert breadcrumb['itemListElement'][-1]['item'] == page.canonical(), path
    assert ('بيانات افتراضية بالكامل' if path.startswith('/ar/') else 'entirely fictional data') in text, f'{path}: demo data must be labeled'
    assert not any('donationhub-demo.com' in a.get('href', '') for a in page.links), f'{path}: private demo link'
    assert len([a for a in page.links if a['tag'] == 'a' and '/products/' in a.get('href','')]) >= 3, f'{path}: missing related products'

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
sitemap = ET.parse(OUT / 'sitemap.xml')
urls = sitemap.findall('s:url', ns)
assert {u.find('s:loc', ns).text for u in urls} == {origin + p for p in INDEXABLE}
for url in urls:
    assert len(url.findall('x:link', ns)) == 5, 'Missing sitemap language alternates'
robots = (OUT / 'robots.txt').read_text()
assert f'Sitemap: {origin}/sitemap.xml' in robots and 'Disallow: /\n' not in robots
for path in ('/privacy/', '/terms/', '/ar/privacy/', '/ar/terms/'):
    assert 'noindex' in Page(file_for(path)).meta.get('robots', ''), path
assert 'noindex' in Page(OUT / '404.html').meta.get('robots', '')
for path in RETIRED:
    assert not (OUT / path.lstrip('/')).exists(), f'Retired route exported: {path}'
assert not (OUT / 'backups').exists(), 'Backups must not be public'
print(f'SEO checks passed: {len(INDEXABLE)} indexable pages, {len(REVIEW_PAGES)} noindex product review pages, metadata, sitemap exclusion, links, assets, FAQ parity and retired routes.')
