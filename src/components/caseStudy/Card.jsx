import React from "react";

export const Card = () => {
  return (
    <div className="bg-[#101010] rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 mx-auto border border-[#d4af37]/30">
      {/* Image Section */}
      <img
        src="https://cdn.pixabay.com/photo/2020/11/24/04/01/pond-5771499_1280.jpg"
        alt="Service"
        className="w-full md:w-1/2 rounded-xl object-cover shadow-md border border-[#d4af37]/20"
      />

      {/* Content Section */}
      <div className="md:w-1/2 text-gray-300">
        <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-4">
          Task Assessment
        </h2>

        <p className="mb-4 text-sm lg:text-base font-medium text-gray-400">
          Strategy consulting helps organizations define and achieve their
          business goals through comprehensive planning, analysis, and
          implementation. Here's a detailed look at the various services and
          approaches.
        </p>

        <p className="mb-2 text-sm lg:text-base font-normal text-gray-300">
          <strong className="font-semibold text-[#d4af37]">
            Vision and Mission Definition:
          </strong>{" "}
          Clarifying the organization’s purpose and long-term aspirations.
        </p>

        <p className="mb-6 text-sm lg:text-base font-normal text-gray-300">
          <strong className="font-semibold text-[#d4af37]">
            Core Competencies Analysis:
          </strong>{" "}
          Identifying unique strengths and capabilities that provide competitive
          advantages.
        </p>

        <a href="/contact">
          <button className="px-5 py-2 border border-[#d4af37] text-black bg-[#d4af37] font-semibold rounded-lg transition-all duration-300 hover:bg-[#c2a529] hover:text-black">
            Book Appointment
          </button>
        </a>
      </div>
    </div>
  );
};
