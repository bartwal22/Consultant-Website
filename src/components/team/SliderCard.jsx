import React from "react";
import { IoMdQuote } from "react-icons/io";

export const SliderCard = ({ card }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-[#1e1e26] text-white rounded-2xl md:rounded-3xl overflow-hidden p-4 md:p-10 lg:h-[75vh] min-h-[60vh] w-full shadow-xl">
      {/* Left Content */}
      <div className="md:w-3/5 w-full md:pr-10 space-y-4">
        {/* Main Message */}
        <h2 className="text-xl md:text-4xl font-bold leading-snug">
          {card?.message ||
            "Design is not just what it looks like and feels like. Design is how it works."}
        </h2>

        {/* Quote Section */}
        <div className="flex items-start gap-4">
          <div className="bg-white rounded-full p-3 shadow-md">
            <IoMdQuote className="text-[var(--primary-color)] text-3xl md:text-5xl" />
          </div>
          <p className="text-sm md:text-lg leading-relaxed text-gray-300">
            {card?.about ||
              "This quote reflects the importance of function in creative work. It's not just about aesthetics but also about solving problems."}
          </p>
        </div>

        {/* Author */}
        <p className="text-lg font-bold mt-4">
          {card?.name || "Steve Jobs"}{" "}
          <span className="text-[var(--primary-color)] font-medium">
            {card?.designation || "Co-founder, Apple Inc."}
          </span>
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-2/5 w-full mt-6 md:mt-0 flex justify-center md:justify-end">
        <img
          src={
            card?.image?.url ||
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80"
          }
          alt={card?.name || "Profile"}
          className="rounded-lg object-cover w-full max-w-md h-auto md:h-full"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src =
              "https://via.placeholder.com/400x400.png?text=Profile+Image";
          }}
        />
      </div>
    </div>
  );
};
