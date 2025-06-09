import React from "react";
import { useGetGalleryQuery } from "../../store/Reducer/Gallery";

export const GalleryShow = () => {
  const { data, isLoading, isError, isSuccess } = useGetGalleryQuery();

  return (
    <div className="lg:py-10 py-6 w-full bg-[#1f1f1f]">
      <h1
        className="text-center text-5xl font-semibold text-yellow-400 mb-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Creative Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-10">
        {isSuccess &&
          data.gallery &&
          data?.gallery?.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md bg-[#2a2a2a] transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)]"
            >
              <img
                src={src?.gallery?.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[50vh] object-cover rounded-2xl"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
