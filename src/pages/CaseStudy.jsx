import React from "react";
import { Index } from "../components/caseStudy/Index";
import { CommonHero } from "../utils/CommonHero";
const data = [{ tittle: "Case Study" }];

export const CaseStudy = () => {
  return (
    <div>
      <CommonHero item={data[0]} />

      <Index />
    </div>
  );
};
