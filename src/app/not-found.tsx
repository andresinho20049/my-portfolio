import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-col justify-between w-full h-full lg:w-8/12">
        <nav className="flex px-4 justify-between items-center">
          <div className="landscape:size-12 landscape:lg:size-28 size-28">
            <Image
              alt="my-logo Logo"
              src={"/svg/my-logo.svg"}
              width={124}
              height={124}
            />
          </div>
        </nav>
        <section className="px-4 flex items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Page <span className="text-red-700">not found</span>, need help?
            </h1>
            <div className="w-36 h-2 bg-red-700 my-4"></div>
            <div className="text-md lg:text-xl mb-5 lg:mb-16">
              <p>
                <a
                  href="/home"
                  className="no-underline hover:underline decoration-red-700"
                >
                  {"click here"}
                </a>{" "}
                to return to home page
              </p>
            </div>
            <div className="text-md lg:text-xl mb-5 lg:mb-16 space-y-2">
              <p>
                If you need any help, please click the button below to contact
                us.
              </p>
              <hr className="max-w-2xl" />
              <div className="w-36">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-1 text-white hover:text-gray-400 bg-red-500 dark:bg-transparent text-md font-medium px-4 py-1 border-2 border-red-200 border-y-red-500 hover:border-y-red-200 transition-colors rounded-md"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden lg:flex h-full w-4/12 px-2 items-end">
        <Image
          width={894}
          height={1280}
          src={"/background/404.png"}
          alt="Ilustrate Image"
          className="object-contain"
        />
      </div>
    </div>
  );
}
