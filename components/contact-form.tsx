"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import type { Locale } from "@/lib/content";
import { CONTACT } from "@/lib/site";

type ContactFormProps = {
  locale: Locale;
};

type Draft = {
  name: string;
  email: string;
  organization: string;
  challenge: string;
};

function getMailtoHref(draft: Draft, ar: boolean) {
  const subject = ar
    ? `طلب جلسة عمل من ${draft.organization}`
    : `Working session request from ${draft.organization}`;
  const body = ar
    ? `الاسم: ${draft.name}\nالبريد: ${draft.email}\nالجهة: ${draft.organization}\n\nالتحدي التشغيلي:\n${draft.challenge}`
    : `Name: ${draft.name}\nEmail: ${draft.email}\nOrganization: ${draft.organization}\n\nOperational challenge:\n${draft.challenge}`;

  return `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm({ locale }: ContactFormProps) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [savedDraft, setSavedDraft] = useState<Draft | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ar = locale === "ar";

  const mailtoHref = useMemo(
    () => (draft ? getMailtoHref(draft, ar) : CONTACT.emailHref),
    [ar, draft],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nextDraft = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      challenge: String(formData.get("challenge") ?? ""),
    };

    setSavedDraft(nextDraft);
    setDraft(nextDraft);
    window.location.assign(getMailtoHref(nextDraft, ar));
  }

  function editDetails() {
    setDraft(null);
    requestAnimationFrame(() => nameInputRef.current?.focus());
  }

  if (draft) {
    return (
      <div className="contact-success" role="status" aria-live="polite">
        <span className="contact-success__icon">
          <CheckCircle2 aria-hidden="true" size={28} />
        </span>
        <p className="contact-success__kicker">
          {ar ? "موجزك جاهز" : "Your brief is ready"}
        </p>
        <h3>
          {ar
            ? `شكراً ${draft.name}. فتحنا رسالة جاهزة لتصل إلى فريق إنوفاتك.`
            : `Thanks, ${draft.name}. We opened a prepared email for the Innovatek team.`}
        </h3>
        <p>
          {ar
            ? "لم نرسل بياناتك إلى أي خادم. إذا لم يفتح تطبيق البريد تلقائياً، استخدم الزر أدناه."
            : "Nothing was sent to a server. If your email app did not open automatically, use the button below."}
        </p>
        <div className="contact-success__actions">
          <a href={mailtoHref} className="button button--primary">
            <Mail aria-hidden="true" size={18} />
            <span>{ar ? "أرسل إلى فريق إنوفاتك" : "Email the Innovatek team"}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <button type="button" className="button button--outline" onClick={editDetails}>
            {ar ? "عدّل التفاصيل" : "Edit details"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          <span>{ar ? "الاسم" : "Name"}</span>
          <input
            ref={nameInputRef}
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            placeholder={ar ? "اسمك" : "Your name"}
            defaultValue={savedDraft?.name}
          />
        </label>
        <label>
          <span>{ar ? "بريد العمل" : "Work email"}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@organization.com"
            dir="ltr"
            defaultValue={savedDraft?.email}
          />
        </label>
      </div>
      <label>
        <span>{ar ? "الجهة" : "Organization"}</span>
        <input
          name="organization"
          type="text"
          autoComplete="organization"
          required
          minLength={2}
          placeholder={ar ? "اسم الجهة" : "Organization name"}
          defaultValue={savedDraft?.organization}
        />
      </label>
      <label>
        <span>{ar ? "ما مسار العمل الذي تريد تحسينه؟" : "Which workflow should we improve first?"}</span>
        <textarea
          name="challenge"
          required
          minLength={20}
          rows={5}
          placeholder={
            ar
              ? "صف أين يتباطأ العمل، ومن يستخدمه، وما الأنظمة المرتبطة به."
              : "Tell us where work slows down, who uses it and which systems are involved."
          }
          defaultValue={savedDraft?.challenge}
        />
      </label>
      <button type="submit" className="button button--primary contact-form__submit">
        <span>{ar ? "جهّز موجز جلسة العمل" : "Prepare my working-session brief"}</span>
        <ArrowUpRight aria-hidden="true" size={19} />
      </button>
    </form>
  );
}
