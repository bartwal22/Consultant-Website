import React from "react";
import { Card } from "./Card";

export const Index = () => {
  return (
    <section className="bg-[#121212] grid grid-cols-1 gap-8 px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 rounded-xl">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
