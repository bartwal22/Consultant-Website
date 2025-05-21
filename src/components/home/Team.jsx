import React from "react";
import { Fade } from "react-awesome-reveal";

const teamMembers = [
  {
    id: 1,
    name: "Honey Deep",
    position: "Chief Officer",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jonathan Parker",
    position: "Manager",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Samuel Taylor",
    position: "Risk Analyst",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Thomas Collins",
    position: "Business Lead",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
];

export const Team = () => {
  return (
    <section className="w-full md:py-10 py-6 bg-gray-100">
      {/* Title Section */}
      <div className="text-center md:mb-10 mb-4">
        <p className="text-[var(--primary-color)] text-lg font-bold uppercase">
          Expert People
        </p>
        {/* <Fade triggerOnce> */}
        <h2 className="md:text-5xl text-3xl font-bold text-gray-800">
          Our Dedicated Team Members
        </h2>
        {/* </Fade> */}
      </div>

      {/* Team Members Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-10 px-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative bg-white rounded overflow-hidden group">
            {/* Image with Hover Effect */}
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_1280.jpg"
                alt={member.name}
                className="w-full md:h-80 h-60 object-cover"
              />

              {/* Social Icons (Hidden Initially) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full px-4 py-2 flex space-x-3 shadow-lg">
                  <a href="#" className="text-gray-700 hover:text-blue-500">F</a>
                  <a href="#" className="text-gray-700 hover:text-blue-500">X</a>
                  <a href="#" className="text-gray-700 hover:text-blue-500">Bē</a>
                </div>
              </div>
            </div>

            {/* Name & Position */}
            <div className="p-4 text-center bg-gray-50">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
