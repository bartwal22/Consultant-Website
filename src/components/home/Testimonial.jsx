import React, { useRef } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce } from "react-awesome-reveal";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "GEORGE ARTHUR",
    position: "Director TMS.Inc",
    image: "/api/placeholder/100/100",
    text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%."
  },
  {
    id: 2,
    name: "SARAH JOHNSON",
    position: "CEO of DataFlow",
    image: "/api/placeholder/100/100",
    text: "A2Y has transformed how we approach business intelligence. The AI-driven insights have helped us identify market opportunities we would have otherwise missed."
  },
  {
    id: 3,
    name: "MICHAEL CHEN",
    position: "Operations Manager",
    image: "/api/placeholder/100/100",
    text: "Implementing A2Y into our workflow was seamless. The customer support team was exceptional, and the results were immediate. Our efficiency increased by 35% in just three months."
  },
  {
    id: 4,
    name: "JESSICA WILLIAMS",
    position: "Marketing Director",
    image: "/api/placeholder/100/100",
    text: "As someone who was skeptical about AI tools, A2Y has completely changed my perspective. It's intuitive, powerful, and delivers actionable insights that drive real business value."
  }
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
    prevArrow:<></>,
    nextArrow:<></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="w-full overflow-hidden lg:h-screen lg:px-10 lg:py-6">
      <div className="bg-[var(--secondary-color)] w-full h-full md:rounded-2xl lg:p-2 lg:py-2 pt-6">
        <div className="text-center lg:mb-10 lg:mt-10 flex flex-col justify-center items-center md:gap-4">
          {/* <Bounce triggerOnce> */}
          <p className="text-[var(--primary-color)] font-bold text-lg uppercase">Testimonials</p>
          {/* </Bounce> */}
          <h2 className="md:text-5xl text-3xl font-bold text-white">What Our Users Said About A2Y</h2>
          <p className="md:text-lg text-sm font-medium text-white lg:w-1/2">
            Our AI business co-pilot is engineered to function not just as a
            standalone solution but as a central part of your digital ecosystem.
          </p>

          <div className="lg:mt-0 mt-4">
            <button className="lg:px-5 px-3 py-2 lg:py-3 text-black font-semibold bg-[var(--primary-color)] lg:rounded-[2rem] rounded cursor-pointer">
              Write your experience
            </button>
          </div>
        </div>

        <div className="relative w-full md:py-6 ">
          {/* Navigation Buttons */}
          {/* <button 
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer lg:left-8"
          >
            <FaChevronLeft size={20} className="text-gray-700" />
          </button> */}

          {/* Testimonial Slider */}
          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((item) => (
              <div key={item.id} className="px-3 py-4">
                <div className="bg-[#0F2B35] text-white p-6 rounded-xl shadow-lg border border-gray-700 lg:h-[18rem]">
                  {/* Profile Section */}
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_1280.jpg"
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-500"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm text-[var(--primary-color)] font-semibold">{item.position}</p>
                    </div>
                    <FaQuoteRight size={32} className="text-gray-400 ml-auto" />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-600 my-4"></div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 lg:text-lg leading-relaxed">
                    "{item.text.replace('40%', 
                      <span className="text-teal-400 font-semibold">40%</span>
                    )}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Navigation Button */}
          {/* <button 
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer lg:right-8"
          >
            <FaChevronRight size={20} className="text-gray-700" />
          </button> */}
        </div>
      </div>

      {/* Add some custom CSS for the dots */}
      <style jsx>{`
        :global(.testimonial-slider .slick-dots) {
          bottom: -40px;
        }
        :global(.testimonial-slider .slick-dots li button:before) {
          color: white;
        }
        :global(.testimonial-slider .slick-dots li.slick-active button:before) {
          color: var(--tertiary-color);
        }
      `}</style>
    </section>
  );
};

export default Testimonial;