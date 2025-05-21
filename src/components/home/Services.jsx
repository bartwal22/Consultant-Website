import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaLongArrowAltRight, FaTv, FaRegThumbsUp } from "react-icons/fa";

export const Services = () => {
  const features = [
    {
      icon: <FaTv size={24}  />,
      title: "Improving Your Business Planning",
      description:
        "We help clients set new standards of excellence in their industries.",
    },
    {
      icon: <FaRegThumbsUp size={24}  />,
      title: "Expert Guidance for Success",
      description:
        "Our tailored strategies ensure your business thrives in a competitive market.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center lg:h-screen lg:py-4 overflow-hidden">
      {/* Left Side - Images */}
      <div className="relative w-full lg:w-[40%] flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2024/07/14/13/46/ai-generated-8894582_1280.jpg"
          alt="Team working"
          className="rounded-xl shadow-lg w-full max-w-md lg:max-w-full lg:h-full object-cover"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
          alt="Overlay"
          className="absolute bottom-[10%] -left-[5%] w-[40%] h-[12rem] md:w-[35%] md:h-[16rem] object-cover rounded-lg shadow-lg border-2 border-white animate-wiggle"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-[50%] mt-10 lg:mt-0 lg:pl-12 flex flex-col gap-4 overflow-hidden">
        {/* <Slide direction="left" triggerOnce> */}

        <p className="text-[#ffcc3f] font-bold uppercase text-sm md:text-lg">
          Why Choose Us
        </p>
        {/* </Slide> */}

        {/* <Slide direction="left" triggerOnce> */}
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Make Sure Your Objectives Improve Profit Drivers
        </h2>
        {/* </Slide> */}

        {/* <Slide direction="left" triggerOnce> */}

        <p className="text-gray-600 text-base md:text-lg">
          We envision a future where our clients are at the forefront of their
          industries, setting new standards of excellence through our consulting
          services.
        </p>
        {/* </Slide> */}

        {/* Feature List */}
        <div className="mt-6 space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {/* <Fade delay={index * 100} triggerOnce> */}

              <div className="h-10 w-10 p-2 md:p-0  md:h-16 md:w-16 rounded-full text-[#0d0c0d] bg-[#999fa2] flex justify-center items-center">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-lg">
                  {feature.description}
                </p>
              </div>
              {/* </Fade> */}
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div>
          <a href="/service">
          <button className="px-6 md:px-8 py-3 md:py-4 bg-[#0d0c0d] text-[#f5f6f0] font-semibold flex items-center justify-center text-lg w-fit rounded-[1rem] cursor-pointer shadow-[2px_0_20px_#0d0c0d] hover:shadow-[0_0_14px_#0d0c0d] hover:bg-transparent hover:text-[#0d0c0d] hover:border hover:border-[#0d0c0d] transition-all duration-300 ease-in-out mb-4">
            Take Our Service → 
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};
