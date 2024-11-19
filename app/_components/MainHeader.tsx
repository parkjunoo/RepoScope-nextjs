import React from "react";
import { Switch } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const MainHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      RepoScope
      <SunIcon />
      <MoonIcon /> <Switch defaultChecked />
    </header>
  );
};

export default MainHeader;
