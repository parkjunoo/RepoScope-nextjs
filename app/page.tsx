import React from "react";
import { redirect } from "next/navigation";

const rootPage: React.FC = () => {
  return redirect("/Home");
};

export default rootPage;
