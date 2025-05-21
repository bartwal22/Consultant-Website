import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaCheck } from "react-icons/fa6";

export const AboutDetail = () => {
  return (
    <section className="lg:h-screen h-full w-full overflow-hidden relative lg:px-10 px-4 py-4 lg:py-8 flex flex-col md:flex-row lg:gap-4">
      <div className="lg:w-[50%] w-full h-full overflow-hidden relative">
        <div className="lg:h-[30rem] h-[40rem] w-[20rem] lg:w-[24rem] absolute rounded-4xl">
          <Slide triggerOnce direction="left">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/17/19/50/mysterious-9413772_1280.jpg"
              alt="cover img"
              className="h-full w-full object-cover rounded-4xl"
            />
          </Slide>
        </div>
        <div className="lg:h-[30rem] lg:w-[24rem] absolute right-0 bottom-0 rounded-4xl">
          <Slide triggerOnce direction="right">
            <img
              src="https://cdn.pixabay.com/photo/2025/02/17/19/50/mysterious-9413772_1280.jpg"
              alt="cover img2"
              className="h-full w-full object-cover rounded-4xl"
            />
          </Slide>
        </div>
      </div>

      <div className="lg:w-[50%] w-full h-full relative overflow-hidden flex flex-col md:gap-8 gap-1">
        <Fade triggerOnce>
          <p className="text-lg uppercase font-bold text-[var(--primary-color)]">
            about amazing company
          </p>
        </Fade>

        <Fade triggerOnce>
          <h1 className="lg:text-5xl text-2xl font-bold text-black">
            We’re Trusted Professional Consultancy Company
          </h1>
        </Fade>

        <Fade triggerOnce>
          <p className="lg:text-lg text-sm text-gray-600 font-semibold">
            The business consultancy company stands as a stalwart beacon of
            guidance and innovation, offering a multifaceted array of services
            tailored to propel enterprises toward their zenith. At its core,
            this entity operates as a bastion of strategic insight, employing a
            cadre of seasoned professionals.
          </p>
        </Fade>

        <ul className="flex gap-4 flex-col">
          <Fade triggerOnce>
            <li className="flex items-center gap-2 lg:text-[1.1rem] text-sm font-medium">
              <FaCheck
                size={20}
                className="bg-[var(--primary-color)] md:h-8 h-6 w-8 p-[0.4rem] rounded-full"
              />
              Remain flexible and adaptive to swiftly respond to changing market
              dynamics and client needs.
            </li>
          </Fade>
          <Fade triggerOnce>
            <li className="flex items-center gap-2 lg:text-[1.1rem] font-medium">
              <FaCheck
                size={20}
                className="bg-[var(--primary-color)] md:h-8 w-8 h-6 p-[0.4rem] rounded-full"
              />
              Remain flexible and adaptive to swiftly respond to changing market
              dynamics and client needs.
            </li>
          </Fade>

          <Fade triggerOnce>
            <li className="flex items-center gap-2 lg:text-[1.1rem] font-medium">
              <FaCheck
                size={20}
                className="bg-[var(--primary-color)] md:h-8 h-6 w-8 p-[0.4rem] rounded-full"
              />
              Remain flexible and adaptive to swiftly respond to changing market
              dynamics and client needs.
            </li>
          </Fade>
        </ul>

        <div className="flex gap-4 items-center">
          <Fade triggerOnce>
            <p className="font-normal text-lg">Call to ask any question</p>
            <p className="font-bold text-xl text-[var(--DarkYellow-color)]">
              +1 234 567 890
            </p>
          </Fade>
        </div>

        <div className="flex md:gap-4 gap-2 flex-col md:flex-row md:mt-0 mt-2">
          <a href="/contact">
            <Fade triggerOnce>
              <button className="bg-[var(--primary-color)] rounded cursor-pointer lg:px-6 lg:py-4 py-2 px-2 text-black font-semibold hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
                Make An Appointment
              </button>
            </Fade>
          </a>
          <Fade triggerOnce duration={1000}>
            <button className="border-2 border-[var(--primary-color)] rounded cursor-pointer lg:px-6 lg:py-4 py-2 text-black font-semibold hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
              View Our Services
            </button>
          </Fade>
        </div>
      </div>
    </section>
  );
};
