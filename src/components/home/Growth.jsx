import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
const stats = [
  { value: "35%", label: "WORKING COMPLETED PROJECTS" },
  { value: "6M", label: "HAPPY CUSTOMERS WHO TRUSTED US" },
  { value: "86+", label: "AWARDS WINNING & PARTNERS WORLDWIDE" },
];
import CountUp from "react-countup";

export const Growth = () => {
  return (
    <section className="bg-[var(--secondary-color)] text-white mdrounded-2xl md:px-16 px-6 md:py-0 py-6 md:max-w-[90%] mx-auto lg:h-[70vh] flex flex-col justify-evenly">
      {/* Header Section */}
      <div className="text-left md:mb-8 mb-4">
        <p className="text-[var(--primary-color)] font-semibold uppercase text-sm">
          Business Growth
        </p>
        {/* <JackInTheBox triggerOnce> */}
          <h2 className="md:text-5xl text-2xl font-bold leading-tight">
            Make Sure Your Objectives <br /> Improve Profit Drivers
          </h2>
        {/* </JackInTheBox> */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 rounded-lg border-[1px] border-slate-400 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden ">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-transparent  px-6 lg:py-10 border-r-[1px] border-slate-400 shadow-lg flex md:justify-center md:gap-4 gap-2 items-center"
          >
            <h3 className="md:text-5xl text-3xl font-bold text-white ">
              <CountUp
                start={0}
                end={parseFloat(stat.value)}
                duration={2}
                enableScrollSpy
                scrollSpyOnce
                suffix={
                  stat.value.includes("%")
                    ? "%"
                    : stat.value.includes("M")
                    ? "M"
                    : stat.value.includes("+")
                    ? "+"
                    : ""
                }
              />
            </h3>
            <p className="text-gray-400 md:text-lg text-sm font-bold mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
