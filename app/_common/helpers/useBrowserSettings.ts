import { useState, useEffect } from "react";

type BrowserSettings = {
  isDarkMode: boolean;
  browserLanguage: string;
};

const useBrowserSettings = (): BrowserSettings => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [browserLanguage, setBrowserLanguage] = useState<string>(
    navigator.language
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  return { isDarkMode, browserLanguage };
};

export default useBrowserSettings;
