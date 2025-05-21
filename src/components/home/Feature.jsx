import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaLaptopHouse } from "react-icons/fa";
import { MdOutlineEditLocation } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

export const Feature = () => {
  return (
    <section className="lg:h-[80vh] flex flex-col justify-center gap-[5rem] px-4 py-4">
      {/* Title */}
      <div className="text-center flex flex-col lg:mb-6 mb-0">
        <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
          <p className="font-bold text-xl text-[#ffcc3f]">UNIQUE FEATURE</p>
          <h1 className="font-bold text-4xl text-[#0d0c0d]">
            Three Unique Facilities
          </h1>
        </Fade>
      </div>

      {/* Feature Boxes */}
      <div className="text-white flex flex-wrap gap-16 lg:gap-6 items-center justify-center ">
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
            className="relative flex flex-col items-center justify-center h-[17rem] w-full max-w-[400px] md:w-[48%] lg:w-[27%]  group "
          >
            {/* Icon Container */}
            <div className="h-[5rem] w-[5rem] lg:h-[7rem] lg:w-[7rem] rounded-full absolute -top-[15%] lg:-top-[24%] flex items-center justify-center border-[0.7rem] lg:border-[1rem] border-[#ffcc3f75] group-hover:border-[#ffcc3f] bg-[#f5f6f0]">
              <div className="text-[#0d0c0d] bg-[#f5f6f0] ">{item.icon}</div>
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-center gap-3 items-center p-4 h-full border-2 border-slate-100 rounded-[1rem] bg-[#f5f6f0] shadow-lg">
              <h4 className="text-xl lg:text-2xl font-bold text-[#0d0c0d]">
                {item.title}
              </h4>
              <p className="text-center font-normal text-sm lg:text-lg text-[#999fa2]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, aliquam.
              </p>
              <button
                className="flex items-center justify-center px-5 py-2 rounded-lg  font-semibold cursor-pointer transition-all duration-300 ease-in-out 
  text-[#0d0c0d] underline underline-offset-2 
  hover:scale-105"
              >
                Learn More<HiArrowSmRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
