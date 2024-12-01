"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

const HomePage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <div className="p-4">
      <div>REPO-SCOPE</div>
      <SearchBar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    </div>
  );
};

export default HomePage;
