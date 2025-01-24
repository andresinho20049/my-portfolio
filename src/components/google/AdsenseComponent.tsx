'use client';

import Script from "next/script";
import { ReactNode, useEffect } from "react";

interface IAdsComponent {
  children: ReactNode;
}

export type AdsModelsType =
  | "horizontal"
  | "vertical"
  | "square"
  | "square-fixed"
  | "article"
  | "multi";

const AdsComponent = ({ children }: IAdsComponent) => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export const AdsenseHorizontalComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client={process.env.ADS_GID}
        data-ad-slot="8357347021"
      ></ins>
    </AdsComponent>
  );
};

export const AdsenseVerticalComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.ADS_GID}
        data-ad-slot="7737718706"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </AdsComponent>
  );
};

export const AdsenseSquareComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.ADS_GID}
        data-ad-slot="8910010203"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </AdsComponent>
  );
};

export const AdsenseSquareFixedComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{display:"inline-block", width:"11rem", height:"11rem"}}
        data-ad-client="ca-pub-3617432012620885"
        data-ad-slot="2947021487"
      ></ins>
    </AdsComponent>
  );
};

export const AdsenseArticleComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={process.env.ADS_GID}
        data-ad-slot="6978263277"
      ></ins>
    </AdsComponent>
  );
};

export const AdsenseMultiComponent = () => {
  return (
    <AdsComponent>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client={process.env.ADS_GID}
        data-ad-slot="5271337465"
      ></ins>
    </AdsComponent>
  );
};
