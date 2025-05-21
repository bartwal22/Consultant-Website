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
    icon: <FaUsers size={40} className="text-[var(--DarkYellow-color)]" />,
    title: "Team Dynamics & Collaboration",
    description:
      "Explore strategies for fostering effective communication, trust, and synergy within the consultant...",
  },
  {
    id: 2,
    icon: <FaHandshake size={40} className="text-[var(--DarkYellow-color)]" />,
    title: "Skill Diversification & Specialization",
    description:
      "Delve into the balance between cultivating broad expertise across various industries...",
  },
  {
    id: 3,
    icon: <FaBriefcase size={40} className="text-[var(--DarkYellow-color)]" />,
    title: "Talent Acquisition & Development",
    description:
      "Discuss methodologies for recruiting top-tier talent, nurturing their professional growth, and retaining...",
  },
  {
    id: 4,
    icon: (
      <FaLaptopHouse size={40} className="text-[var(--DarkYellow-color)]" />
    ),
    title: "Remote Work & Virtual Collaboration",
    description:
      "Address the challenges & opportunities associated with remote work & virtual collaboration in the context...",
  },
];

export const TeamCardCollab = () => {
  return (
    <section className="container mx-auto lg:px-16 lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="text-center p-6 shadow-md rounded-lg bg-white"
          >
            <div className="flex justify-center mb-4">
              <Rotate triggerOnce duration={1000}  >
              {card.icon}

              </Rotate>
              
              </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-500 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
