import React from "react";
import { CommonHero } from "../utils/CommonHero";
import { ServicesSection } from "../components/services/ServicesSection";
import { AboutServices } from "../components/services/AboutServices";

const data = [{ tittle: "Our Services" }];

export const Service = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <ServicesSection />
      <AboutServices />
    </main>
  );
};
