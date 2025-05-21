import React from "react";
import { Card } from "./Card";

export const Index = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:gap-6 lg:px-10 lg:py-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
