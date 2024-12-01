"use client";

import React, { use, useEffect, useState } from "react";
import { Popover } from "@radix-ui/themes";

interface SearchBarProps {
  searchKeyword?: string;
  setSearchKeyword?: (value: string) => void;
  actionSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
      console.log("@2");
    }, 2000);
  }, []);

  return (
    <div className="px-4">
      <div className="relative w-full h-9 bg-gray-500 rounded-xl p-2">
        <input
          type="search"
          className=" absolute top-0 left-0 w-full h-8  rounded-full focus:outline-none"
        />
        <button className="absolute w-9 top-0 right-0 h-9 bg-black text-white rounded-full">
          검색
        </button>
      </div>
      <Popover.Root open={isOpen} onOpenChange={handleOpen}>
        <Popover.Trigger>
          <div></div>
        </Popover.Trigger>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              Dimensions
            </p>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                Width
              </label>
              <input className="Input" id="width" defaultValue="100%" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxWidth">
                Max. width
              </label>
              <input className="Input" id="maxWidth" defaultValue="300px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="height">
                Height
              </label>
              <input className="Input" id="height" defaultValue="25px" />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxHeight">
                Max. height
              </label>
              <input className="Input" id="maxHeight" defaultValue="none" />
            </fieldset>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default SearchBar;
