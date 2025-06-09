import React from "react";
import { Fade } from "react-awesome-reveal";

const teamMembers = [
  {
    id: 1,
    name: "Honey Deep",
    position: "Chief Officer",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Jonathan Parker",
    position: "Manager",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Samuel Taylor",
    position: "Risk Analyst",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Thomas Collins",
    position: "Business Lead",
    image: "https://via.placeholder.com/300",
  },
];

export const Team = () => {
  return (
    <section className="w-full md:py-16 py-10 bg-black text-white">
      {/* Title Section */}
      <div className="text-center md:mb-12 mb-6">
        <p className="text-[#ffcc3f] text-lg font-bold uppercase tracking-widest">
          Expert People
        </p>
        <h2 className="md:text-5xl text-3xl font-bold mt-2">
          Our Dedicated Team Members
        </h2>
      </div>

      {/* Team Members Grid */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-10 px-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative bg-black border border-[#ffcc3f]/30 rounded-xl overflow-hidden group hover:shadow-[0_0_20px_#ffcc3faa] transition duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2025/03/18/06/17/snowy-cabin-9477457_1280.jpg"
                alt={member.name}
                className="w-full md:h-80 h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Social Icons */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#ffcc3f] rounded-full px-4 py-2 flex space-x-3 shadow-lg">
                  <a
                    href="#"
                    className="text-black font-semibold hover:underline"
                  >
                    F
                  </a>
                  <a
                    href="#"
                    className="text-black font-semibold hover:underline"
                  >
                    X
                  </a>
                  <a
                    href="#"
                    className="text-black font-semibold hover:underline"
                  >
                    Bē
                  </a>
                </div>
              </div>
            </div>

            {/* Name & Position */}
            <div className="p-5 text-center bg-black border-t border-[#ffcc3f]/40">
              <h3 className="text-xl font-bold text-[#ffcc3f]">
                {member.name}
              </h3>
              <p className="text-gray-300">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
