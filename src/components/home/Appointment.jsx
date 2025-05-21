import React from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
export const Appointment = () => {
  return (
    <section className="lg:h-screen overflow-hidden w-full lg:px-10 lg:py-10 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center lg:h-full mx-auto  overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-[40%] h-full lg:rounded-2xl">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643477_1280.jpg"
            alt="Business Team"
            className="w-full h-full object-cover lg:rounded-2xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 md:p-8 p-3 overflow-hidden">
        {/* <Slide triggerOnce direction="left"> */}
          <h5 className="text-[var(--primary-color)] md:text-lg text-sm font-semibold uppercase ">
            Make a Business Plan
          </h5>
        {/* </Slide> */}

        {/* <Slide triggerOnce direction="left"> */}
          <h2 className="text-gray-900 md:text-5xl text-2xl font-bold md:mt-2">
            Let's Discuss About Your Business Plan
          </h2>
        {/* </Slide> */}
        {/* <Slide triggerOnce direction="left"> */}
          <p className="text-gray-600 md:mt-4 lg:text-lg text-sm font-normal">
            From building your online presence to leveraging advanced analytics,
            each chapter is packed with actionable advice.
          </p>
        {/* </Slide> */}

          {/* Bullet Points */}
          <div className="md:mt-6 mt-1 space-y-3">
            {[
              "Fundamental concepts of digital marketing",
              "Mastering content marketing",
              "Effective email marketing strategies",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-gray-700 font-normal md:text-lg text-sm "
              >
                {/* <Fade triggerOnce> */}

                <div className="md:h-8 md:w-8 h-6 w-6 bg-[var(--primary-color)] flex items-center justify-center rounded-full">
                  <FaCheck className="text-black " />
                </div>
                <span>{item}</span>
                {/* </Fade> */}
              </div>
            ))}
          </div>

          {/* Button */}
          {/* <Bounce triggerOnce> */}
          <a href="/contact">
            <button className="md:mt-6 mt-2 bg-[var(--primary-color)] text-black md:px-6 px-3 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition cursor-pointer ">
              <span>Book Appointment</span>
              <FaLongArrowAltRight />
            </button>
          </a>
          {/* </Bounce> */}
        </div>
      </div>
    </section>
  );
};
