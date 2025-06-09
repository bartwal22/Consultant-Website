import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import {
  FaHandsHelping,
  FaEye,
  FaMapMarkerAlt,
  FaLongArrowAltRight,
} from "react-icons/fa";

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
    <section className="w-full overflow-hidden">
      {/* Top Section with Background Image & Gradient Overlay */}
      <div
        className="relative w-screen h-[100vh] flex flex-col items-start justify-start overflow-hidden bg-black pt-20 px-6"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <p className="text-sm md:text-lg text-white uppercase font-semibold tracking-wide">
            Hurry Up to Buying Moveexa
          </p>
          <JackInTheBox triggerOnce>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
              We are building great future <br /> together, Be with us
            </h1>
          </JackInTheBox>

          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-[#ffcc3f] text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 md:text-lg text-sm transition hover:bg-transparent border hover:border-[#ffcc3f] hover:text-[#ffcc3f] cursor-pointer">
              Get For $49 <FaLongArrowAltRight />
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 md:text-lg text-sm hover:bg-white hover:text-black transition cursor-pointer">
              Free Download <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Seamless Black & Gold Theme */}
      <div className="bg-gradient-to-b from-black to-[#111] py-10 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] border border-[#ffcc3f]/40 rounded-2xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_#ffcc3faa]"
            >
              <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full border-4 border-[#ffcc3f] mb-6 bg-black bg-opacity-50">
                <span className="text-[#ffcc3f]">{item.icon}</span>
              </div>
              <h3 className="text-[#ffcc3f] text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourpage;
