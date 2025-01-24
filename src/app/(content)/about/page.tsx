import { TypewriterComponent } from "@/components/iteraction/typewriter";
import { Metadata } from "next";
import Image from "next/image";
import { FaCode, FaConnectdevelop } from "react-icons/fa6";
import { MdEmail, MdSpeed } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { SlSizeActual } from "react-icons/sl";
import { TbSeo } from "react-icons/tb";

export const metadata: Metadata = {
  title: "About",
  description: "A responsive website demonstrating some of my skills linked to its delivery and development."
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-16">
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          A little
          <span className="text-blue-700 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            about
            <Image
              alt="line"
              src={"/svg/line-simple.svg"}
              height={18}
              width={112}
            />
          </span>
          {" this portfolio"}
        </h1>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          A responsive website demonstrating some of my skills linked to its
          delivery and development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <TbSeo size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">
              Search Engine Optimization
            </h2>
            <p className="mt-1 text-gray-500">
              Original content, with concise and meaningful descriptions. Uses
              consistent fonts and typography for clarity and professionalism.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <SlSizeActual size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">Fully Responsive</h2>
            <p className="mt-1 text-gray-500">
              Fully responsive website allowing you to access it from wherever
              you feel most comfortable.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <SiSpeedtest size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">Lighthouse & PSI</h2>
            <p className="mt-1 text-gray-500">
              Our pages were tested with the Lighthouse tool, and others to
              ensure good Performance, Accessibility, SEO, and best practices
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <MdSpeed size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">Server-side Rendering</h2>
            <p className="mt-1 text-gray-500">
              Server-Side Rendering (SSR) prioritizing static content delivery,
              bringing lightness, browser compatibility and improving SEO
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <FaCode size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">Clean Code</h2>
            <p className="mt-1 text-gray-500">
              We follow good clean code practices along with S.O.L.I.D
              principles.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <MdEmail size={24} />
          </span>
          <div>
            <h2 className="font-semibold text-xl">Contact</h2>
            <p className="mt-1 text-gray-500">
              Our contact page has a form with integration the GCP Gmail API, so
              feel free to contact us
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5 mt-28">
        <div className="flex flex-col justify-center">
          <div className="text-center">
            <h1 className="font-semibold text-3xl">Tools used</h1>

            <p className="max-w-md mx-auto mt-2 text-gray-500">
              Below I list the tools used in the development of this website
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 mt-2 md:justify-around">
            <div className="size-16">
              <Image
                alt="next Logo"
                src={"/svg/next.svg"}
                width={124}
                height={124}
              />
            </div>

            <div className="size-18">
              <Image
                alt="React Logo"
                src={"/svg/react-right.svg"}
                width={124}
                height={124}
              />
            </div>

            <div className="size-18">
              <Image
                alt="tailwind Logo"
                src={"/svg/tailwind.svg"}
                width={124}
                height={124}
              />
            </div>

            <div className="size-12">
              <Image
                alt="Typescript Logo"
                src={"/svg/typescript.svg"}
                width={124}
                height={124}
              />
            </div>

            <div className="size-12">
              <Image
                alt="photoshop Logo"
                src={"/svg/photoshop.svg"}
                width={124}
                height={124}
              />
            </div>
          </div>
        </div>
        <div className="text-xl text-center tracking-wide h-12 notranslate select-none">
          <TypewriterComponent />
        </div>
      </div>
    </div>
  );
}
