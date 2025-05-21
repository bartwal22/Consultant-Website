import React from "react";
import { useGetGalleryQuery } from "../../store/Reducer/Gallery";

export const GalleryShow = () => {
  const { data, isLoading, isError, isSuccess } = useGetGalleryQuery();
  return (
    <div className="lg:py-6 px-4  py-4 lg:px-16">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">
        Creative Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isSuccess &&
          data.gallery &&
          data?.gallery?.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-xl relative">
              <img
                src={src?.gallery?.url}
                alt={`Gallery ${index + 1}`}
                className="w-full md:h-full h-[42vh] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
              />
              {/* <p className="text-center mt-2 absolute top-1/2">{src?.gallery?.description}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};
