import Image from "next/image";


export const ShowSvgsComponent = () => {
    return (
      <div className="h-96 bg-fixed bg-cover bg-top fill-white stroke-white bg-[url('/background/showSvgBg-light.svg')] dark:bg-[url('/background/showSvgBg-dark.svg')] p-8 group">
        <div className="max-w-4xl h-5/6 flex flex-col justify-between">
          <div className="w-full flex justify-evenly">
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="spring Logo"
              src={"/svg/spring.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="redis Logo"
              src={"/svg/redis.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="java Logo"
              src={"/svg/java.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="postgres Logo"
              src={"/svg/postgres.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="junit Logo"
              src={"/svg/junit.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="w-full flex justify-between">
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="docker Logo"
              src={"/svg/docker.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="nginx Logo"
              src={"/svg/nginx.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="w-full flex justify-evenly">
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="react Logo"
              src={"/svg/react.svg"}
              width={60}
              height={60}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="next Logo"
              src={"/svg/next.svg"}
              width={80}
              height={80}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="nodejs Logo"
              src={"/svg/nodejs.svg"}
              width={80}
              height={90}
            />
            <Image
              className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-[1500ms]"
              alt="tailwind Logo"
              src={"/svg/tailwind.svg"}
              width={124}
              height={80}
            />
          </div>
        </div>
      </div>
    );
}