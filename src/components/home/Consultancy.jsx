import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
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
    <section className="lg:h-screen h-full bg-[#fffefe] w-full  md:px-12 lg:px-24 lg:py-16">
      <div className="bg-[#0d0c0d] md:rounded-[2rem]  flex flex-col lg:flex-row overflow-hidden w-full md:h-full h-auto">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-6 md:p-12 md:gap-7 gap-2">

          <p className="uppercase text-[#f5f6f0] font-bold text-sm md:text-lg">
            about amazing company
          </p>
          {/* <Bounce delay={300} triggerOnce> */}

          <h2 className="text-[#ffcc3f] font-extrabold text-2xl md:text-4xl lg:text-5xl">
            Trust Consultancy Company
          </h2>
          {/* </Bounce> */}

          <p className="text-[#f5f6f0] font-normal text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            quo est molestiae, dolores omnis cumque harum voluptates veniam
            quibusdam laboriosam a! Natus repellendus expedita provident!
          </p>

          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#f5f6f0] text-[#0d0c0d] font-semibold flex items-center justify-center text-lg w-fit rounded-[2rem] cursor-pointer shadow-[0_0_10px_#f5f6f0] hover:shadow-[0_0_14px_#ffcc3f] hover:bg-[#ffcc3f] hover:text-[#0d0c0d]  transition-all duration-300 ease-in-out">
            Get A Quote <FaLongArrowAltRight size={16} className="ml-2"/>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-end gap-6 md:py-6 md:pb-0 mb-6 pl-6 md:pl-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-tl-[1rem] rounded-bl-[1rem]  flex px-4 py-4 items-center gap-2 w-[100%]  md:w-[60%] lg:w-[60%] hover:bg-[#f5f6f0] hover:text-[#0d0c0d] transition duration-300  bg-[#ffcc3f] group shadow-[0_0_5px_#ffcc3f] hover:shadow-[0_0_8px_#f5f6f0] cursor-pointer"
            >
              {/* <Fade triggerOnce> */}

              <div className="h-[2rem] w-[2rem] bg-[#f5f6f0] text-[#0d0c0d] flex justify-center items-center rounded-full group-hover:bg-[#ffcc3f] group-hover:text-[#0d0c0d] ">
                <FaCheck />
              </div>
              <p className="text-[#0d0c0d]  group-hover:text-[#0d0c0d] font-normal text-sm md:text-[1.2rem]">
                {feature}
              </p>
              {/* </Fade> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
