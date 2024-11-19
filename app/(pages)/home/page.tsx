"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepo } from "./api";
import { Flex, TextField, Button } from "@radix-ui/themes";
import SearchBar from "@/app/_components/SearchBar";

const HomePage: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["searchRepo"],
    queryFn: () => searchRepo("react"),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full my-4 flex justify-center">
      <SearchBar />
    </div>
  );
};

export default HomePage;
