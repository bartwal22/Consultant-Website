import React from "react";
import { FaLongArrowAltRight, FaTv, FaRegThumbsUp } from "react-icons/fa";

export const Services = () => {
  const features = [
    {
      icon: <FaTv size={20} />,
      title: "Improving Your Business Planning",
      description:
        "We help clients set new standards of excellence in their industries.",
    },
    {
      icon: <FaRegThumbsUp size={20} />,
      title: "Expert Guidance for Success",
      description:
        "Our tailored strategies ensure your business thrives in a competitive market.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFD95A] via-[#0d0c0d] to-black px-6 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
            alt="Team"
            className="rounded-xl border-4 border-white shadow-2xl w-full max-w-lg object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-white flex flex-col gap-4">
          <p className="uppercase text-[#FFD95A] text-xs md:text-sm font-semibold tracking-wider">
            Why Choose Us
          </p>

          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Achieve More with Smart Planning & Expert Guidance
          </h2>

          <p className="text-sm md:text-base text-[#FFD95A]">
            We envision a future where our clients are market leaders, empowered
            by our strategic consulting and personalized support.
          </p>

          {/* Features List */}
          <div className="space-y-4 mt-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-white text-[#0d0c0d] rounded-full shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-[#FFD95A] mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a href="/service">
              <button className="px-6 py-3 text-sm bg-[#0d0c0d] text-[#FFD95A] hover:bg-[#FFD95A] hover:text-[#0d0c0d] border border-[#FFD95A] font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2">
                Take Our Service <FaLongArrowAltRight size={14} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
