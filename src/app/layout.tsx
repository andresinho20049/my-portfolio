import { Analytics } from "@/components/header/analytics";
import { ThemeProvider } from "@/components/structure/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Andresinho20049",
    template: "%s | Andresinho20049",
  },
  description:
    "I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience.",
  keywords: [
    "Andresinho20049",
    "andresinho20049",
    "Andre Carlos",
    "andre carlos",
    "Portfolio",
    "Portifolio",
    "Nextjs",
    "Developer",
    "Typescript",
    "Dev Java",
    "Dev NodeJs",
    "Spring Boot with Docker",
    "Desenvolvedor",
    "Dev",
    "dev",
    "Software Engineer",
    "software engineer",
    "Full stack",
  ],
  authors: [
    {
      name: "André Carlos",
      url: "https://github.com/andresinho20049",
    },
  ],
  icons: {
    icon: "/icons/android-chrome-192x192",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  robots: "/robots.txt",
  manifest: "/manifest.webmanifest",
  verification: {
    google: `${process.env.googleSiteVerification}`,
  },
  alternates: {
    canonical: "https://andresinho20049.com.br/",
  },
  themeColor: [
    {
      color: "#000",
      media: "(prefers-color-scheme: dark)",
    },
    {
      color: "#fff",
      media: "light",
    },
  ],
  colorScheme: "dark light",
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
  openGraph: {
    type: "website",
    url: "https://andresinho20049.com.br/",
    title: "Portfolio | Andresinho20049",
    description:
      "I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience.",
    siteName: "Portfolio | Andresinho20049",
    images: [
      {
        url: "/og-Image.jpg",
        type: "image/jpg",
        alt: "Logo | Andresinho20049",
        width: 1200,
        height: 630,
      },
      {
        url: "/og-Image-2.jpg",
        type: "image/jpg",
        alt: "Logo | Andresinho20049",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "Portfolio | Andresinho2009",
    creator: "@andresinho20049",
    title: "Portfolio | Andresinho20049",
    description:
      "I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience.",
    images: ["/og-Image.jpg", "/og-Image-2.jpg"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen overflow-hidden ${inter.className}`}>
        <Script
          id="ads-google-1"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADS_GID}`}
          crossOrigin="anonymous"
        />
        <GoogleTagManager gtmId={process.env.GTMID || ""} />
        <GoogleAnalytics gaId={process.env.GAID || ""} />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
