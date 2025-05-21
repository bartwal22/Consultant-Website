import React, { useEffect } from "react";
import { CommonHero } from "../utils/CommonHero";
import { BlogDetail } from "../components/blog/BlogDetail";
const data = [{ tittle: "Blog Detail" }];

export default function BlogInfo() {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <main>
      <CommonHero item={data[0]} />
      <BlogDetail />
    </main>
  );
}
