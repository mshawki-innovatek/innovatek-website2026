import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Radio } from "lucide-react";
import type { HomeCopy, Locale } from "@/lib/content";

type HeroProps = {
  locale: Locale;
  copy: HomeCopy["hero"];
};

export function Hero({ locale, copy }: HeroProps) {
  const prefix = locale === "ar" ? "/ar" : "";

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__grid shell">
        <div className="hero__content">
          <p className="hero__kicker">
            <span aria-hidden="true" />
            {copy.kicker}
          </p>
          <h1 id="hero-title" className="hero__title max-w-6xl">
            {copy.title}
          </h1>
          <p className="hero__body">{copy.body}</p>
          <div className="hero__actions">
            <Link href={`${prefix}/contact`} className="button button--light">
              <span>{copy.primary}</span>
              <ArrowUpRight aria-hidden="true" size={19} />
            </Link>
            <a href="#solutions" className="button button--ghost-light">
              <span>{copy.secondary}</span>
              <ArrowDownRight aria-hidden="true" size={19} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__image-wrap">
            <Image
              src="/assets/reference/uae-smart-giving-kiosk.webp"
              alt={copy.imageAlt}
              fill
              priority
              loading="eager"
              quality={88}
              sizes="(max-width: 900px) 100vw, 52vw"
              className="hero-visual__image"
            />
            <div className="hero-visual__wash" aria-hidden="true" />
          </div>

          <div className="hero-visual__console">
            <div className="hero-visual__console-head">
              <div>
                <Radio aria-hidden="true" size={14} />
                <span>{copy.live}</span>
              </div>
              <span className="hero-visual__signal" aria-hidden="true" />
            </div>
            <div className="hero-visual__events">
              {copy.events.map(([title, detail]) => (
                <div className="hero-event" key={title}>
                  <span className="hero-event__icon">
                    <Check aria-hidden="true" size={13} strokeWidth={3} />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="hero-visual__flow" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
