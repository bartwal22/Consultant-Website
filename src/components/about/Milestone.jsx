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
    <section className="lg:h-[40vh] md:px-0 px-4 w-full overflow-hidden flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-6 md:p-6 p-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="md:p-14 p-12 bg-gradient-to-b from-gray-100 to-white shadow-md w-100  border border-gray-200 rounded-tl-[3rem] rounded-br-[3rem]"
          >
            <Bounce triggerOnce>
              <h2 className="text-4xl font-bold text-gray-900">
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
              <p className="lg:text-lg font-bold text-[var(--DarkYellow-color)] mt-2">
                {stat.label}
              </p>
              <p className="text-gray-500 text-lg font-normal mt-2">
                {stat.description}
              </p>
            </Bounce>
          </div>
        ))}
      </div>
    </section>
  );
};
