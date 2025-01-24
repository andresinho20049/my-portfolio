import { AdsenseHorizontalComponent } from "@/components/google/AdsenseComponent";
import { HeroBlockWithImage } from "@/components/hero-block/hero-with-image";
import { Projects, allProjects } from "contentlayer/generated";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "As a full stack developer, I demonstrate some of the projects developed by us. feel free to look",
};

export default async function PageProjects() {
  return (
    <section>
      <div className="snap-start scroll-py-6">
        <Image
          alt="Timeline Art"
          src="/background/ProjectsCover.png"
          width={1024}
          height={720}
          className="mx-auto"
        />
      </div>
      {allProjects
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map((proj, idx) => {
          if (idx > 0 && idx % 3 == 0) {
            return (
              <div key={idx}>
                <HeroBlockAds />
                <HeroBlockProject proj={proj} />
              </div>
            );
          }

          return <HeroBlockProject key={idx} proj={proj} />;
        })}
    </section>
  );
}

interface IHeroBlockProjectProps {
  proj: Projects;
}

const HeroBlockProject = ({ proj }: IHeroBlockProjectProps) => {
  return (
    <div className="snap-center snap-always">
      <HeroBlockWithImage
        _id={proj._id}
        _raw={proj._raw}
        title={proj.title}
        description={proj.description}
        date={proj.date}
        body={proj.body}
        tags={proj.tags}
        imgSrc={proj.imgSrc}
        slug={proj.slug}
        slugAsParams={proj.slugAsParams}
        type={proj.type}
      />
    </div>
  );
};

const HeroBlockAds = () => {
  return (
    <div className="snap-center snap-always">
      <div className="h-lvh w-full flex justify-center items-center">
        <div className="w-9/12 h-5/6">
          <AdsenseHorizontalComponent />
        </div>
      </div>
    </div>
  );
};
