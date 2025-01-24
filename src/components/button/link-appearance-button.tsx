import Link from "next/link";
import { ReactNode } from "react";

interface ILinkAppearanceButtonProps {
  children: ReactNode;
  href: string;
  isBlank?: boolean;
}

export const LinkAppearanceButton = ({
  children,
  href,
  isBlank,
}: ILinkAppearanceButtonProps) => {
  return (
    <Link
      aria-label={href}
      className="flex items-center justify-center gap-1 text-white hover:text-gray-400 bg-primary-700 hover:bg-primary-500 transition-colors duration-200 ease-in dark:bg-transparent text-md font-medium px-4 py-1 border-2 border-primary-200 border-y-primary-500 hover:border-y-primary-200 transition-colors rounded-md"
      href={href}
      target={isBlank ? "_blank" : ""}
      rel={isBlank ? "noopener noreferrer" : ""}
    >
      <span className="sr-only">{href}</span>
      {children}
    </Link>
  );
};
