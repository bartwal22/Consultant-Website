import React, { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "GEORGE ARTHUR",
    position: "Director TMS.Inc",
    image: "/api/placeholder/100/100",
    text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%.",
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    position: "CEO of DataFlow",
    image: "/api/placeholder/100/100",
    text: "A2Y has transformed how we approach business intelligence. The AI-driven insights have helped us identify market opportunities we would have otherwise missed.",
  },
  {
    id: 3,
    name: "MICHAEL CHEN",
    position: "Operations Manager",
    image: "/api/placeholder/100/100",
    text: "Implementing A2Y into our workflow was seamless. The customer support team was exceptional, and the results were immediate. Our efficiency increased by 35% in just three months.",
  },
  {
    id: 4,
    name: "JESSICA WILLIAMS",
    position: "Marketing Director",
    image: "/api/placeholder/100/100",
    text: "As someone who was skeptical about AI tools, A2Y has completely changed my perspective. It's intuitive, powerful, and delivers actionable insights that drive real business value.",
  },
];

export const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full overflow-hidden lg:h-[110vh] lg:px-10 lg:py-6 bg-gradient-to-br from-black via-[#bfa038] to-[#1a1a1a] text-white">
      <div className="w-full h-full rounded-2xl py-10 px-6">
        <div className="text-center mb-10">
          <p className="text-[#d4af37] font-bold text-lg uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="md:text-5xl text-3xl font-bold text-white">
            What Our Users Said About A2Y
          </h2>
          <p className="md:text-lg text-sm font-medium text-gray-300 max-w-2xl mx-auto mt-3">
            Our AI business co-pilot is engineered to function not just as a
            standalone solution but as a central part of your digital ecosystem.
          </p>

          <div className="mt-6">
            <button className="px-5 py-3 text-black font-semibold bg-[#d4af37] rounded-full hover:bg-[#b5962a] transition">
              Write your experience
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="testimonial-slider">
          {testimonials.map((item) => (
            <div key={item.id} className="px-3 py-4">
              <div
                className="
                  bg-black
                  text-white
                  p-6
                  rounded-xl
                  shadow-lg
                  border-2 border-[#d4af37]
                  lg:h-[20rem]
                  flex flex-col justify-between
                  transition duration-300
                  hover:shadow-[0_0_25px_#d4af37]
                "
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_1280.jpg"
                    alt={item.name}
                    className="w-12 h-12 rounded-full border-2 border-[#d4af37]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#d4af37]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-semibold">
                      {item.position}
                    </p>
                  </div>
                  <FaQuoteRight size={24} className="text-gray-400 ml-auto" />
                </div>

                {/* Text */}
                <div className="mt-4 text-gray-300 lg:text-lg leading-relaxed">
                  {highlightPercentage(item.text)}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Helper to highlight numbers like 40% or 35%
function highlightPercentage(text) {
  const parts = text.split(/(\d+%)/g); // Split around percentages
  return (
    <p>
      {parts.map((part, index) =>
        /\d+%/.test(part) ? (
          <span key={index} className="text-[#d4af37] font-semibold">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </p>
  );
}

export default Testimonial;
