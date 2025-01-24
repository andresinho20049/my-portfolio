import Image from "next/image";
import Link from "next/link";

export const SeeMyWorks = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="hidden lg:block w-1/2 h-auto">
        <Image
          width={1200}
          height={1800}
          className="h-full w-full object-cover"
          src="/cards/responsive_presentation.png"
          alt="Winding mountain road"
        />
      </div>
      <div className="w-full bg-white lg:z-10 lg:shadow-lg lg:absolute lg:top-0 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-gray-800 lg:text-4xl">
            See my <strong className="text-primary-700">Works</strong>
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed text-pretty whitespace-pre-line text-sm lg:text-base ">
            {`I worked in multinational IT consultancies, where I was involved in several projects that use Scrum methodologies. 
            
            I'm familiar with the terms used in scrum and kanban methodologies. 
            
            I also had the pleasure of having my projects validated by experienced QA teams, and having the satisfaction of seeing them running in production.`}
          </p>
          <div className="mt-8">
            <Link
              href="/portfolio/projects"
              className="inline-block w-full text-center text-lg font-medium text-primary-700 border-primary-700 border-solid border-2 py-4 hover:scale-[1.2] px-6 hover:text-primary-400 hover:border-primary-400 transition-transform duration-200 ease-in-out rounded hover:shadow-md md:w-52"
            >
              Career Highlights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
