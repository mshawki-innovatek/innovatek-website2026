/**
 * Per-device submission throttle shared by every form that sends through
 * EmailJS: the contact form and the landing page demo form both draw on one
 * provider quota and one inbox, so they draw on one allowance here too.
 *
 * Enforcement lives in `startContactEmail`, which is the single choke point in
 * front of the provider. This is a nuisance control rather than a security
 * boundary: it is client side, so clearing site data resets it. It fails open
 * whenever storage is unavailable, because losing a real enquiry costs more
 * than letting an extra send through.
 */

const STORAGE_KEY = "innovatek.contact.submissions";

const RULES = [
  { windowMs: 10 * 60_000, max: 3 },
  { windowMs: 24 * 60 * 60_000, max: 10 },
] as const;

const LONGEST_WINDOW_MS = Math.max(...RULES.map((rule) => rule.windowMs));

/**
 * Stamps double as allowance tokens and must stay unique, so a claim landing
 * in the same millisecond as another is nudged forward. Reads tolerate that
 * much drift ahead of the clock; anything beyond it is treated as tampering.
 */
const FUTURE_TOLERANCE_MS = 1_000;

export type RateLimitVerdict = { allowed: true } | { allowed: false; retryAt: number };

/** Session fallback for browsers that block localStorage (private mode, cookie blockers). */
let memoryStamps: number[] = [];

function storage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function parseStamps(raw: string): number[] {
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    return value.filter(
      (item): item is number => typeof item === "number" && Number.isFinite(item),
    );
  } catch {
    return [];
  }
}

function readStamps(now: number): number[] {
  const store = storage();
  let raw: string | null = null;

  if (store) {
    try {
      raw = store.getItem(STORAGE_KEY);
    } catch {
      raw = null;
    }
  }

  const stamps = raw === null ? memoryStamps : parseStamps(raw);

  // Drop expired entries, and far-future ones so a changed system clock cannot
  // lock the form permanently.
  return stamps.filter(
    (stamp) =>
      stamp <= now + FUTURE_TOLERANCE_MS && stamp > now - LONGEST_WINDOW_MS,
  );
}

function writeStamps(stamps: number[]): void {
  memoryStamps = stamps;

  const store = storage();
  if (!store) return;

  try {
    store.setItem(STORAGE_KEY, JSON.stringify(stamps));
  } catch {
    // Quota or policy failure: the in-memory copy still throttles this session.
  }
}

export function checkContactRateLimit(now = Date.now()): RateLimitVerdict {
  const stamps = readStamps(now).sort((a, b) => a - b);
  let retryAt = 0;

  for (const rule of RULES) {
    const inWindow = stamps.filter((stamp) => stamp > now - rule.windowMs);
    if (inWindow.length < rule.max) continue;
    // The window frees up once the oldest entry holding us at the cap ages out.
    retryAt = Math.max(retryAt, inWindow[inWindow.length - rule.max] + rule.windowMs);
  }

  return retryAt > now ? { allowed: false, retryAt } : { allowed: true };
}

/**
 * Claims an allowance. Recorded before the send rather than after it, so a
 * burst of parallel calls cannot all clear the check before any of them counts.
 * Returns the stamp, which doubles as the token for handing the claim back.
 */
export function recordContactSubmission(now = Date.now()): number {
  const stamps = readStamps(now);
  // Keep tokens distinct so releasing one claim cannot free another's.
  const stamp = stamps.includes(now) ? Math.max(...stamps) + 1 : now;
  writeStamps([...stamps, stamp]);
  return stamp;
}

/** Returns an allowance claimed for a send that never reached the provider. */
export function releaseContactSubmission(stamp: number, now = Date.now()): void {
  const stamps = readStamps(now);
  const index = stamps.indexOf(stamp);
  if (index === -1) return;
  stamps.splice(index, 1);
  writeStamps(stamps);
}

/**
 * Whole minutes only: the throttle notice sits in a live region, so a
 * per-second countdown would be announced over and over by screen readers.
 */
export function formatRetryIn(remainingMs: number, locale: "en" | "ar"): string {
  const minutes = Math.max(1, Math.ceil(remainingMs / 60_000));
  return new Intl.RelativeTimeFormat(locale === "ar" ? "ar-AE" : "en-AE", {
    numeric: "auto",
  }).format(minutes, "minute");
}
