import { LinkAppearanceButton } from "@/components/button/link-appearance-button";
import { SocialMediaComponent } from "@/components/footer/SocialMedia";
import { JsonLd } from "@/components/structure/schema-org";
import Image from "next/image";
import { WebSite } from "schema-dts";

const headline = `Andresinho20049`;
const summary = `Hi there! I'm André Carlos, known on the web as andresinho20049. 
                  I'd love to take a moment to introduce myself and share a bit about my portfolio.`;

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh transition-transform overflow-hidden bg-cover bg-center sm:bg-gradient-to-t from-gray-700 to-gray-900 max-sm:bg-[url('/background/homeBg_mobile.png')]">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1
        className="z-10 text-4xl md:text-5xl lg:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title 
        font-semibold font-display  whitespace-nowrap bg-clip-text hover:bg-gradient-to-b from-white via-white to-primary-500"
      >
        {headline}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-16 mx-2 text-center animate-fade-in p-2 shadow-lg border border-white rounded-lg w-10/12 sm:w-8/12 md:w-6/12">
        <h2 className="text-md sm:text-lg text-white font-mono drop-shadow-md break-keep whitespace-pre-line">
          {summary}
        </h2>
      </div>

      <div className="w-48 animate-fade-in">
        <LinkAppearanceButton href={"/home"}>Get Started</LinkAppearanceButton>
      </div>

      <div className="absolute bottom-5 flex flex-col gap-2 animate-fade-in">
        <SocialMediaComponent />
        <p className="font-mono text-sm font-semibold">My Social media</p>
      </div>

      <Image
        src={"/avatar/Me-min.png"}
        alt="A photo of myself"
        priority
        width={720}
        height={1600}
        className="object-contain object-right-bottom h-3/6 w-min xl:h-4/6 2xl:h-5/6 absolute bottom-0 right-0 max-lg:hidden"
      />
      <Image
        src={"/Logo.png"}
        alt="Logo"
        width={1000}
        height={1091}
        className="object-contain object-left-top h-24 w-11/12 absolute top-5 lef-0 animate-fade-in"
      />
      {SchemaOrgHomePage}
    </div>
  );
}

const SchemaOrgHomePage = JsonLd<WebSite>({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://andresinho20049.com.br/#Andresinho20049",
  image: "https://andresinho20049.com.br/Logo.png",
  url: "https://andresinho20049.com.br/",
  name: "Andresinho20049",
  description:
    "I'm André Carlos, known on the web as andresinho20049, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience.",
  alternateName: [
    "Portfolio - Software Engineer",
    "Developer Fullstack",
    "Computer Science",
    "Developer - André",
    "André Dev",
    "My Portfolio | André",
  ],
  headline: headline,
  text: summary,
  author: {
    "@type": "Person",
    "@id": "https://andresinho20049.com.br/portfolio",
    name: "André Carlos",
    url: "https://github.com/andresinho20049",
    jobTitle: "Software Engineer",
  },
  copyrightYear: "2024",
  dateCreated: "2024-01-12",
  dateModified: "2024-02-19"
});
