import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce } from "react-awesome-reveal";

const cards = [
  {
    id: 1,
    title: "Strategic Roadmap Development",
    description:
      "Bring to the table win survival strategies to ensure proactive domination service development",
    image:
      "https://cdn.pixabay.com/photo/2021/01/08/17/03/mountains-5900416_1280.jpg",
  },
  {
    id: 2,
    title: "Business Growth Development",
    description:
      "Bring to the table win survival strategies to ensure proactive domination service development",
    image:
      "https://cdn.pixabay.com/photo/2021/01/08/17/03/mountains-5900416_1280.jpg",
  },
  {
    id: 3,
    title: "Marketing Strategy Planning",
    description:
      "Bring to the table win survival strategies to ensure proactive domination service development",
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
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="lg:h-screen h-full overflow-hidden w-full lg:py-0 py-6">
      <div className="text-center lg:mb-10 lg:mt-10">
        <p className="text-[#ffcc3f] font-bold uppercase lg:text-lg text-sm">
          Complete Projects
        </p>
        {/* <Bounce delay={300} triggerOnce> */}
        <h2 className="lg:text-5xl text-2xl font-bold text-black">
          Our Recently Completed Projects
        </h2>
        {/* </Bounce> */}
      </div>

      <div className="relative w-full mx-auto lg:px-4">
        {/* Left Button */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute lg:left-2 left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white lg:p-3 p-1 rounded-full shadow-lg hover:scale-110 transition cursor-pointer border-[#ffcc3f] border-2"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="lg:px-10 px-6">
          {cards.map((card) => (
            <div key={card.id} className="lg:px-3 px-1 py-2">
              <div
                className="relative rounded-lg overflow-hidden w-full h-[20rem] lg:h-[28rem] bg-cover bg-center lg:px-10"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                {/* Category badge */}
                <div className="absolute lg:bottom-[45%] bottom-[55%] left-7">
                  <div className="bg-[#999fa2] text-[#0d0c0d] lg:text-sm text-[0.8rem] lg:font-semibold font-normal lg:px-6 px-4 py-3 rounded-full">
                    BUILDING,BUSINESS,GROWTH
                  </div>
                </div>

                {/* Content panel */}
                <div className="absolute lg:bottom-7 bottom-10 left-7 right-7 bg-white lg:p-6 p-4 rounded-[1rem]">
                  <h2 className="text-[#0d0c0d] lg:text-2xl text-lg font-bold lg:mb-3">
                    {card.title}
                  </h2>
                  <div className="border-t border-gray-200 lg:pt-4 lg:mt-1 ">
                    <p className="text-gray-600  text-sm lg:text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute lg:right-2 right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white lg:p-3 p-1 rounded-full shadow-lg hover:scale-110 transition cursor-pointer border-[#ffcc3f] border-2"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Project;
