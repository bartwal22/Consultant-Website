import React, { useRef } from "react";
import { SliderCard } from "./SliderCard";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useGetTeamQuery } from "../../store/Reducer/Team";

export const TeamSlider = () => {
const { data , isSuccess, isError, isLoading} = useGetTeamQuery({
  page:1, limit:10
});
// console.log("data::::", data)

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    prevArrow: <></>, // Remove default arrows
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:h-screen mx-auto overflow-hidden w-full lg:px-24 px-4  py-6 lg:py-10">
      <div className=" relative">
        {/* Previous Button */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-[-55px] top-1/2 transform -translate-y-1/2 bg-[var(--primary-color)] lg:px-4 lg:py-10 rounded-tl-xl rounded-bl-xl shadow-md cursor-pointer md:block hidden"
        >
          <FiChevronLeft size={24} className="text-black" />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="testimonial-slider">
          { isSuccess && data?.allTeam && data?.allTeam?.map((card, index) => (
            <SliderCard card={card} key={index} />
          ))}
          
        </Slider>

        {/* Next Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-[-58px] top-1/2 transform -translate-y-1/2 bg-[var(--primary-color)] lg:px-4 lg:py-10 rounded-tr-xl rounded-br-xl shadow-md cursor-pointer md:block hidden"
        >
          <FiChevronRight size={26} className="text-black" />
        </button>
      </div>
    </section>
  );
};
