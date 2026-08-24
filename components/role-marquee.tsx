import { Asterisk } from "lucide-react";
import type { HomeCopy } from "@/lib/content";

type RoleMarqueeProps = {
  copy: Pick<HomeCopy, "marqueeLead" | "marqueeItems">;
};

export function RoleMarquee({ copy }: RoleMarqueeProps) {
  const row = copy.marqueeItems.map((item) => (
    <span className="role-marquee__item" key={item}>
      <Asterisk aria-hidden="true" size={18} />
      {item}
    </span>
  ));

  return (
    <section className="role-marquee" aria-label={copy.marqueeLead}>
      <p className="role-marquee__lead">{copy.marqueeLead}</p>
      <div className="role-marquee__viewport" tabIndex={0}>
        <div className="role-marquee__track">
          <div className="role-marquee__row">{row}</div>
          <div className="role-marquee__row" aria-hidden="true">
            {row}
          </div>
        </div>
      </div>
    </section>
  );
}

