import { IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Self-hosted at build time, so Arabic renders identically on Windows, Linux and
// macOS. Arabic subset only: Latin glyphs in RTL text fall through to Outfit.
export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});
