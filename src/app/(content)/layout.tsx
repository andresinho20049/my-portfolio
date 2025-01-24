import { FooterComponent } from "@/components/footer/footer";
import { HeaderNav } from "@/components/header/header_nav";
import Script from "next/script";
import { ReactNode } from "react";
import { Graph } from "schema-dts";

interface ILayoutProps {
    children: ReactNode;
}
export default function LayoutContent({ children }: ILayoutProps) {

    return (
      <section id="section-content-lyt" className="flex flex-col	justify-between h-lvh overflow-y-auto overscroll-contain">
        <header className="flex-none">
          <HeaderNav />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="flex-none mt-auto">
          <FooterComponent />
        </footer>
        <Script
          id={"graph-schema"}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(GraphSchemaOrg),
          }}
        />
      </section>
    );
}

const date = new Date().toISOString().split("T")[0];

const GraphSchemaOrg: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://andresinho20049.com.br/home",
      name: "André Carlos",
      description:
        "Hello, I'm André Carlos, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience, I present my portfolio.",
      about: "Introduce me for you",
      copyrightYear: "2024",
      award: ["Developer", "Software engineer", "Full stack"],
      dateCreated: "2024-01-26",
      dateModified: date,
      image: [
        "https://andresinho20049.com.br/Logo.png",
        "https://andresinho20049.com.br/avatar/Me-min.png",
      ],
      headline: "I'm André Carlos",
    },
    {
      "@type": "ContactPage",
      "@id": "https://andresinho20049.com.br/contact",
      name: "Contact | Andresinho20049",
      description:
        "Feel free to contact us (andresinho20049 team), we will get back to you as soon as possible.",
      headline: "Contact Us",
    },
    {
      "@type": "AboutPage",
      "@id": "https://andresinho20049.com.br/about",
      name: "About | Andresinho20049",
      description:
        "A responsive website demonstrating some of my skills linked to its delivery and development.",
      mentions: ["Nextjs", "Tailwind", "Photoshop", "React", "Typescript"],
      headline: "A little about this portfolio"
    },
  ],
};