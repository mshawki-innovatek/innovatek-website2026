import Image from "next/image";
import { Layers, Languages, ShieldCheck, Sparkles } from "lucide-react";
import type { HomeCopy, Locale } from "@/lib/content";

type SharedCoreProps = {
  copy: HomeCopy["core"];
  locale: Locale;
};

const icons = [Layers, Languages, ShieldCheck, Sparkles];

export function SharedCore({ copy, locale }: SharedCoreProps) {
  return (
    <section className="shared-core section section--light" aria-labelledby="shared-core-title">
      <div className="shell shared-core__grid">
        <div className="shared-core__media">
          <Image
            src="/assets/reference/innovatek-engineering-team.webp"
            alt={
              locale === "ar"
                ? "فريق إنوفاتك الهندسي يطوّر برمجيات تشغيلية"
                : "Innovatek engineering team developing operational software"
            }
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
          <div className="shared-core__diagram" aria-hidden="true">
            <span>DH</span>
            <span>BN</span>
            <span>VMS</span>
            <span>COM</span>
            <i />
          </div>
        </div>

        <div className="shared-core__copy">
          <h2 id="shared-core-title">{copy.title}</h2>
          <p>{copy.body}</p>
          <div className="shared-core__list">
            {copy.items.map((item, index) => {
              const Icon = icons[index];
              return (
                <div key={item}>
                  <span>
                    <Icon aria-hidden="true" size={19} />
                  </span>
                  <strong>{item}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
