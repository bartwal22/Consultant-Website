import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="lg:h-[40rem] w-full md:rounded">
      <div className="relative  w-full lg:h-[25rem]">
        <div className="rounded h-full w-full">
          <img
            src={data?.image?.url}
            alt="blog image"
            className="h-full w-full object-cover rounded"
          />
        </div>
        <div className="absolute bottom-0 bg-black w-full">
          <div>
            <p className="font-medium text-white lg:px-4 md:text-lg text-sm px-2">
              15/02/2023
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-4 lg:mt-4">
        <h2 className="lg:text-3xl text-xl font-bold text-[var(--DarkYellow-color)]">
          {data?.title}
        </h2>
        <p className="text-gray-600 lg:text-[1.1rem] text-[0.9rem] font-medium">
          {data?.description}
        </p>
        <div>
          <button
            className="bg-[var(--primary-color)] text-black font-semibold lg:py-3 py-1 px-6 md:mt-0 mt-2 md:mb-0 mb-2 lg:px-8 rounded cursor-pointer flex items-center gap-2 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            onClick={() => navigate(`/single-blog?id=${data?._id}`)}
          >
            Read Details <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
