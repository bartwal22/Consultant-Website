import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export const Consultancy = () => {
  const features = [
    "Expert Insights Across Industries",
    "Innovative Business Solutions",
    "Trusted Advisory Services",
    "Tailored Strategies for Growth",
  ];

  return (
    <section className="lg:h-screen h-full  md:px-12 lg:px-24 lg:py-16 bg-gradient-to-t from-[#FFD95A] via-[#0d0c0d] to-black">
      <div className="bg-[#00000] md:rounded-[2rem] flex flex-col lg:flex-row overflow-hidden w-full md:h-full h-auto">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-6 md:p-12 md:gap-7 gap-2">
          <p className="uppercase text-[#f5f6f0] font-bold text-sm md:text-lg">
            about amazing company
          </p>

          <h2 className="text-[#ffcc3f] font-extrabold text-2xl md:text-4xl lg:text-5xl">
            Trust Consultancy Company
          </h2>

          <p
            className="text-[#f5f6f0] font-normal text-sm md:text-2xl"
            style={{ fontFamily: "Dancing Script" }}
          >
            "Trust Consulting delivers expert solutions with integrity, helping
            you navigate challenges and achieve lasting success."
          </p>

          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#f5f6f0] text-[#0d0c0d] font-semibold flex items-center justify-center text-lg w-fit rounded-[2rem] cursor-pointer shadow-[0_0_10px_#f5f6f0] hover:shadow-[0_0_14px_#ffcc3f] hover:bg-[#ffcc3f] hover:text-[#0d0c0d] transition-all duration-300 ease-in-out">
            Get A Quote <FaLongArrowAltRight size={16} className="ml-2" />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-stretch gap-6 md:py-6 md:pb-0 mb-6 px-0 ">
          {features.slice(0, 4).map((feature, index) => (
            <Fade
              key={index}
              direction="right"
              delay={index * 200}
              duration={600}
              triggerOnce
            >
              <div className="w-full flex px-5 py-4 items-center gap-2 hover:bg-[#f5f6f0] hover:text-[#0d0c0d] transition duration-300 bg-[#ffcc3f] group shadow-[0_0_5px_#ffcc3f] hover:shadow-[0_0_8px_#f5f6f0] cursor-pointer rounded-4xl">
                <div className="h-[2rem] w-[2rem] bg-[#f5f6f0] text-[#0d0c0d] flex justify-center items-center rounded-full group-hover:bg-[#ffcc3f] group-hover:text-[#0d0c0d]">
                  <FaCheck />
                </div>
                <p className="text-[#0d0c0d] group-hover:text-[#0d0c0d] font-normal text-sm md:text-[1.0rem] ">
                  {feature}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};
