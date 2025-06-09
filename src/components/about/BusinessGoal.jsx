import React from "react";
import { FaChalkboardTeacher, FaHandshake } from "react-icons/fa";

export const BusinessGoal = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  bg-gradient-to-r from-black via-gray-900 to-black pb-20 px-6 md:px-16 py-12">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="w-96 h-full relative">
          <img
            src="https://cdn.pixabay.com/photo/2025/03/21/21/22/roche-9485693_1280.jpg"
            alt="Team Discussion"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h3 className="text-yellow-400 font-bold text-lg uppercase tracking-wide">
          Our Business Goal
        </h3>
        <h2 className="text-white font-bold lg:text-5xl mt-2 leading-tight">
          Make Every Stage in The Customer Journey
        </h2>

        {/* Features List */}
        <div className="mt-6 space-y-6">
          {/* Strategy Development */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 p-4 rounded-lg shadow-lg text-black">
              <FaChalkboardTeacher size={28} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">
                Strategy Development
              </h4>
              <p className="text-gray-400 text-sm font-medium">
                Efficiently unleash cross-media information without cross-media
                value work.
              </p>
            </div>
          </div>

          {/* Data-Driven Insights */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 p-4 rounded-lg shadow-lg text-black">
              <FaHandshake size={28} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">
                Data-Driven Insights
              </h4>
              <p className="text-gray-400 text-sm font-medium">
                Efficiently unleash cross-media information without cross-media
                value work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
