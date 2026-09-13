"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/lib/content";
import { CONTACT } from "@/lib/site";
import { useDemoForm, type DemoFormModel } from "@/lib/use-demo-form";

type Props = { locale: Locale; standalone?: boolean };
export function ContactSection(props: Props) {
  const model = useDemoForm(props.locale);
  return <DemoSection {...props} model={model} />;
}

export function DemoSection({ locale, standalone = false, model }: Props & { model: DemoFormModel }) {
  const ar = locale === "ar";
  const Heading = standalone ? "h1" : "h2";
  const v = { ...model, contactEmail: CONTACT.email, contactEmailHref: CONTACT.emailHref,
    contactPhone: CONTACT.phone, contactPhoneHref: CONTACT.phoneHref,
    contactAddress: ar ? CONTACT.address.ar : CONTACT.address.en };
  return (
  <section className={standalone ? "shared-demo shared-demo--standalone" : "shared-demo"} id="demo" aria-labelledby="demo-title"  style={{ padding: "clamp(64px, 7vw, 104px) clamp(20px, 4vw, 48px)", }}>
    <div data-stack="true"  style={{ maxWidth: "1280px", margin: "0 auto", borderRadius: "22px", background: "var(--color-neutral-950)", padding: "clamp(36px, 5vw, 68px)", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.85fr)", gap: "clamp(32px, 4vw, 64px)", alignItems: "center", position: "relative", overflow: "hidden", }}>
      <div  style={{ position: "absolute", insetInlineStart: "-120px", bottom: "-140px", width: "380px", height: "380px", borderRadius: "50%", background: "var(--accent)", opacity: "0.22", filter: "blur(20px)", pointerEvents: "none", }}></div>
      <div  style={{ position: "relative", }}>
        <Heading id="demo-title" data-display="true"  style={{ margin: "0 0 16px", fontFamily: ar ? "var(--font-arabic), var(--font-outfit), sans-serif" : "var(--font-outfit), var(--font-arabic), sans-serif", fontWeight: "800", fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: "1.06", letterSpacing: "-0.035em", color: "#fff", }}>
          {ar ? "شاهدها تعمل على مواقعك أنت." : "See it running on your own sites."}

        </Heading>
        <p  style={{ margin: "0 0 8px", fontSize: "18px", lineHeight: "1.6", color: "rgba(255,255,255,0.7)", maxWidth: "46ch", }}>
          {ar ? "جلسة 30 دقيقة مع الفريق الذي سينفّذ مشروعك. النظام الفعلي، بمشاريعك ومواقعك وقنواتك." : "A 30-minute walkthrough with the team that will run your rollout. The actual system, with your projects, your sites and your channels."}

        </p>
        <div  style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "26px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.16)", }}>
          <a href={v.contactEmailHref}  style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "16px", fontWeight: "600", }} data-hover="color: var(--color-blue-300)">
            <span  style={{ width: "34px", height: "34px", borderRadius: "10px", display: "grid", placeItems: "center", flexShrink: "0", background: "rgba(255,255,255,0.12)", color: "#fff", }}>
              <Mail aria-hidden="true" size={16} />
            </span>
            <bdi dir="ltr">{v.contactEmail}</bdi>
          </a>
          <a className="designer-phone-row" href={v.contactPhoneHref}  style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", fontSize: "16px", fontWeight: "600", }} data-hover="color: var(--color-blue-300)">
            <span  style={{ width: "34px", height: "34px", borderRadius: "10px", display: "grid", placeItems: "center", flexShrink: "0", background: "rgba(255,255,255,0.12)", color: "#fff", }}>
              <Phone aria-hidden="true" size={16} />
            </span>
            <bdi dir="ltr">{v.contactPhone}</bdi>
          </a>
          <span  style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.78)", fontSize: "16px", fontWeight: "500", }}>
            <span  style={{ width: "34px", height: "34px", borderRadius: "10px", display: "grid", placeItems: "center", flexShrink: "0", background: "rgba(255,255,255,0.12)", color: "#fff", }}>
              <MapPin aria-hidden="true" size={16} />
            </span>
            {v.contactAddress}
          </span>
        </div>
      </div>
      <div  style={{ position: "relative", background: "var(--color-background-primary)", borderRadius: "16px", padding: "26px", }}>
        <form className="designer-demo-form" onSubmit={v.submitDemo} aria-busy={v.demoPending} onInput={(event) => {
          if (event.target instanceof HTMLInputElement) event.target.setCustomValidity("");
        }}>
          <div  style={{ display: "flex", flexDirection: "column", gap: "14px", }}>
            <label htmlFor="demo-name" style={{ display: "block", }}>
              <span  style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "var(--color-text-secondary)", marginBottom: "6px", }}>{ar ? "الاسم الكامل" : "Full name"}</span>
              <input  id="demo-name" name="name" autoComplete="name" required minLength={2} maxLength={120} type="text" value={v.demoDraft.name} onChange={(event) => v.updateDemoDraft("name", event.target.value)}  style={{ width: "100%", height: "46px", paddingInline: "14px", borderRadius: "10px", border: "1px solid var(--color-neutral-200)", background: "var(--color-background-primary)", fontFamily: ar ? "var(--font-arabic), var(--font-outfit), sans-serif" : "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", color: "var(--color-text-primary)", }} />
            </label>
            <label htmlFor="demo-email" style={{ display: "block", }}>
              <span  style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "var(--color-text-secondary)", marginBottom: "6px", }}>{ar ? "بريد العمل" : "Work email"}</span>
              <input id="demo-email" name="email" autoComplete="email" required maxLength={254} type="email" dir="ltr" value={v.demoDraft.email} onChange={(event) => v.updateDemoDraft("email", event.target.value)}  style={{ width: "100%", height: "46px", paddingInline: "14px", borderRadius: "10px", border: "1px solid var(--color-neutral-200)", background: "var(--color-background-primary)", fontFamily: ar ? "var(--font-arabic), var(--font-outfit), sans-serif" : "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", color: "var(--color-text-primary)", }} />
            </label>
            <label htmlFor="demo-org" style={{ display: "block", }}>
              <span  style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "var(--color-text-secondary)", marginBottom: "6px", }}>{ar ? "الجهة" : "Organisation"}</span>
              <input id="demo-org" name="organization" autoComplete="organization" required minLength={2} maxLength={160} type="text" value={v.demoDraft.organization} onChange={(event) => v.updateDemoDraft("organization", event.target.value)}  style={{ width: "100%", height: "46px", paddingInline: "14px", borderRadius: "10px", border: "1px solid var(--color-neutral-200)", background: "var(--color-background-primary)", fontFamily: ar ? "var(--font-arabic), var(--font-outfit), sans-serif" : "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "15px", color: "var(--color-text-primary)", }} />
            </label>
            <button type="submit" disabled={v.demoDisabled} style={{ minHeight: "50px", border: "0", borderRadius: "999px", paddingInline: "24px", background: "var(--accent)", color: "#fff", fontFamily: ar ? "var(--font-arabic), var(--font-outfit), sans-serif" : "var(--font-outfit), var(--font-arabic), sans-serif", fontSize: "16px", fontWeight: "700", cursor: v.demoDisabled ? "wait" : "pointer", marginTop: "4px", }} data-hover="background: var(--accent-deep)">
              {v.demoLabel}
            </button>
            <div aria-live="polite" aria-atomic="true">
              <p role={v.demoState === "error" || v.demoState === "timeout" ? "alert" : undefined}  style={{ margin: "2px 0 0", fontSize: "12px", lineHeight: "1.5", color: v.demoNoteColor, textAlign: "center", }}>
                {v.demoNote}{" "}<a href={v.demoFallbackHref}>{v.demoFallbackLabel}</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);
}
