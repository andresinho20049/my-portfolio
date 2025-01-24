import Link from "next/link";

interface ICardArticleProps {
  title: string;
  tags: string[];
  summary: string;
  link: string;
  time: number;
}

export const CardArticle = ({
  title,
  tags,
  summary,
  link,
  time,
}: ICardArticleProps) => {
  return (
    <div className="p-4 h-min flex flex-col justify-between rounded-lg hover:shadow-md dark:shadow-gray-700">
      <Link
        className="block mb-2 text-xl font-semibold text-primary-700 hover:underline"
        href={link}
      >
        {title}
      </Link>

      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-2 text-gray-700">
        {summary.substring(0, summary.length < 110 ? summary.length : 110)}
        {"..."}
        <Link href={link} className="text-secondary-700 hover:underline">
          Read more
        </Link>
      </p>

      <div className="flex items-center mt-4 text-sm">
        <p className="text-gray-400">{time} min read</p>
      </div>
    </div>
  );
};
