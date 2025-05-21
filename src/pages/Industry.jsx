import React from "react";
import { Index } from "../components/industry/Index";
import { CommonHero } from "../utils/CommonHero";
const data = [{ tittle: "Industry" }];

export const Industry = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <Index />
    </main>
  );
};
