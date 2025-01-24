/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useTheme } from "next-themes";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon ] = useState<ReactNode>(<MdDarkMode />);

  useEffect(() => {
    setIcon(() =>
      theme === "dark" ? <MdDarkMode size={16} /> : <MdLightMode size={16} />
    );
  }, [theme]);
  
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="w-full h-full flex items-center justify-center gap-2 p-0 group"
    >
      <span className="sr-only	">Toggle theme</span>
      <div className="border rounded-md p-1 group-hover:border-primary-500">{icon}</div>
    </button>
  );
}
