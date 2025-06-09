import React from "react";
const data = [{ tittle: "Team" }];
import { CommonHero } from "../utils/CommonHero";
import { TeamCardCollab } from "../components/team/TeamCardCollab";
import { OurPeople } from "../components/team/OurPeople";

export const Team = () => {
  return (
    <main>
      <CommonHero item={data[0]} />

      <TeamCardCollab />
      <OurPeople />
    </main>
  );
};
