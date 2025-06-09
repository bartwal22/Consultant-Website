import React from "react";
import { Rotate } from "react-awesome-reveal";
import {
  FaUsers,
  FaHandshake,
  FaBriefcase,
  FaLaptopHouse,
} from "react-icons/fa";

const cardData = [
  {
    id: 1,
    icon: <FaUsers size={30} />,
    title: "Team Dynamics & Collaboration",
    description:
      "Explore strategies for fostering effective communication, trust, and synergy within consulting teams to improve productivity and morale.",
  },
  {
    id: 2,
    icon: <FaHandshake size={30} />,
    title: "Skill Diversification & Specialization",
    description:
      "Delve into how to balance broad expertise across industries with deep specialization to deliver impactful solutions.",
  },
  {
    id: 3,
    icon: <FaBriefcase size={30} />,
    title: "Talent Acquisition & Development",
    description:
      "Discover top methods to attract skilled professionals, support their growth, and retain high-performing individuals.",
  },
  {
    id: 4,
    icon: <FaLaptopHouse size={30} />,
    title: "Remote Work & Virtual Collaboration",
    description:
      "Understand the key tools and practices for managing distributed teams while maintaining performance and connection.",
  },
];

export const TeamCardCollab = () => {
  return (
    <section className="w-full bg-[#1e1e26] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Empowering Team Strategies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our team focuses on collaborative growth, skills enhancement, and
          efficient remote engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="bg-white text-center p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:shadow-yellow-400/60 transition duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <Rotate triggerOnce duration={1000}>
                <div className="bg-gradient-to-tr from-yellow-500 to-yellow-300 p-4 rounded-full text-white shadow-md">
                  {card.icon}
                </div>
              </Rotate>
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600">
              {card.title}
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
