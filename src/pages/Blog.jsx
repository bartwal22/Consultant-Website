import React from "react";
import { CommonHero } from "../utils/CommonHero";
import { BlogList } from "../components/blog/BlogList";
const data = [{ tittle: "Blog List" }];

export const Blog = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <BlogList />
    </main>
  );
};
