"use client";

import React, { useEffect } from "react";
import ToggleSwitch from "../switch/toggleSwitch";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import localStorage from "../../utils/localStorage";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem("theme") === "dark");
    console.log(localStorage.getItem("theme"), "@@@");
  }, []);

  const onChangeTheme = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  // theme toggle actions
  useEffect(() => onToggleTheme(isDarkMode), [isDarkMode]);
  const onToggleTheme = (value: boolean) => {
    const $document = document.documentElement.classList;
    if (value) {
      $document.add("dark");
      localStorage.setItem("theme", "dark");
      return;
    }
    $document.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <header className="w-full h-14 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between h-full px-4 dark:text-white">
        RepoScope
        <div className="flex flex-row justify-center items-center">
          <div className="mx-3">
            {isDarkMode ? (
              <MoonIcon
                width="20"
                height="20"
                className="dark:text-yellow-300"
              />
            ) : (
              <SunIcon width="20" height="20" />
            )}
          </div>
          <ToggleSwitch checked={isDarkMode} onChange={onChangeTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
