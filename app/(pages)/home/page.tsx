"use client";

import React, { useEffect } from "react";
import api from "../../_service/axios";

const HomePage: React.FC = () => {
  useEffect(() => {
    api.githubService.get("/").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to RepoScope</h1>
      <p>This is the home page of your Next.js application.</p>
    </div>
  );
};

export default HomePage;
