/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";

interface IScrollHookProps {
  id: string;
}

export const useScrollHook = ({
  id
}:IScrollHookProps) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calcHeightScroll = () => {
    const fullHeight = document.getElementById(id)?.scrollHeight;

    setScrollHeight(fullHeight || 0);
  };

  const calcPercentScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.getElementById(id)?.scrollHeight || 0;
    const currentPosition = window.scrollY;

    const scrollPercentage =
      (currentPosition / (fullHeight - windowHeight)) * 100;

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    calcHeightScroll();
    window.addEventListener("scroll", calcPercentScroll);

    return () => {
      window.removeEventListener("scroll", calcPercentScroll);
    };
  }, []);

  return {
    scrollHeight,
    scrollPercentage,
  };
};
