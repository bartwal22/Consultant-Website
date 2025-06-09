import React from "react";
import { Bounce } from "react-awesome-reveal";
import CountUp from "react-countup";

const stats = [
  {
    value: "35",
    label: "YEARS OF EXPERIENCE",
    description:
      "Central to the consultancy's modus operandi is a commitment...",
  },
  {
    value: "500+",
    label: "OFFICIAL PROJECT COMPLETED",
    description:
      "Central to the consultancy's modus operandi is a commitment...",
  },
  {
    value: "396+",
    label: "IN-HOUSE TEAM MEMBERS",
    description:
      "Central to the consultancy's modus operandi is a commitment...",
  },
];

export const Milestone = () => {
  return (
    <section className="h-screen md:px-0 px-4 w-full overflow-hidden flex items-end justify-center bg-gradient-to-r from-black via-gray-900 to-black pb-20">
      <div className="flex flex-wrap justify-center gap-6 md:p-6 p-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="md:p-14 p-10 bg-[rgba(20,20,20,0.75)] border border-[var(--DarkYellow-color)] rounded-tl-[3rem] rounded-br-[3rem] shadow-xl transition-transform hover:scale-105 duration-300"
          >
            <Bounce triggerOnce>
              <h2 className="text-4xl font-bold text-[var(--DarkYellow-color)] text-center">
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
              </h2>
              <p className="lg:text-lg font-bold text-white mt-2 text-center uppercase">
                {stat.label}
              </p>
              <p className="text-gray-300 text-md font-normal mt-2 text-center">
                {stat.description}
              </p>
            </Bounce>
          </div>
        ))}
      </div>
    </section>
  );
};
