import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Mediapartners-Google",
          "Googlebot/2.1",
        ],
        allow: ["/"],
      },
    ],
    sitemap: [
      "https://andresinho20049.com.br/sitemap_index.xml",
      "https://andresinho20049.com.br/sitemap.xml",
      "https://andresinho20049.com.br/image-sitemap.xml",
    ],
    host: "andresinho20049.com.br",
  };
}
