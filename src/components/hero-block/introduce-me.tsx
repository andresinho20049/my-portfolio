import Image from "next/image";

export const IntroduceMeBlock = () => {
  return (
    <div className="bg-fixed bg-cover bg-center lg:bg-right bg-[url('/background/resumeBg_home-min.png')] p-8 flex gap-4 h-screen border-b-2">
      <div className="h-5/6 flex flex-col items-center justify-center gap-1 md:gap-4 prose dark:prose-invert lg:prose-lg xl:prose-xl text-center">
        <div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary-500 pr-1 max-sm:text-2xl">
            {"I'm André Carlos"}
          </h1>
        </div>
        <div className="animate-fade-in">
          <p className="leading-relaxed text-center clear-left text-pretty whitespace-pre-line text-lg font-normal">
            {`I'm a Developer with a bachelor's degree in Computer Science and I've more than 5 years of experience, I present my portfolio.

              Through my experience, I have learned to approach each project with a growth mindset, eager to contribute meaningfully and make a difference. I'm constantly striving to improve and face new challenges, confident in my abilities to deliver high-quality work.`}
          </p>
        </div>
      </div>
      <div className="hidden lg:block h-5/6 w-3/12 2xl:w-5/12">
        <DevIconsAnimation />
      </div>
    </div>
  );
};

const DevIconsAnimation = () => {
  return (
    <div className="flex justify-between group relative h-full w-full">
      <div className="flex flex-col justify-between">
        <Image
          className="animate-fadeOutRight group-hover:animate-skewEffect"
          alt="spring Logo"
          src={"/svg/spring.svg"}
          width={98}
          height={98}
        />
        <Image
          className="ml-20 hidden 2xl:block animate-fadeOutRight group-hover:animate-skewEffect"
          alt="react Logo"
          src={"/svg/react.svg"}
          width={80}
          height={80}
        />
        <Image
          className="animate-fadeOutRight group-hover:animate-skewEffect"
          alt="junit Logo"
          src={"/svg/junit.svg"}
          width={98}
          height={98}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="hidden xl:flex gap-2">
          <Image
            className="animate-bounceOpacityLeft group-hover:animate-skewEffect"
            alt="html Logo"
            src={"/svg/html.svg"}
            width={80}
            height={80}
          />

          <Image
            className="animate-bounceOpacityRight group-hover:animate-skewEffect"
            alt="css Logo"
            src={"/svg/css.svg"}
            width={80}
            height={80}
          />
        </div>
        <div className="flex justify-evenly h-3/6">
          <div className="hidden 2xl:flex flex-col justify-between">
            <Image
              className="animate-fadeOutLeft group-hover:animate-skewEffect"
              alt="git Logo"
              src={"/svg/git.svg"}
              width={90}
              height={90}
            />
            <Image
              className="animate-fadeOutBottom group-hover:animate-skewEffect"
              alt="docker Logo"
              src={"/svg/docker.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="self-center	">
            <Image
              className="animate-sizeOpacity group-hover:animate-bounceOpacity"
              alt="java Logo"
              src={"/svg/java.svg"}
              width={124}
              height={124}
            />
          </div>
          <div className="hidden 2xl:flex flex-col justify-between">
            <Image
              className="animate-fadeOutTop group-hover:animate-skewEffect"
              alt="jenkins Logo"
              src={"/svg/jenkins.svg"}
              width={80}
              height={80}
            />
            <Image
              className="animate-fadeOutRight group-hover:animate-skewEffect"
              alt="jira Logo"
              src={"/svg/jira.svg"}
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="hidden xl:flex gap-2">
          <Image
            className="animate-fadeOutLeft group-hover:animate-skewEffect"
            alt="typescript Logo"
            src={"/svg/typescript.svg"}
            width={80}
            height={80}
          />

          <Image
            className="animate-fadeOutRight group-hover:animate-skewEffect"
            alt="javascript Logo"
            src={"/svg/javascript.svg"}
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Image
          className="animate-fadeOutLeft group-hover:animate-skewEffect"
          alt="maven Logo"
          src={"/svg/maven.svg"}
          width={106}
          height={106}
        />
        <Image
          className="mr-20 hidden 2xl:block animate-fadeOutLeft group-hover:animate-skewEffect"
          alt="angular Logo"
          src={"/svg/angular.svg"}
          width={80}
          height={80}
        />
        <Image
          className="animate-fadeOutLeft group-hover:animate-skewEffect"
          alt="eclipse Logo"
          src={"/svg/eclipse.svg"}
          width={110}
          height={110}
        />
      </div>
    </div>
  );
};
