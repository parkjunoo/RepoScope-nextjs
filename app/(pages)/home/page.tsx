"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepo } from "./api";
import SearchBar from "@/app/_components/SearchBar";

const HomePage: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [repoList, setRepoList] = useState([]);

  const { data } = useQuery({
    queryKey: ["searchRepo"],
    queryFn: () => searchRepo(""),
  });

  useEffect(() => {}, [data]);

  return (
    <div className="w-full my-4 flex justify-center">
      <SearchBar />
      {}
    </div>
  );
};

export default HomePage;
