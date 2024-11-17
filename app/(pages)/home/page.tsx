"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepo } from "./api";

const HomePage: React.FC = () => {
  const { data } = useQuery({
    queryKey: ["searchRepo"],
    queryFn: () => searchRepo("react"),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <input></input>
      <button>-</button>
    </div>
  );
};

export default HomePage;
