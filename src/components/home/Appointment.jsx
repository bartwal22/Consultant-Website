import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export const Appointment = () => {
  return (
    <section className="relative min-h-screen w-full lg:px-10 lg:py-10 bg-black text-white overflow-hidden">
      {/* Golden radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,204,63,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen z-10 gap-8">
        {/* Left Image Section */}
        <div className="w-full md:w-[45%] aspect-[4/3] lg:aspect-[5/3] relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643477_1280.jpg"
            alt="Business Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h5 className="text-[#ffcc3f] text-sm md:text-lg font-semibold uppercase">
            Make a Business Plan
          </h5>

          <h2 className="text-white text-2xl md:text-5xl font-bold mt-2 md:mt-3 leading-snug">
            Let's Discuss About Your Business Plan
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-lg max-w-prose">
            From building your online presence to leveraging advanced analytics,
            each chapter is packed with actionable advice.
          </p>

          {/* Bullet Points */}
          <div className="mt-5 space-y-4">
            {[
              "Fundamental concepts of digital marketing",
              "Mastering content marketing",
              "Effective email marketing strategies",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-200 text-sm md:text-lg"
              >
                <div className="h-6 w-6 md:h-8 md:w-8 bg-[#ffcc3f] flex items-center justify-center rounded-full shadow-md">
                  <FaCheck className="text-black" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a href="/contact">
            <button className="mt-6 bg-[#ffcc3f] text-black px-5 md:px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-transparent hover:text-[#ffcc3f] hover:border hover:border-[#ffcc3f] transition cursor-pointer shadow-lg">
              <span>Book Appointment</span>
              <FaLongArrowAltRight />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
