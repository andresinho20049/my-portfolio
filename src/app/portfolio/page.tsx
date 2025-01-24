import { CardAds } from "@/components/cards/cardAds";
import { SocialMediaComponent } from "@/components/footer/SocialMedia";
import {
  AdsenseArticleComponent,
  AdsenseMultiComponent,
  AdsenseSquareComponent,
} from "@/components/google/AdsenseComponent";
import { myResume } from "@/utils/resumeValue";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "my resume, see my skills, experience and main tools",
};

export default async function portfolio() {
  const {
    name,
    objective,
    summary,
    language,
    academic,
    experience,
    skills,
    badges,
  } = myResume;

  const icons = [
    "html",
    "css",
    "javascript",
    "typescript",
    "angular",
    "react",
    "next",
    "jquery",
    "git",
    "docker",
    "java",
    "spring",
    "postgres",
    "python",
  ];

  return (
    <section className="w-full py-6 flex flex-col xl:flex-row">
      <div className="flex-1 rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto dark:shadow-gray-700 p-4 snap-start ">
        {/* <div className="flex justify-end w-full">
          <ModalComponent
            title="My Resume"
            buttonContent={<GrDocumentPdf size={22} />}
          >
            <iframe
              className="w-full h-96 p-0"
              src="https://drive.google.com/file/d/1Mgv1u0vVhgr8khxf-O6pjcl2CcLL8063/preview"
            ></iframe>
          </ModalComponent>
        </div> */}
        <div className="prose dark:prose-invert mx-auto select-none">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
              <h2 className="text-sm text-gray-500 font-medium">{objective}</h2>
            </div>
            <div className="flex flex-col items-center">
              <SocialMediaComponent />
              <p className="mb-1 select-all">@andresinho20049</p>
              <p className="text-sm text-gray-500 my-0">All Social Media</p>
            </div>
          </div>
          <div className="flex flex-nowrap gap-1 no-visible-scroll overflow-x-auto my-4">
            {icons.map((icon) => (
              <Image
                key={icon}
                className="py-0 my-0"
                alt={icon.toUpperCase()}
                width={42}
                height={42}
                src={`/svg/${icon}.svg`}
                title={icon.toUpperCase()}
              />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Summary
            </h3>
            <p className="text-sm leading-relaxed text-justify clear-left text-pretty whitespace-pre-line">
              {summary}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Language
            </h3>
            <ul className="list-disc list-inside text-sm">
              {language.map((lang) => (
                <li key={lang.name}>
                  {lang.name}: {lang.proficiency}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Academic background
            </h3>
            <ul className="list-disc list-inside text-sm">
              {academic.map((ac) => (
                <li key={ac.degree}>
                  {!!ac.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:decoration-blue-700 hover:opacity-50"
                      href={ac.link}
                    >
                      {ac.degree}: {ac.organization} - {ac.conclusion}
                    </Link>
                  ) : (
                    <span>
                      {ac.degree}: {ac.organization} - {ac.conclusion}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Experience
            </h3>
            {experience.map((exp) => (
              <div key={exp.company}>
                <h4 className="text-md font-medium tracking-wider underline underline-offset-8">
                  {exp.company}
                </h4>
                <p className="text-sm text-gray-500">
                  {exp.position} | {exp.period}
                </p>
                <ul className="list-disc list-inside text-sm">
                  {exp.keyResponsability.map((res, idx) => (
                    <li key={`${exp.company}-${idx}`}>{res}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Skills
            </h3>
            <ul className="list-disc list-inside text-sm tracking-wider">
              {skills.map((skill) => (
                <li key={skill.category}>
                  {skill.category}
                  <ul className="list-none list-inside text-sm tracking-normal text-gray-500 grid md:grid-cols-2">
                    {/* <div className="grid md:grid-cols-2"> */}
                    {skill.skills.map((s) => (
                      <li key={s}>
                        <span className="notranslate">{s}</span>
                      </li>
                    ))}
                    {/* </div> */}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold tracking-widest mb-2">
              Badges
            </h3>
            <ul className="list-disc list-inside text-sm">
              {badges.map((badge) => (
                <li key={badge.name}>
                  {!!badge.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:decoration-blue-700 hover:opacity-50"
                      href={badge.link}
                    >
                      {badge.name}
                    </Link>
                  ) : (
                    <span>{badge.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-col justify-between w-40">
        <CardAds>
          <AdsenseMultiComponent />
        </CardAds>
        <CardAds>
          <AdsenseSquareComponent />
        </CardAds>
      </div>
      <div className="block xl:hidden w-full">
        <AdsenseArticleComponent />
      </div>
    </section>
  );
}
