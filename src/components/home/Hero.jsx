import React from "react";
import { Slide } from "react-awesome-reveal";
import { HiArrowSmRight } from "react-icons/hi";

export const Hero = () => {
  return (
    <section className="lg:h-[120vh] bg-[radial-gradient(ellipse_at_bottom,_#fff085_0%,_#1e1e1e_50%,_#000000_100%)] relative overflow-hidden pt-[10rem] md:pt-[16rem] px-6">
      {/* Background Decorations */}
      <div className="absolute w-[80vw] max-w-[700px] h-[60vh] max-h-[965px] bg-[#ffcc3fcc] rounded-[80px] rotate-[-40.62deg] translate-x-1/2 -translate-y-1/2 -top-9 right-[40%]"></div>
      <div className="absolute w-[158px] h-[87px] bg-[#ffcc3f] opacity-25 rounded-t-full left-[50px] top-[25%] spin"></div>
      <div className="absolute w-[48px] h-[48px] bg-[#ffcc3f] opacity-25 rounded-full left-[36px] top-[35%] jump"></div>

      <div className="flex flex-col lg:flex-row lg:px-[5%] w-full gap-y-10 gap-x-12 z-10 relative">
        {/* Left Text Content */}
        <div className="lg:w-[45%] flex flex-col gap-6 text-center lg:text-left">
          <Slide
            triggerOnce
            direction="left"
            duration={1000}
            easing="ease-out-cubic"
          >
            <p className="text-[#f5f6f0] text-lg md:text-xl font-medium">
              Welcome to{" "}
              <span className="text-[#F4CE14] font-semibold">
                A2Y Consultant
              </span>
            </p>
          </Slide>

          <Slide
            triggerOnce
            delay={150}
            direction="left"
            duration={1200}
            easing="ease-out-cubic"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F4CE14] leading-tight tracking-wide">
              Need A Custom Plan?
              <span className="text-3xl md:text-4xl lg:text-5xl block">
                Ask About Enterprise
              </span>
            </h1>
          </Slide>

          <Slide
            triggerOnce
            delay={300}
            direction="left"
            duration={1200}
            easing="ease-out-cubic"
          >
            <p className="text-[#f5f6f0] text-base md:text-lg leading-relaxed opacity-90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              ea laborum ut tempora corrupti incidunt eligendi
            </p>
          </Slide>

          <Slide
            triggerOnce
            delay={400}
            direction="left"
            duration={1200}
            easing="ease-out-cubic"
          >
            <div className="flex justify-center lg:justify-start">
              <a href="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-200 text-[#0d0c0d] font-semibold flex items-center text-lg rounded-full shadow-md hover:shadow-yellow-400 hover:scale-105 hover:bg-gradient-to-l transition-transform transition-shadow transition-colors duration-300 ease-in-out">
                  Contact With Us <HiArrowSmRight size={24} className="ml-2" />
                </button>
              </a>
            </div>
          </Slide>
        </div>

        {/* Right Image Content */}
        <Slide
          triggerOnce
          delay={400}
          direction="right"
          duration={1400}
          easing="ease-out-cubic"
        >
          <div className="w-full lg:w-[100%] flex justify-end items-center relative z-10 pl-6 lg:pl-16">
            <div className="rounded-[3rem] border-4 border-[#F4CE14] p-2 md:p-1 rotate-0 lg:-rotate-12 h-[60vh] md:h-[80vh] lg:h-[90vh] w-[95%] max-w-[850px] transition-transform duration-500 hover:scale-105 shadow-xl">
              <img
                src="https://cdn.pixabay.com/photo/2024/02/19/09/21/ai-generated-8582949_1280.jpg"
                alt="AI Visual"
                className="rounded-[3rem] h-full w-full object-cover"
              />
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};
