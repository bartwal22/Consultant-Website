import React from "react";
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";

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
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="relative lg:py-20 py-12 bg-gradient-to-b from-black via-[#0d0c0d] to-[#1a1a1a] text-center overflow-hidden flex flex-col items-center justify-center gap-12 border-y border-[#ffcc3f33]">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[400px] h-[400px] rounded-full bg-[#ffcc3f33] blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <Fade direction="up" delay={100} triggerOnce>
        <h2 className="text-[#ffcc3f] text-sm lg:text-lg font-semibold uppercase tracking-[0.25em] z-10">
          Trusted by Thousands of Companies
        </h2>
      </Fade>

      {/* Slider */}
      <div className="px-4 w-full z-10">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <Fade direction="up" delay={index * 100} triggerOnce>
                <div className="relative group p-4 lg:w-[18rem] w-full lg:h-[7rem] rounded-2xl bg-gradient-to-br from-[#fff7d1] via-[#ffec99] to-[#ffd95a] border border-[#ffcc3f55] shadow-[0_0_20px_#ffcc3f22] flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-[0_0_50px_#ffcc3faa] hover:scale-[1.05]">
                  {/* Optional: radial glow on hover */}
                  <div className="absolute inset-0 rounded-2xl group-hover:before:content-[''] group-hover:before:absolute group-hover:before:inset-0 group-hover:before:rounded-2xl group-hover:before:bg-[#ffcc3f44] group-hover:before:blur-2xl group-hover:before:opacity-40 transition-all" />
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-[60px] object-contain grayscale-0 transition duration-300"
                  />
                </div>
              </Fade>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
