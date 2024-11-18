"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchRepo } from "./api";
import { Flex, TextField } from "@radix-ui/themes"; // or the appropriate library

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
      <Flex direction="column" gap="3" maxWidth="50%">
        <TextField.Root radius="large" placeholder="Search the docs…" />
      </Flex>
    </div>
  );
};

export default HomePage;
