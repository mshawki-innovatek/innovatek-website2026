"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import type { Locale } from "@/lib/content";
import {
  buildContactMailto,
  ContactEmailTimeoutError,
  describeContactEmailError,
  startContactEmail,
} from "@/lib/contact-email";
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

type SendState = "idle" | "sending" | "error" | "timeout";

const EMPTY_DRAFT: Draft = {
  name: "",
  email: "",
  organization: "",
  challenge: "",
};

export function ContactForm({ locale }: ContactFormProps) {
  const [draft, setDraft] = useState<Draft>(EMPTY_DRAFT);
  const [submittedDraft, setSubmittedDraft] = useState<Draft | null>(null);
  const [sendState, setSendState] = useState<SendState>("idle");
  const submissionActiveRef = useRef(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ar = locale === "ar";
  const services = ar ? "طلب جلسة عمل" : "Working session request";
  const fallbackHref = buildContactMailto(
    {
      name: draft.name,
      email: draft.email,
      organization: draft.organization,
      services,
      message: draft.challenge,
    },
    locale,
  );

  function updateDraft(field: keyof Draft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
    if (sendState !== "sending") setSendState("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionActiveRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextDraft: Draft = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      challenge: String(formData.get("challenge") ?? "").trim(),
    };
    const challengeField = form.elements.namedItem(
      "challenge",
    ) as HTMLTextAreaElement | null;

    if (challengeField && nextDraft.challenge.length < 20) {
      challengeField.setCustomValidity(
        ar
          ? "يرجى كتابة 20 حرفاً على الأقل عن مسار العمل."
          : "Please enter at least 20 characters about the workflow.",
      );
      challengeField.reportValidity();
      challengeField.focus();
      return;
    }
    challengeField?.setCustomValidity("");

    if (
      nextDraft.name.length < 2 ||
      nextDraft.organization.length < 2 ||
      !nextDraft.email
    ) {
      form.reportValidity();
      return;
    }

    submissionActiveRef.current = true;
    setSendState("sending");
    const operation = startContactEmail({
      name: nextDraft.name,
      email: nextDraft.email,
      organization: nextDraft.organization,
      services,
      message: nextDraft.challenge,
    });

    try {
      await operation.result;
      setSubmittedDraft(nextDraft);
      setDraft(EMPTY_DRAFT);
      setSendState("idle");
    } catch (error) {
      console.error(
        "[contact form] send failed:",
        describeContactEmailError(error),
      );
      setSendState(
        error instanceof ContactEmailTimeoutError ? "timeout" : "error",
      );
    } finally {
      void operation.settled.then(() => {
        submissionActiveRef.current = false;
      });
    }
  }

  function sendAnotherRequest() {
    setSubmittedDraft(null);
    setSendState("idle");
    requestAnimationFrame(() => nameInputRef.current?.focus());
  }

  if (submittedDraft) {
    const submittedFallback = buildContactMailto(
      {
        name: submittedDraft.name,
        email: submittedDraft.email,
        organization: submittedDraft.organization,
        services,
        message: submittedDraft.challenge,
      },
      locale,
    );

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
            ? `شكراً ${submittedDraft.name}. وصل طلبك إلى فريق إنوفاتك، وسنرد خلال يوم عمل واحد.`
            : `Thanks, ${submittedDraft.name}. Your request reached the Innovatek team. We reply within one working day.`}
        </h3>
        <p>
          {ar
            ? `الجهة: ${submittedDraft.organization}. أُرسلت بيانات النموذج إلى ${CONTACT.email}.`
            : `Organisation: ${submittedDraft.organization}. The form details were sent to ${CONTACT.email}.`}
        </p>
        <div className="contact-success__actions">
          <a href={submittedFallback} className="button button--primary">
            <Mail aria-hidden="true" size={18} />
            <span>{ar ? "راسلنا مباشرة" : "Email us directly"}</span>
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <button
            type="button"
            className="button button--outline"
            onClick={sendAnotherRequest}
          >
            {ar ? "أرسل طلباً آخر" : "Send another request"}
          </button>
        </div>
      </div>
    );
  }

  const sending = sendState === "sending";
  const submitLabel = sending
    ? ar
      ? "جارٍ الإرسال…"
      : "Sending…"
    : ar
      ? "احجز عرضاً توضيحياً"
      : "Book a demo";
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      aria-busy={sending}
    >
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
            maxLength={120}
            placeholder={ar ? "اسمك" : "Your name"}
            value={draft.name}
            onChange={(event) => updateDraft("name", event.target.value)}
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
            value={draft.email}
            onChange={(event) => updateDraft("email", event.target.value)}
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
          maxLength={160}
          placeholder={ar ? "اسم الجهة" : "Organization name"}
          value={draft.organization}
          onChange={(event) => updateDraft("organization", event.target.value)}
        />
      </label>
      <label>
        <span>
          {ar
            ? "ما مسار العمل الذي تريد تحسينه؟"
            : "Which workflow should we improve first?"}
        </span>
        <textarea
          name="challenge"
          required
          minLength={20}
          maxLength={2000}
          rows={5}
          placeholder={
            ar
              ? "صف أين يتباطأ العمل، ومن يستخدمه، وما الأنظمة المرتبطة به."
              : "Tell us where work slows down, who uses it and which systems are involved."
          }
          value={draft.challenge}
          onChange={(event) => {
            event.currentTarget.setCustomValidity("");
            updateDraft("challenge", event.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        className="button button--primary contact-form__submit"
        disabled={sending}
      >
        <span>{submitLabel}</span>
        <ArrowUpRight aria-hidden="true" size={19} />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {sendState === "error" || sendState === "timeout" ? (
          <p
            role="alert"
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "600",
              color: "var(--color-red-600)",
              textAlign: "center",
            }}
          >
            {sendState === "timeout"
              ? ar
                ? "لم يصل تأكيد التسليم في الوقت المحدد. تجنّب الإرسال المتكرر وراسلنا مباشرة إذا لم يصلك رد."
                : "Delivery was not confirmed in time. Avoid repeated submissions and email us directly if you do not hear back."
              : ar
                ? "تعذّر إرسال الطلب. بقيت بياناتك في النموذج لتعيد المحاولة."
                : "The request could not be sent. Your details remain in the form so you can retry."}{" "}
            <a href={fallbackHref}>{ar ? "افتح بريدك" : "Open email fallback"}</a>
          </p>
        ) : (
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "var(--text-secondary)",
              textAlign: "center",
            }}
          >
            {ar
              ? `يُرسل النموذج بياناتك إلى ${CONTACT.email}. يمكنك استخدام البريد المباشر بدلاً منه.`
              : `This form sends your details to ${CONTACT.email}. You can use direct email instead.`}{" "}
            <a href={fallbackHref}>{ar ? "البريد المباشر" : "Direct email"}</a>
          </p>
        )}
      </div>
    </form>
  );
}
