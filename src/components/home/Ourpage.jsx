import React from "react";
import { JackInTheBox, Roll, Rotate } from "react-awesome-reveal";
import { FaHandsHelping } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const items = [
  {
    icon: <FaHandsHelping size={50} />,
    title: "Our Mission",
    description:
      "We’re committed to a journey of innovation, continuously seeking new ideas, methodologies, and technologies that can enhance.",
  },
  {
    icon: <FaEye size={50} />,
    title: "Our Vision",
    description:
      "We’re committed to a journey of innovation, continuously seeking new ideas, methodologies, and technologies that can enhance.",
  },
  {
    icon: <FaMapMarkerAlt size={50} />,
    title: "Our Destination",
    description:
      "We’re committed to a journey of innovation, continuously seeking new ideas, methodologies, and technologies that can enhance.",
  },
];

export const Ourpage = () => {
  return (
    <section className="lg:h-full overflow-hidden w-full lg:px-10">
      <div>
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-black md:rounded-tl-2xl md:rounded-tr-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643475_1280.jpg')] bg-cover bg-center opacity-70"></div>

          {/* Content Section */}
          <div className="relative text-center px-6">
            <p className="text-sm md:text-lg text-white uppercase font-semibold tracking-wide">
              Hurry Up to Buying Moveexa
            </p>
            <JackInTheBox triggerOnce>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
              We are building great future <br /> together, Be with us
            </h1>
            </JackInTheBox>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-[#ffcc3f] text-black  px-4 py-3 rounded-lg font-semibold flex items-center  md:gap-2 transition hover:bg-transparent border-1 hover:border-[#ffcc3f] hover:text-[#ffcc3f] cursor-pointer md:text-lg text-sm">
                Get For $49 <FaLongArrowAltRight />
              </button>
              <button className="border border-white text-[#fffefe] px-4 md:text-lg text-sm py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#fffefe] hover:text-black transition cursor-pointer">
                Free Download <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[var(--secondary-color)] lg:h-[50vh]  flex items-center justify-center py-4">
          <div className=" h-full w-full pt-4 lg:pt-0  mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-0 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className=" text-center h-full w-full flex flex-col justify-center border-r-2 border-[#ffcc3f] px-4 lg:px-6 py-2 lg:py-0 group"
              >
                <div
                  className="flex items-center justify-center lg:w-24 lg:h-24 h-16 w-16 mx-auto rounded-full bg-transparent border-[1px] border-slate-400
             bg-opacity-40"
                >
                  <span className="text-[#ffcc3f] transform transition-transform duration-500 group-hover:rotate-360">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-[#fffefe] lg:text-2xl text-lg font-bold lg:mt-6 mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 lg:mt-4 mt-2 leading-relaxed text-sm lg:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
