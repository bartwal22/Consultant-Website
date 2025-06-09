import React from "react";
import { CiGlobe } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

export const AboutServices = () => {
  return (
    <section
      className="lg:h-screen w-full overflow-hidden flex flex-col md:flex-row justify-center items-center lg:px-16 px-4 py-4 lg:py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1604263710021-2ac5cd439907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Left Section - Text */}
      <div className="lg:w-[50%] flex flex-col md:gap-8 lg:px-4 text-white">
        <p className="text-lg font-bold text-[var(--primary-color)]">
          About amazing company
        </p>
        <Fade triggerOnce delay={300}>
          <h1 className="lg:text-5xl text-2xl font-bold">
            Business Strategy For Every Stage in Our Every Client’s Journey
          </h1>
        </Fade>

        <p className="lg:text-[1rem] text-sm text-gray-300 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi
          beatae laboriosam expedita provident ducimus.
        </p>

        {/* Feature 1 */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="lg:h-[3rem] h-[2rem] w-[2rem] p-1 md:p-0 lg:w-[3.5rem] text-black flex justify-center items-center bg-[var(--primary-color)] rounded">
            <CiGlobe size={26} />
          </div>
          <div>
            <h4 className="lg:text-2xl text-xl font-bold text-white">
              Global insights
            </h4>
            <p className="text-[1rem] text-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              voluptatibus!
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <div className="lg:h-[3rem] lg:w-[3.5rem] h-[2rem] w-[2rem] p-1 md:p-0 text-black flex justify-center items-center bg-[var(--primary-color)] rounded">
            <BsGraphUp size={26} />
          </div>
          <div>
            <h4 className="lg:text-2xl text-xl font-bold text-white">
              Data-Driven Strategy
            </h4>
            <p className="text-[1rem] text-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              voluptatibus!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="md:mt-0 mt-4">
          <a href="/contact">
            <button className="lg:text-lg font-semibold text-black bg-[var(--primary-color)] border border-[var(--primary-color)] px-5 md:py-3 py-2 cursor-pointer rounded hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]">
              Book Appointment Now
            </button>
          </a>
        </div>
      </div>

      {/* Right Section - Image & Statistic */}
      <div className="lg:w-[50%] lg:px-4 h-full relative md:mt-0 mt-4">
        <div className="lg:w-[83%] h-full">
          <div className="h-full w-full rounded-tl-[5rem] rounded-br-[5rem]">
            <img
              src="https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_1280.jpg"
              alt="Visual"
              className="h-full w-full object-cover rounded-tl-[5rem] rounded-br-[5rem]"
            />
          </div>
          <div className="absolute bottom-2 left-8 rounded-tl-[2rem] rounded-br-[2rem] bg-white flex flex-col items-center md:gap-2 px-4 py-4 animate-pulse shadow-lg">
            <p className="text-black text-lg font-bold">96%</p>
            <p className="text-black text-lg font-bold">Successful stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
