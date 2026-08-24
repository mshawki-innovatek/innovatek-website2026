import Image from "next/image";
import type { Locale } from "@/lib/content";

const trustedClients = [
  {
    name: "Al Jalila Foundation",
    src: "/assets/reference/trusted-logos/al-jalila-foundation.webp",
    width: 232,
    height: 61,
  },
  {
    name: "Dubai Health",
    src: "/assets/reference/trusted-logos/dubai-health.webp",
    width: 232,
    height: 60,
  },
  {
    name: "Dar Al Ber Society",
    src: "/assets/reference/trusted-logos/dar-al-ber-society.webp",
    width: 227,
    height: 101,
  },
  {
    name: "Tarahum Charity Foundation",
    src: "/assets/reference/trusted-logos/tarahum-charity-foundation.webp",
    width: 232,
    height: 64,
  },
  {
    name: "Beit Al Khair Society",
    src: "/assets/reference/trusted-logos/beit-al-khair-society.webp",
    width: 232,
    height: 136,
  },
  {
    name: "Sharjah Department of Awqaf",
    src: "/assets/reference/trusted-logos/sharjah-department-of-awqaf.webp",
    width: 232,
    height: 197,
  },
  {
    name: "Fujairah Charity Association",
    src: "/assets/reference/trusted-logos/fujairah-charity-association.webp",
    width: 232,
    height: 156,
  },
  {
    name: "Sharjah Charity International",
    src: "/assets/reference/trusted-logos/sharjah-charity-international.webp",
    width: 232,
    height: 173,
  },
  {
    name: "Sharjah Social Empowerment Foundation",
    src: "/assets/reference/trusted-logos/sharjah-social-empowerment-foundation.webp",
    width: 228,
    height: 114,
  },
] as const;

export function TrustedClients({ locale }: { locale: Locale }) {
  const ar = locale === "ar";

  return (
    <section
      id="clients"
      className="trusted-clients"
      aria-labelledby="trusted-clients-title"
    >
      <div className="shell trusted-clients__panel">
        <div className="trusted-clients__ambient" aria-hidden="true" />
        <div className="trusted-clients__copy">
          <p>{ar ? "ثقة تُبنى بالتشغيل" : "Trusted in operation"}</p>
          <h2 id="trusted-clients-title">
            {ar
              ? "موضع ثقة المؤسسات والدوائر الحكومية في الإمارات."
              : "Trusted by foundations and government departments across the UAE."}
          </h2>
          <span>
            {ar
              ? "تدير مؤسسات خيرية وهيئات صحية ودوائر أوقاف عمليات العطاء والمرافق والزوار على أنظمة نبنيها ونواصل تشغيلها."
              : "Charity foundations, health authorities and Awqaf departments run their giving, facility and visitor operations on systems we build and keep running."}
          </span>
        </div>

        <div className="trusted-clients__logos">
          {trustedClients.map((client) => (
            <div className="trusted-clients__logo" key={client.name}>
              <span className="trusted-clients__logo-image">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  sizes="(max-width: 560px) 38vw, (max-width: 960px) 26vw, 160px"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
