import { Kbd } from "flowbite-react";
import Image from "next/image";
import { ReactNode } from "react";

export interface ICardDottedProps {
  titleCard: string;
  imgCard?: string;
  titleContent: string;
  summary: string;
  tags: string[];
  children?: ReactNode;
}

export const CardDotted = ({
  titleCard,
  imgCard,
  titleContent,
  summary,
  tags,
  children,
}: ICardDottedProps) => {
  return (
    <div className="relative h-min w-full max-w-2xl flex flex-col items-start space-y-4 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg backdrop-grayscale backdrop-blur-md">
      <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
        {titleCard}
      </span>

      <div className="">
        <p className="mb-2 text-xl font-semibold dark:text-gray-200">
          {titleContent}
        </p>
        <Image
          alt={titleContent}
          className={`${
            !!imgCard ? "" : "hidden"
          } object-cover w-24 h-36 mr-3 float-left`}
          src={imgCard || ""}
          width={1100}
          height={1800}
        />

        <div className="mb-4 text-sm text-gray-400 clear-none">
          <p>{summary} </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center text-sm text-gray-500 dark:text-gray-400 ">
        <div className="w-full border-b text-center text-lg font-semibold">
          <p>Tags</p>
        </div>
        {tags.map((tag, idx) => (
          <div key={idx} className="my-2">
            <Kbd>{tag}</Kbd>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
};
