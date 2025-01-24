import { AdsenseSquareComponent } from "@/components/google/AdsenseComponent";
import { TimelineComponent } from "@/components/timeline/TimelineComponent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Timeline",
  description: "This is my timeline, I'm passionate about tech and the whole geek world",
  keywords: ["Dev", "timeline", "geek", "life of the dev"]
};

export default function Timeline() {
  return (
    <section className="snap-start">
      <div className="mb-10">
        <Image
          className="dark:hidden block"
          alt="Timeline Art"
          src="/background/timelineC.png"
          width={1920}
          height={1080}
        />
        <Image
          className="dark:block hidden"
          alt="Timeline Art"
          src="/background/timelineC_darkM.png"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-col justify-center items-center snap-start">
        <TimelineComponent />
      </div>
      <div className="w-full">
        <AdsenseSquareComponent />
      </div>
    </section>
  );
}
