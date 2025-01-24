import { Projects } from "contentlayer/generated";
import Image from "next/image";
import { HiOutlineArrowRight, HiClock } from "react-icons/hi";
import { LinkAppearanceButton } from "../button/link-appearance-button";
import Link from "next/link";
import { Badge, Kbd } from "flowbite-react";

export const HeroBlockWithImage = (proj: Projects) => {
  const link = `/projects/${proj.slug.split("/").pop()}`;
  const size = proj.body.raw.length;
  const time =
    size < 500
      ? 1
      : size < 1000
      ? 2
      : size < 3000
      ? 3
      : size < 5000
      ? 4
      : size < 10000
      ? 5
      : size < 15000
      ? 7
      : 10;

  return (
    <div className="flex items-center justify-center bg-hero h-lvh">
      <div className="flex flex-col gap-4 landscape:flex-row items-center max-w-8xl">
        <div className="order-last landscape:order-first w-full md:pr-32">
          <h1 className="hidden landscape:block text-2xl lg:text-5xl text-center text-left text-primary-900 leading-tight font-medium animate-title">
            {proj.title}
          </h1>
          <h2 className="mt-2 md:mt-10 text-md md:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed animate-fade-in">
            {proj.description}
          </h2>
          <div className="mt-6 flex flex-row justify-start animate-fade-in">
            <LinkAppearanceButton href={link}>
              See More
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </LinkAppearanceButton>
          </div>
        </div>

        <div className="order-first landscape:order-last w-full landscape:w-1/2 ">
          <div className="landscape:hidden drop-shadow-lg bg-blend-difference backdrop-blur-md">
            <h1 className="text-2xl  text-center text-primary-900 leading-tight font-medium">
              {proj.title}
            </h1>
          </div>
          <div className="w-1/2 landscape:w-full mx-auto group relative">
            <Image
              className="group-hover:opacity-30"
              src={proj.imgSrc}
              alt={proj.title}
              width={1080}
              height={1920}
            />
            <div className="absolute bottom-0 h-min w-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500 ease-in-out bg-gray-900/60 hover:bg-gray-900">
              <BackdropComponent
                title={proj.title}
                summary={proj.body.raw}
                link={link}
                tags={proj.tags ? proj.tags.split("|") : []}
                time={time}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IBackdropProps {
  title: string;
  tags: string[];
  summary: string;
  link: string;
  time: number;
}

const BackdropComponent = ({
  title,
  tags,
  summary,
  link,
  time,
}: IBackdropProps) => {
  return (
    <div className="p-4 h-full flex flex-col rounded-lg">
      <Link
        className="block mb-2 text-xl font-semibold text-primary-700 hover:underline"
        href={link}
      >
        {title}
      </Link>

      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
        {tags.map((tag, idx) => (
          <Kbd key={idx}>{tag}</Kbd>
        ))}
      </div>

      <p className="mt-2 text-gray-500">
        {summary.substring(0, summary.length < 110 ? summary.length : 110)}
        {"..."}
        <Link href={link} className="text-secondary-700 hover:underline">
          Read more
        </Link>
      </p>

      <div className="flex items-center mt-6 text-sm text-gray-500">
        <Badge color="gray" icon={HiClock}>
          {time} min read
        </Badge>
      </div>
    </div>
  );
};
