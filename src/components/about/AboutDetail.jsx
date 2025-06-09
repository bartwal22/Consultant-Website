import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaCheck } from "react-icons/fa6";

export const AboutDetail = () => {
  return (
    <section className="lg:h-screen h-full w-full overflow-hidden relative lg:px-10 px-4 py-4 lg:py-8 flex flex-col md:flex-row lg:gap-4  bg-gradient-to-r from-black via-gray-900 to-black ">
      {/* Left Image Section */}
      <div className="lg:w-[50%] w-full h-full overflow-hidden relative">
        <div className="lg:h-[30rem] h-[40rem] w-[20rem] lg:w-[24rem] absolute rounded-3xl">
          <Slide triggerOnce direction="left">
            <img
              src="https://cdn.pixabay.com/photo/2014/08/05/09/37/building-410266_960_720.jpg"
              alt="cover img"
              className="h-[30rem] w-full object-cover rounded-3xl"
            />
          </Slide>
        </div>
        <div className="lg:h-[30rem] lg:w-[24rem] absolute right-0 bottom-0 rounded-3xl">
          <Slide triggerOnce direction="right">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
              alt="cover img2"
              className="h-[30rem] w-full object-cover rounded-3xl"
            />
          </Slide>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="lg:w-[50%] w-full h-full relative overflow-hidden flex flex-col md:gap-6 gap-2 mt-4 md:mt-0">
        <Fade triggerOnce>
          <p className="text-xl uppercase font-bold text-yellow-400">
            about amazing company
          </p>
        </Fade>

        <Fade triggerOnce>
          <h1 className="lg:text-3xl text-xl font-bold text-white">
            We’re Trusted Professional Consultancy Company
          </h1>
        </Fade>

        <Fade triggerOnce>
          <p className="lg:text-xl text-xs text-gray-300 font-normal">
            The business consultancy company stands as a beacon of guidance and
            innovation, offering a variety of services tailored to help
            enterprises grow. It operates as a strategic partner with a team of
            experienced professionals.
          </p>
        </Fade>

        <ul className="flex gap-3 flex-col text-xs lg:text-[1rem] text-gray-200">
          {[
            "Remain flexible and adaptive to swiftly respond to changing market dynamics and client needs.",
            "Utilize data-driven strategies to optimize business performance.",
            "Foster long-term relationships grounded in transparency and results.",
          ].map((text, index) => (
            <Fade triggerOnce key={index}>
              <li className="flex items-start gap-2 font-medium leading-relaxed">
                <FaCheck className="bg-yellow-400 text-black h-5 w-5 p-[0.2rem] rounded-full mt-1" />
                {text}
              </li>
            </Fade>
          ))}
        </ul>

        <Fade triggerOnce>
          <div className="flex flex-col mt-2">
            <p className="font-normal text-[1rem] text-white">
              Call to ask any question
            </p>
            <p className="font-bold text-base text-yellow-400">
              +1 234 567 890
            </p>
          </div>
        </Fade>

        <div className="flex md:gap-4 gap-2 flex-col md:flex-row mt-3">
          <a href="/contact">
            <Fade triggerOnce>
              <button className="bg-yellow-400 rounded cursor-pointer px-4 py-2 text-m text-black font-semibold hover:bg-yellow-300">
                Make An Appointment
              </button>
            </Fade>
          </a>
          <Fade triggerOnce duration={1000}>
            <button className="border-2 border-yellow-400 rounded cursor-pointer px-4 py-2 text-m text-yellow-400 font-semibold hover:bg-yellow-300 hover:text-black">
              View Our Services
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
};
