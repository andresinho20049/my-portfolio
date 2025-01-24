import { ReactNode } from "react";

interface ICardAdsProps {
  children: ReactNode;
}

export const CardAds = ({ children }: ICardAdsProps) => {
  return (
    <div className="relative w-full space-y-1 px-1 pt-8 pb-1 border-2 border-dashed border-gray-400 shadow-lg rounded-lg">
      <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-1 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 border-b-2 border-r-2 border-dashed ">
        Ads
      </span>
      <div className="mx-auto">{children}</div>
    </div>
  );
};
