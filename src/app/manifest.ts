import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio - Andresinho20049",
    short_name: "andresinho20049",
    lang: "en",
    description:
      "I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience.",
    categories: [
      "Design",
      "Developers",
      "Software Developer",
      "Software Engineer",
      "Full Stack Developer",
      "Portfolio",
      "Resume",
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/favicon.ico",
        sizes: "64x64 48x48 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
