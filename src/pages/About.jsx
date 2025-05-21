import React from "react";
import { CommonHero } from "../utils/CommonHero";
import { AboutDetail } from "../components/about/AboutDetail";
import { Milestone } from "../components/about/Milestone";
import { Team } from "../components/about/Team";
import { BusinessGoal } from "../components/about/BusinessGoal";

const data = [{ tittle: "About" }];

export const About = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <AboutDetail />
      <Milestone />
      <Team />
      <BusinessGoal />
    </main>
  );
};
