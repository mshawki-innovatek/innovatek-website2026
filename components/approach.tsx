import { Compass, PanelsTopLeft, PlugZap, LifeBuoy } from "lucide-react";
import type { HomeCopy } from "@/lib/content";

type ApproachProps = {
  copy: HomeCopy["approach"];
};

const icons = [Compass, PanelsTopLeft, PlugZap, LifeBuoy];

export function Approach({ copy }: ApproachProps) {
  return (
    <section id="approach" className="approach section section--blue" aria-labelledby="approach-title">
      <div className="shell">
        <div className="section-intro section-intro--split section-intro--inverse">
          <div>
            <p className="eyebrow eyebrow--light">{copy.preface}</p>
            <h2 id="approach-title" className="display-heading">
              {copy.title}
            </h2>
          </div>
          <p>{copy.body}</p>
        </div>

        <div className="approach__steps">
          {copy.steps.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <article key={title}>
                <span className="approach__icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

