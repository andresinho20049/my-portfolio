"use client";

import { usePathname } from "next/navigation";
import { LinkTabs } from "../button/link-tab";
import { FaArrowRight } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

interface ITabsPortfolio {
  name: string;
  href: string;
}

export const CardResume = () => {
  const pathname = usePathname();

  const listTab: ITabsPortfolio[] = [
    {
      name: "Resume",
      href: "",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Timeline",
      href: "/timeline",
    },
    // {
    //   name: "Jobs",
    //   href: "/jobs",
    // },
  ];

  return (
    <div className="shadow-md rounded-lg pb-6 bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col items-center p-6 text-center">
        <Image
          alt="Andre Photo"
          src="/team/andresinho.jpg"
          className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
          height={400}
          width={400}
        />
        <h1 className="text-lg xl:text-xl font-bold">André Carlos</h1>
        <p className="text-gray-700 dark:text-gray-400 text-sm lg:text-md">
          Software Engineer
        </p>
      </div>
      {/* <hr className="my-6 border-t border-gray-300"> */}
      <div className="flex md:flex-col flex-wrap justify-center">
        {listTab.map((tab) => (
          <LinkTabs
            key={tab.href}
            href={`/portfolio${tab.href}`}
            isActive={`/portfolio${tab.href}` === pathname}
          >
            {tab.name}
          </LinkTabs>
        ))}
        <Link
          className="hidden md:flex justify-center items-center gap-4 mt-8 hover:underline hover:text-primary-400"
          href={"/contact"}
        >
          Contact <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
