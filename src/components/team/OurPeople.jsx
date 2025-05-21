import React from "react";
import { Bounce } from "react-awesome-reveal";

import { FaShareAlt } from "react-icons/fa";

export const TeamCard = ({ name, role, image }) => {
  return (
    <div className="overflow-hidden md:w-100 text-center">
      {/* Image Section */}
      <div className="relative rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full md:h-96 h-68 object-cover rounded-xl"
        />

        {/* Share Button */}
        <button className="absolute bottom-0 right-0 bg-[var(--secondary-color)] p-2  shadow-md rounded-br-xl rounded-tl-xl">
          <FaShareAlt className="text-[var(--yellow-color)]" />
        </button>
      </div>

      {/* Details Section */}
      <div className="md:p-4 p-2 bg-white shadow-2xl w-[70%] mx-auto rounded-br-xl rounded-bl-xl">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-[var(--DarkYellow-color)] font-medium bg-[var(--secondary-color)] px-3 py-1 rounded-md inline-block md:mt-2">
          {role}
        </p>
      </div>
    </div>
  );
};

export const OurPeople = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="bg-slate-200 lg:px-16 px-4 lg:py-12 py-4 md:rounded-tl-[3rem] md:rounded-br-[3rem]">
        <div className="flex justify-center items-center flex-col md:gap-4 md:mb-0 mb-4">
          <Bounce>
            <h1 className="font-bold lg:text-5xl text-2xl text-[var(--secondary-color)]">
              Our Dedicated People
            </h1>
          </Bounce>
          <p className="text-[var(--secondary-color)] md:text-lg text-sm text-center md:text-left   font-normal">
            We love what we do and we do it with passion. We value the
            experimentation of the message and smart incentives.
          </p>
        </div>

        <div className="lg:mt-8">
          <TeamCard
            name="Andrew Smith"
            role="Advisor"
            image="https://cdn.pixabay.com/photo/2024/03/19/15/20/woman-8643445_1280.png"
          />
        </div>
      </div>
    </section>
  );
};
