import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="bg-[#1e1e26] text-white rounded-lg shadow-lg flex flex-col items-center p-4 w-full md:w-[300px] hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-[150px] h-[150px] overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Name and Role */}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-[#e58f00] text-sm mt-1 mb-3">{role}</p>
      <p className="text-sm text-gray-300 mb-4 text-center">
        Adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <FaFacebookF className="text-gray-300 hover:text-white cursor-pointer" />
        <FaTwitter className="text-gray-300 hover:text-white cursor-pointer" />
        <FaInstagram className="text-gray-300 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export const OurPeople = () => {
  const teamMembers = [
    {
      name: "Jeffrey Brown",
      role: "Creative Leader",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Alex Greenfield",
      role: "Programming Guru",
      image:
        "https://cdn.pixabay.com/photo/2024/11/10/12/33/businessman-9187765_1280.jpg",
    },
    {
      name: "Ann Richmond",
      role: "Manager",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="bg-[#15161a] text-white py-12 px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Our Team</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>

      {/* Team Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};
