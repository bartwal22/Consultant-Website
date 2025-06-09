import React from "react";

export const IndustryCard = ({ data }) => {
  return (
    <div className="bg-[#2a2a2a] rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-yellow-500/40 duration-300">
      <div className="relative">
        <img
          src={data?.gallery?.url}
          alt={data?.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-4 left-4 bg-yellow-400 text-black text-center px-3 py-1 rounded-md shadow-md">
          <p className="text-sm font-bold leading-4">20</p>
          <p className="text-xs font-medium">FEB</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-yellow-400 mb-3 line-clamp-1">
          {data?.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm line-clamp-3">
          {data?.description}
        </p>
        <a
          href="/contact"
          className="text-yellow-400 bg-black px-3 py-1 rounded font-medium inline-flex items-center hover:bg-yellow-500 hover:text-black transition"
        >
          Book Appointment
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
