"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
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

const EMAILJS = {
  serviceId: "service_qhrceap",
  templateId: "template_hhl5qlb",
  publicKey: "0-zKFGIfgkaCORhdN",
} as const;

export function ContactForm({ locale }: ContactFormProps) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [savedDraft, setSavedDraft] = useState<Draft | null>(null);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ar = locale === "ar";

  async function sendEmail(d: Draft) {
    return emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      {
        from_name: d.name,
        Email: d.email,
        Company: d.organization,
        Phone: "",
        services: "Not specified",
        message: d.challenge,
      },
      { publicKey: EMAILJS.publicKey },
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const nextDraft: Draft = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      challenge: String(formData.get("challenge") ?? "").trim(),
    };

    if (!nextDraft.name || !nextDraft.email || !nextDraft.organization) return;

    setSending(true);
    setSendError(false);
    try {
      const resp = await sendEmail(nextDraft);
      if (resp.status === 200) {
        setSavedDraft(nextDraft);
        setDraft(nextDraft);
        form.reset();
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  function editDetails() {
    setDraft(null);
    requestAnimationFrame(() => nameInputRef.current?.focus());
  }

  const submitLabel = sending
    ? ar ? "جارٍ الإرسال…" : "Sending…"
    : ar ? "احجز عرضاً توضيحياً" : "Book a demo";

  if (draft) {
    return (
      <div className="contact-success" role="status" aria-live="polite">
        <span className="contact-success__icon">
          <CheckCircle2 aria-hidden="true" size={28} />
        </span>
        <p className="contact-success__kicker">
          {ar ? "تم استلام طلبك" : "Request received"}
        </p>
        <h3>
          {ar
            ? `شكراً ${draft.name}. وصل طلبك إلى فريق إنوفاتك وسنرد خلال يوم عمل واحد.`
            : `Thanks, ${draft.name}. Your request reached the Innovatek team — we reply within one working day.`}
        </h3>
        <p>
          {ar
            ? `الجهة: ${draft.organization}. لم نشارك بياناتك مع أي طرف آخر.`
            : `Organisation: ${draft.organization}. Your details stay with our team.`}
        </p>
        <div className="contact-success__actions">
          <a href={`${CONTACT.emailHref}`} className="button button--primary">
            <Mail aria-hidden="true" size={18} />
            <span>{ar ? "راسلنا مباشرة" : "Email us directly"}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <button type="button" className="button button--outline" onClick={editDetails}>
            {ar ? "أرسل طلباً آخر" : "Send another request"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label>
          <span>{ar ? "الاسم الكامل" : "Full name"}</span>
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
          <span>{ar ? "البريد الإلكتروني للعمل" : "Work email"}</span>
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
        <span>{ar ? "الجهة" : "Organisation"}</span>
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
      <button type="submit" className="button button--primary contact-form__submit" disabled={sending}>
        <span>{submitLabel}</span>
        <ArrowUpRight aria-hidden="true" size={19} />
      </button>
      {sendError ? (
        <p role="alert" style={{ margin: 0, fontSize: "14px", fontWeight: "600", color: "var(--color-red-600)", textAlign: "center" }}>
          {ar ? "تعذّر إرسال الطلب — تحقق من الاتصال وحاول مرة أخرى، أو راسلنا مباشرة." : "Couldn’t send your request — check your connection and try again, or email us directly."}
        </p>
      ) : (
        <p style={{ margin: 0, fontSize: "14px", color: "var(--text-secondary)", textAlign: "center" }}>
          {ar
            ? "نرد خلال يوم عمل واحد. بياناتك تبقى لدى فريقنا."
            : "We reply within one working day. Your details stay with our team."}
        </p>
      )}
    </form>
  );
}
