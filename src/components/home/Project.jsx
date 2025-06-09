import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    id: 1,
    title: "Strategic Roadmap Development",
    description:
      "Bring to the table win survival strategies to ensure proactive domination service development.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/08/17/03/mountains-5900416_1280.jpg",
  },
  {
    id: 2,
    title: "Business Growth Development",
    description:
      "Innovative solutions tailored to accelerate sustainable and measurable growth for your business.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/08/17/03/mountains-5900416_1280.jpg",
  },
  {
    id: 3,
    title: "Marketing Strategy Planning",
    description:
      "Crafting impactful marketing strategies to elevate your brand visibility and audience reach.",
    image:
      "https://cdn.pixabay.com/photo/2021/01/08/17/03/mountains-5900416_1280.jpg",
  },
];

export const Project = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-[#1a1a1a] py-10 lg:py-20 overflow-hidden relative">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <p className="text-[#ffcc3f] font-bold uppercase text-sm md:text-base tracking-wider">
          Complete Projects
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mt-2 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)]">
          Our Recently Completed Projects
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Button */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-0 lg:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a1a] p-2 lg:p-3 rounded-full border-2 border-[#ffcc3f] text-[#ffcc3f] shadow hover:scale-110 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-2 lg:px-4">
              <div
                className="relative h-[22rem] lg:h-[28rem] rounded-xl bg-cover bg-center shadow-xl overflow-hidden group"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#ffcc3f] text-black text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full shadow">
                    BUILDING, BUSINESS, GROWTH
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-5 left-4 right-4 bg-white/90 p-4 lg:p-6 rounded-2xl backdrop-blur-sm shadow-md transition-all duration-300 group-hover:scale-[1.01]">
                  <h3 className="text-lg lg:text-2xl font-bold text-[#0d0c0d] mb-2">
                    {card.title}
                  </h3>
                  <hr className="border-gray-300 my-2" />
                  <p className="text-sm lg:text-base text-gray-700">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-0 lg:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[#1a1a1a] p-2 lg:p-3 rounded-full border-2 border-[#ffcc3f] text-[#ffcc3f] shadow hover:scale-110 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Project;
