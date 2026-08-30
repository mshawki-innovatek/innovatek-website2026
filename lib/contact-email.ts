import emailjs from "@emailjs/browser";
import { CONTACT, SITE_NAME } from "@/lib/site";

/**
 * Provider settings come from the environment only. There are deliberately no
 * baked-in defaults: a missing variable must fail loudly and fall back to the
 * mailto path, rather than silently posting to whichever account was wired up
 * when this file was last edited. Whoever owns the mailbox sets these three
 * values at build time and needs no code change.
 */
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "",
} as const;

export const isContactEmailConfigured = Boolean(
  EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey,
);

export type ContactRequest = {
  name: string;
  email: string;
  organization: string;
  phone?: string;
  services: string;
  message?: string;
};

export type EmailJsTemplatePayload = {
  from_name: string;
  Email: string;
  Company: string;
  Phone: string;
  services: string;
  message: string;
};

export type ContactLocale = "en" | "ar";

export class ContactEmailTimeoutError extends Error {
  constructor() {
    super("EmailJS did not confirm delivery before the request timed out.");
    this.name = "ContactEmailTimeoutError";
  }
}

/**
 * Turns a send failure into something readable in the console. The provider
 * rejects with { status, text } and that text carries the real cause (bad SMTP
 * credentials, quota, blocked origin), which the UI deliberately does not show.
 */
export function describeContactEmailError(error: unknown): string {
  if (error instanceof ContactEmailTimeoutError) return error.message;
  if (typeof error === "object" && error !== null && "text" in error) {
    const { status, text } = error as { status?: number; text?: string };
    return `mail provider rejected the request (status ${status ?? "unknown"}): ${text || "no detail"}`;
  }
  return error instanceof Error ? error.message : String(error);
}

export function toEmailJsPayload(
  request: ContactRequest,
): EmailJsTemplatePayload {
  return {
    from_name: request.name,
    Email: request.email,
    Company: request.organization,
    Phone: request.phone ?? "",
    services: request.services,
    message: request.message ?? "",
  };
}

export function startContactEmail(
  request: ContactRequest,
  timeoutMs = 12_000,
) {
  if (!isContactEmailConfigured) {
    const failure = Promise.reject(
      new Error(
        "Mail provider is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY at build time.",
      ),
    );
    return { result: failure, settled: failure.catch(() => undefined) };
  }

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const transport = emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    toEmailJsPayload(request),
    { publicKey: EMAILJS_CONFIG.publicKey },
  );
  const settled = transport.then(
    () => undefined,
    () => undefined,
  );
  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(
      () => reject(new ContactEmailTimeoutError()),
      timeoutMs,
    );
  });
  const result = Promise.race([transport, timeout])
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`EmailJS returned status ${response.status}.`);
      }
      return response;
    })
    .finally(() => {
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    });

  return { result, settled };
}

export async function sendContactEmail(
  request: ContactRequest,
  timeoutMs = 12_000,
) {
  const operation = startContactEmail(request, timeoutMs);
  return operation.result;
}

export function buildContactMailto(
  request: Partial<ContactRequest> = {},
  locale: ContactLocale = "en",
) {
  const ar = locale === "ar";
  const subject = ar
    ? `طلب جلسة عمل مع ${SITE_NAME}`
    : `${SITE_NAME} working session request`;
  const lines = ar
    ? [
        `الاسم: ${request.name ?? ""}`,
        `البريد الإلكتروني: ${request.email ?? ""}`,
        `الجهة: ${request.organization ?? ""}`,
        `الهاتف: ${request.phone ?? ""}`,
        `الخدمة: ${request.services ?? ""}`,
        "",
        "التفاصيل:",
        request.message ?? "",
      ]
    : [
        `Name: ${request.name ?? ""}`,
        `Email: ${request.email ?? ""}`,
        `Organisation: ${request.organization ?? ""}`,
        `Phone: ${request.phone ?? ""}`,
        `Service: ${request.services ?? ""}`,
        "",
        "Details:",
        request.message ?? "",
      ];

  return `${CONTACT.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
