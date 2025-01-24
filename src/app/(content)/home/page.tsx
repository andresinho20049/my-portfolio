import { FullHeroSection } from "@/components/hero-block/full-hero-section";
import { IntroduceMeBlock } from "@/components/hero-block/introduce-me";
import { SeeMyWorks } from "@/components/hero-block/see-my-work";
import { ShowSvgsComponent } from "@/components/hero-block/show-svgs";
import { ShowcaseChooseUs } from "@/components/hero-block/showcase-chose-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Hello, I'm André Carlos, I'm a developer with a bachelor's degree in Computer Science and more than 5 years of experience, I present my portfolio.",
  keywords: ["Portfolio", "Landing page", "Inspiration"],
};

export default function Resume() {
  return (
    <div className="min-h-screen">
      <IntroduceMeBlock />
      <SeeMyWorks />
      <div className="hidden md:block">
        <ShowSvgsComponent />
      </div>
      <FullHeroSection
        msg="With my passion for both software and hardware, I started my career as a back-end programmer, so Bitwise."
        title={
          <>
            Would you like to <span className="text-blue-700">know me</span>{" "}
            better?
          </>
        }
        urlLink="/portfolio"
        textLink="Visit my resume"
        imgSrc="/avatar/me-and-family.png"
      />
      <ShowcaseChooseUs />
    </div>
  );
}
