import React from "react";

export const CommonHero = ({ item }) => {
  return (
    <section
      className="w-full lg: h-[40vh] lg:h-[50vh] flex flex-col justify-center items-center text-center px-4 relative"
      style={{
        background: "linear-gradient(135deg, #1e1b18, #0d0c0a 70%)",
      }}
    >
      <h1
        className="absolute bottom-[3rem] text-4xl lg:text-6xl font-bold mb-6"
        style={{
          background: "linear-gradient(90deg, #b59a42, #f6e27f, #b59a42)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
        }}
      >
        {item.tittle}
      </h1>
      <div className="absolute bottom-[1rem] flex gap-3 items-center bg-transparent border-2 border-yellow-500 px-6 py-2 rounded-lg text-yellow-500 font-semibold text-md lg:text-lg select-none">
        <p className="hover:text-yellow-300 cursor-pointer transition-colors">
          Home
        </p>
        <span className="text-yellow-400">/</span>
        <p className="text-yellow-300">{item.tittle}</p>
      </div>
    </section>
  );
};
