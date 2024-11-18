import React from "react";
import { redirect } from "next/navigation";

const rootPage: React.FC = () => {
  return redirect("/home");
};

export default rootPage;
