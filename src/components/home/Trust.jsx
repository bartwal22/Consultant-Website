import React from "react";
import { Bounce } from "react-awesome-reveal";
import Slider from "react-slick";

const companies = [
  {
    name: "Google",
    logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-256.png",
  },
  {
    name: "Amazon",
    logo: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-128.png",
  },
  {
    name: "Likke",
    logo: "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-128.png",
  },
  {
    name: "9ullet",
    logo: "https://cdn4.iconfinder.com/data/icons/apps-2025/512/Canva-128.png",
  },
  {
    name: "Campie",
    logo: "https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/Windows_Live_Mesh.png",
  },
];

export const Trust = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
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
    <section className="lg:py-10  py-6  bg-white text-center lg:h-[50vh] overflow-hidden flex flex-col items-center justify-center border-1 gap-8 border-slate-300 lg:my-8 ">
      <h2 className="text-gray-500 lg:text-lg text-sm font-medium uppercase lg:mb-6">
        Used by thousands of companies around the world
      </h2>

      <div className="px-6 w-full">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              {/* <Bounce delay={index * 100} triggerOnce> */}
                <div className="bg-white  border-1 border-slate-300 p-4 rounded-xl shadow-md flex items-center justify-center lg:w-[20rem] w-full lg:h-[8rem]">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-22  "
                  />
                </div>
              {/* </Bounce> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
