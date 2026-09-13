"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { Locale } from "@/lib/content";
import {
  buildContactMailto,
  ContactEmailRateLimitError,
  ContactEmailTimeoutError,
  describeContactEmailError,
  startContactEmail,
} from "@/lib/contact-email";
import { checkContactRateLimit, formatRetryIn } from "@/lib/contact-rate-limit";

type DemoDraft = {
  name: string;
  email: string;
  organization: string;
};

type DemoState =
  | "idle"
  | "sending"
  | "sent"
  | "error"
  | "timeout"
  | "throttled";

const EMPTY_DEMO_DRAFT: DemoDraft = {
  name: "",
  email: "",
  organization: "",
};

export function useDemoForm(lang: Locale) {
  const ar = lang === "ar";
  const [demoDraft, setDemoDraft] = useState<DemoDraft>(EMPTY_DEMO_DRAFT);
  const [demoState, setDemoState] = useState<DemoState>("idle");
  const [demoPending, setDemoPending] = useState(false);
  const [demoRetryAt, setDemoRetryAt] = useState<number | null>(null);
  const [demoNow, setDemoNow] = useState(0);
  const demoServices = ar ? "طلب عرض توضيحي" : "Demo request";
  useEffect(() => {
    if (demoState !== "sent") return;
    const reset = setTimeout(() => setDemoState("idle"), 8000);
    return () => clearTimeout(reset);
  }, [demoState]);

  // Read after hydration rather than during render: localStorage is client-only
  // and this page is prerendered as a static export. A timeout rather than an
  // animation frame, because frame callbacks are paused in a background tab.
  useEffect(() => {
    const task = window.setTimeout(() => {
      const verdict = checkContactRateLimit();
      if (verdict.allowed) return;
      setDemoRetryAt(verdict.retryAt);
      setDemoNow(Date.now());
      setDemoState("throttled");
    }, 0);
    return () => window.clearTimeout(task);
  }, []);

  useEffect(() => {
    if (demoRetryAt === null) return;
    const timer = window.setInterval(() => {
      const tick = Date.now();
      setDemoNow(tick);
      if (tick < demoRetryAt) return;
      setDemoRetryAt(null);
      setDemoState((current) => (current === "throttled" ? "idle" : current));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [demoRetryAt]);

  function updateDemoDraft(field: keyof DemoDraft, value: string) {
    setDemoDraft((current) => ({ ...current, [field]: value }));
    if (!demoPending && demoState !== "throttled") {
      setDemoState("idle");
    }
  }

  async function submitDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.dataset.submitting === "true") return;
    const formData = new FormData(form);
    const nextDraft = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
    };
    setDemoDraft(nextDraft);

    // Validate trimmed text before React commits the updated draft. Native
    // minlength considers spaces valid and does not check programmatic values.
    for (const field of ["name", "organization"] as const) {
      const input = form.elements.namedItem(field);
      if (input instanceof HTMLInputElement) {
        input.setCustomValidity(nextDraft[field].length < 2
          ? ar ? "أدخل حرفين على الأقل، دون احتساب المسافات المحيطة." : "Enter at least two characters, excluding surrounding spaces."
          : "");
      }
    }
    if (!form.reportValidity()) return;

    form.dataset.submitting = "true";
    setDemoPending(true);
    setDemoState("sending");
    let operation: ReturnType<typeof startContactEmail> | undefined;
    try {
      operation = startContactEmail({
        name: nextDraft.name,
        email: nextDraft.email,
        organization: nextDraft.organization,
        services: demoServices,
      });
      void operation.settled.then(() => {
        if (form.isConnected) delete form.dataset.submitting;
        setDemoPending(false);
      });
      await operation.result;
      setDemoDraft(EMPTY_DEMO_DRAFT);
      setDemoState("sent");
    } catch (error) {
      if (error instanceof ContactEmailRateLimitError) {
        setDemoRetryAt(error.retryAt);
        setDemoNow(Date.now());
        setDemoState("throttled");
      } else {
        console.error(
          "[demo form] send failed:",
          describeContactEmailError(error),
        );
        setDemoState(
          error instanceof ContactEmailTimeoutError ? "timeout" : "error",
        );
      }
    } finally {
      if (!operation) {
        delete form.dataset.submitting;
        setDemoPending(false);
      }
    }
  }

  return {
      submitDemo,
      demoDraft,
      updateDemoDraft,
      demoState,
      demoPending,
      demoDisabled: demoPending || demoState === "sending" || demoState === "throttled",
      demoFallbackHref: buildContactMailto(
        {
          name: demoDraft.name,
          email: demoDraft.email,
          organization: demoDraft.organization,
          services: demoServices,
        },
        lang,
      ),
      demoFallbackLabel: ar ? "افتح بريدك مباشرة" : "Open direct email",
      demoLabel: (() => {
        if (demoState === "sending") return ar ? "جارٍ الإرسال…" : "Sending…";
        if (demoState === "timeout" && demoPending) return ar ? "بانتظار التأكيد…" : "Awaiting confirmation…";
        if (demoState === "sent") return ar ? "تم الإرسال" : "Sent";
        if (demoState === "error" || demoState === "timeout") {
          return ar ? "أعد المحاولة" : "Try again";
        }
        if (demoState === "throttled") return ar ? "غير متاح مؤقتاً" : "Paused";
        return ar ? "احجز عرضاً توضيحياً" : "Book a demo";
      })(),
      demoNoteColor:
        demoState === "sent"
          ? "var(--color-green-600)"
          : demoState === "error" || demoState === "timeout"
            ? "var(--color-red-600)"
            : demoState === "throttled"
              ? "var(--color-orange-700)"
              : "var(--color-text-tertiary)",
      demoNote: (() => {
        if (demoState === "throttled") {
          const retryLabel =
            demoRetryAt === null
              ? ""
              : formatRetryIn(demoRetryAt - demoNow, lang);
          return ar
            ? `عدد كبير من الطلبات من هذا الجهاز. يمكنك الإرسال مجدداً ${retryLabel}.`
            : `Too many requests from this device. You can submit again ${retryLabel}.`;
        }
        if (demoState === "sent") {
          return ar
            ? "تم تأكيد استلام طلبك. نرد خلال يوم عمل واحد."
            : "Your request was delivered. We reply within one working day.";
        }
        if (demoState === "timeout") {
          return ar
            ? "لم يصل تأكيد التسليم في الوقت المحدد. لا تكرر الإرسال قبل استخدام البريد المباشر."
            : "Delivery was not confirmed in time. Avoid duplicate submissions and use direct email if needed.";
        }
        if (demoState === "error") {
          return ar
            ? "تعذّر الإرسال. بقيت بياناتك في النموذج لإعادة المحاولة."
            : "The request could not be sent. Your details remain in the form for another try.";
        }
        if (demoState === "sending") {
          return ar ? "جارٍ إرسال طلبك…" : "Sending your request…";
        }
        // Idle: no explanatory hint, just the direct-email action beneath it.
        return "";
      })(),
  };
}

export type DemoFormModel = ReturnType<typeof useDemoForm>;
