import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/content";

type BrandLogoProps = {
  href?: string;
  inverse?: boolean;
  locale?: Locale;
};

export function BrandLogo({ href = "/", inverse = false, locale = "en" }: BrandLogoProps) {
  const ar = locale === "ar";

  return (
    <Link
      href={href}
      className="brand-logo"
      aria-label={ar ? "الصفحة الرئيسية لإنوفاتك SWD" : "Innovatek SWD home"}
    >
      <Image
        src="/assets/reference/innovatek-logo-primary.png"
        alt={ar ? "إنوفاتك لتصميم البرمجيات" : "Innovatek software design"}
        width={568}
        height={158}
        priority
        className={inverse ? "brand-logo__image brand-logo__image--inverse" : "brand-logo__image"}
        sizes="(max-width: 640px) 146px, 170px"
      />
    </Link>
  );
}
