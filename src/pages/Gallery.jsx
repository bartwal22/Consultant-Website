import React from "react";
import { CommonHero } from "../utils/CommonHero";
import { GalleryShow } from "../components/gallery/GalleryShow";

const data = [{ tittle: "Gallery" }];

export const Gallery = () => {
  return (
    <main>
      <CommonHero item={data[0]} />
      <GalleryShow/>
    </main>
  );
};
