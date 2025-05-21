import React from "react";
const data = [{ tittle: "Team" }];
import { CommonHero } from "../utils/CommonHero";
import { TeamSlider } from "../components/team/TeamSlider";
import { TeamCardCollab } from "../components/team/TeamCardCollab";
import { OurPeople } from "../components/team/OurPeople";

export const Team = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <TeamSlider />
      <TeamCardCollab />
      <OurPeople />
    </main>
  );
};
