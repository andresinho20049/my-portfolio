"use client";

import { useScrollHook } from "@/utils/scrollHook";
import { ReactNode } from "react";
import {
  AdsModelsType,
  AdsenseArticleComponent,
  AdsenseHorizontalComponent,
  AdsenseMultiComponent,
  AdsenseSquareComponent,
  AdsenseSquareFixedComponent,
  AdsenseVerticalComponent,
} from "../google/AdsenseComponent";
import { CardAds } from "../cards/cardAds";

interface ISideShowAds {
  children?: ReactNode;
  adsTypes: AdsModelsType[];
  device: "lg" | "xl" | "2xl";
}

const useAdsHooks = () => {
  const { scrollHeight, scrollPercentage } = useScrollHook({
    id: "section-content-lyt",
  });

  const getAdsComponent = (ads: AdsModelsType) => {
    switch (ads) {
      case "horizontal":
        return <AdsenseHorizontalComponent />;
      case "vertical":
        return <AdsenseVerticalComponent />;
      case "article":
        return <AdsenseArticleComponent />;
      case "multi":
        return <AdsenseMultiComponent />;
      case "square":
        return <AdsenseSquareComponent />;

      default:
        return <AdsenseSquareFixedComponent />;
    }
  };

  return {
    scrollHeight,
    scrollPercentage,
    getAdsComponent,
  };
};

export const SideShowAds = ({ children, adsTypes, device }: ISideShowAds) => {
  const { scrollHeight, getAdsComponent } = useAdsHooks();

  const divHeight = scrollHeight / (adsTypes.length + 1);
  const displayOn =
    device === "lg" ? "lg:block" : device === "xl" ? "xl:block" : "2xl:block";

  return (
    <div className={`hidden ${displayOn} w-2/12 px-2 mx-2`}>
      <div className="relative">
        {children && <div className="sticky top-8 z-[9999]">{children}</div>}
        {adsTypes.map((ads, idx) => (
          <div key={idx}>
            <div
              className={`w-52 px-2 sticky ${
                !!children ? "inset-2/4" : "inset-10"
              }`}
            >
              <div className={children ? "py-12" : "py-2"}>
                <CardAds>{getAdsComponent(ads)}</CardAds>
              </div>
            </div>
            <div style={{ height: divHeight }}></div>
          </div>
        ))}
        <div style={{ height: divHeight / 4 }}></div>
      </div>
      {scrollHeight > 7000 && (
        <div className="sticky top-8">
          <CardAds>{getAdsComponent("multi")}</CardAds>
        </div>
      )}
    </div>
  );
};
