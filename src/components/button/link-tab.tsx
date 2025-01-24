import Link from "next/link";
import { ReactNode } from "react";

type ILinkTabProps = {
    children: ReactNode;
    href: string;
    isActive?: boolean
}

export const LinkTabs = ({ children, href, isActive }: ILinkTabProps) => {
  return (
    <Link
      className={`flex items-center justify-center gap-1 text-gray-600 hover:text-gray-400 dark:text-gray-400 hover:dark:text-white text-md font-medium px-4 py-1 ${
        isActive
          ? "bg-neutral-200 dark:bg-gray-900"
          : "bg-transparent hover:bg-neutral-100 hover:dark:bg-gray-700"
      }`}
      href={href}
      scroll={false}
    >
      {children}
    </Link>
  );
};
