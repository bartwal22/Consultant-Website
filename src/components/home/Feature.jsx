import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
import { MdOutlineEditLocation } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

export const Feature = () => {
  return (
    <section className="lg:h-[100vh] flex flex-col justify-center gap-[5rem] px-4 py-12 bg-[radial-gradient(ellipse_at_top,_#fff085_0%,_#1e1e1e_50%,_#000000_100%)]">
      {/* Title */}
      <div className="text-center flex flex-col lg:mb-6 mb-0">
        <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
          <p className="font-bold text-xl text-[#000000] mt-16 tracking-widest">
            UNIQUE FEATURE
          </p>
          <h1 className="font-bold text-3xl text-white mt-6">
            Three Unique Facilities
          </h1>
        </Fade>
      </div>

      {/* Feature Boxes */}
      <div className="flex flex-wrap gap-16 lg:gap-6 items-center justify-center">
        {[
          {
            icon: <TbCircleDashedPercentage size={50} />,
            title: "Data-Driven Solutions",
          },
          {
            icon: <MdOutlineEditLocation size={50} />,
            title: "Smart Location Services",
          },
          {
            icon: <FaLaptopHouse size={50} />,
            title: "Remote Access Solutions",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center h-[19rem] w-full max-w-[400px] md:w-[48%] lg:w-[27%] group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#FFD700] hover:rounded-3xl"
          >
            {/* Icon Container */}
            <div className="h-[5rem] w-[5rem] lg:h-[7rem] lg:w-[7rem] rounded-full absolute -top-[15%] lg:-top-[24%] flex items-center justify-center border-[0.7rem] lg:border-[1rem] border-[#ffcc3f75] group-hover:border-[#ffcc3f] bg-[#1a1a1a] shadow-md">
              <div className="text-[#ffcc3f]">{item.icon}</div>
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-center gap-3 items-center p-6 h-full border border-[#FBF3B9] rounded-[1.5rem] bg-[#00000] shadow-xl text-center transition-all duration-300 ">
              <h4 className="text-xl lg:text-2xl font-bold text-white">
                {item.title}
              </h4>
              <p className="text-sm lg:text-base text-[#bbbbbb] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, aliquam.
              </p>
              <button className="flex items-center justify-center px-5 py-2 mt-2 rounded-full font-semibold text-white bg-transparent border border-[#000000] hover:text-white hover:bg-[#ffcc3f]">
                Learn More
                <HiArrowSmRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
