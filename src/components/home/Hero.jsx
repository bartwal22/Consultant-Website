import React from "react";
import { Slide } from "react-awesome-reveal";
import { HiArrowSmRight } from "react-icons/hi";

export const Hero = () => {
  return (
    <section className="lg:h-[120vh] bg-[#0d0c0d] relative overflow-hidden pt-[12rem] md:pt-[18rem] px-6">
      {/* Background Elements */}
      <div className="absolute w-[80vw] max-w-[800px] h-[80vh] max-h-[965px] bg-[#ffcc3fcc] rounded-[60px] rotate-[-35.62deg] translate-x-1/2 -translate-y-1/2 -top-10 right-[40%]"></div>
      <div className="absolute w-[158px] h-[87px] bg-[#ffcc3f] opacity-25 rounded-t-full left-[50px] top-[25%] spin"></div>
      <div className="absolute w-[48px] h-[48px] bg-[#ffcc3f] opacity-25 rounded-full left-[36px] top-[35%] jump"></div>

      <div className="flex flex-col lg:flex-row lg:pl-[4%] lg:pr-[4%] w-full gap-10 ">
        {/* Left Content */}
        <div className="lg:w-[40%] flex flex-col gap-6 text-center lg:text-left">
          {/* <Slide triggerOnce delay={200}> */}
            <p className="text-[#f5f6f0] font-normal text-lg md:text-xl z-10">
              Welcome to A2Y Consultant
            </p>
          {/* </Slide> */}

          {/* <Slide triggerOnce delay={300}> */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ffcc3f] tracking-wide leading-tight z-10">
              Need A Custom Plan? Ask About Enterprise
            </h1>
          {/* </Slide> */}

          {/* <Slide triggerOnce delay={400}> */}
            <p className="text-[#f5f6f0] font-normal text-sm md:text-base lg:text-lg leading-relaxed z-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ea laborum ut tempora corrupti incidunt eligendi delectus, officia
              natus totam!
            </p>
          {/* </Slide> */}

          <div className="flex justify-center lg:justify-start">
            {/* <Slide triggerOnce delay={500}> */}
              <a href="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-[#f5f6f0] text-[#0d0c0d] font-semibold flex items-center justify-center text-lg w-fit rounded-[2rem] cursor-pointer shadow-[0_0_10px_#f5f6f0] hover:shadow-[0_0_14px_#ffcc3f] hover:bg-[#ffcc3f] hover:text-[#0d0c0d] transition-all duration-300 ease-in-out">
                  Contact With Us <HiArrowSmRight size={24} className="ml-2" />
                </button>
              </a>
            {/* </Slide> */}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[50%] flex lg:pb-0 pb-8">
          <div className="rounded-4xl border-2 border-[#ffcc3f] p-0 md:p-10 rotate-0 lg:-rotate-20 h-[50vh] md:h-[70vh] lg:h-[90vh] w-full  lg:w-[90vh] md:absolute right-0 ">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/19/09/21/ai-generated-8582949_1280.jpg"
              alt=""
              className="rounded-4xl h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
