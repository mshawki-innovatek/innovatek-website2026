import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Innovatek SWD",
    short_name: "Innovatek",
    description:
      "AI-native operational software for giving, facilities, visitors and customer engagement.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FB",
    theme_color: "#0A1020",
    lang: "en-AE",
    dir: "ltr",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
