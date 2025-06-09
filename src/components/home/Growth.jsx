import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import CountUp from "react-countup";

const stats = [
  { value: "35%", label: "WORKING COMPLETED PROJECTS" },
  { value: "6M", label: "HAPPY CUSTOMERS WHO TRUSTED US" },
  { value: "86+", label: "AWARDS WINNING & PARTNERS WORLDWIDE" },
];

export const Growth = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 md:px-16 py-10 lg:py-20 overflow-hidden">
      {/* Golden radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,204,63,0.15) 0%, transparent 80%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-10">
        {/* Header */}
        <div className="text-left">
          <p className="text-[#ffcc3f] font-semibold uppercase text-sm tracking-widest">
            Business Growth
          </p>
          <JackInTheBox triggerOnce>
            <h2 className="text-2xl md:text-5xl font-bold leading-tight mt-2 text-white">
              Make Sure Your Objectives <br /> Improve Profit Drivers
            </h2>
          </JackInTheBox>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-yellow-600/30 rounded-xl overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 px-6 py-10 bg-transparent ${
                index < stats.length - 1
                  ? "border-b sm:border-b-0 sm:border-r border-yellow-500/30"
                  : ""
              }`}
            >
              <h3 className="text-[#ffcc3f] text-3xl md:text-5xl font-bold">
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
              <p className="text-gray-300 text-sm md:text-lg font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
