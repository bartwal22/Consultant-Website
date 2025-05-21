import React from "react";
import { IoMdQuote } from "react-icons/io";
export const SliderCard = ({card}) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-[var(--secondary-color)] text-white md:rounded-3xl rounded-2xl overflow-hidden md:p-10 p-4 lg:h-[75vh] h-[60vh] w-full">

      {/* Content */}
      <div className="md:w-3/5 md:pr-10">
        {/* <p className="text-sm uppercase text-gray-300">
         {card?.message}
        </p> */}
        <h2 className="md:text-4xl text-xl font-bold mt-2 text-white">{card?.message}</h2>
        <div className="flex items-start md:mt-4 ">
          <div className="rounded-full border-1 lg:p-4 p-2 flex items-center">

          <IoMdQuote  className="text-[var(--primary-color)] lg:text-[4rem] text-[2rem]" />
          </div>
          <p className="ml-4 md:text-lg text-sm leading-relaxed text-white">
           {card?.about}
          </p>
        </div>
        <p className="md:mt-6 font-bold text-lg text-white">
         {card?.name}{" "}
          <span className="text-[var(--primary-color)]">{card?.designation}</span>
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-2/5 flex justify-end">
        <img
          src={card?.image?.url}
          alt="Founder"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

     
     
    </div>
  );
};
