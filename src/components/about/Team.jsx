import React from "react";
import { Bounce } from "react-awesome-reveal";
import { FaShareAlt } from "react-icons/fa";
import { useGetTeamQuery } from "../../store/Reducer/Team";

const teamMembers = [
  {
    name: "Andrew Smith",
    role: "Advisor",
    imageUrl: "/andrew-smith.jpg",
  },
  {
    name: "Ethan Matthew",
    role: "Advisor",
    imageUrl: "/ethan-matthew.jpg",
  },
  {
    name: "Samuel Lucas",
    role: "Advisor",
    imageUrl: "/samuel-lucas.jpg",
  },
];

export const Team = () => {
  const { data , isSuccess, isError, isLoading} = useGetTeamQuery({
    page:1, limit:10
  });

  return (
    <section className="lg:h-screen w-full overflow-hidden relative  ">
      <div className="h-full w-full bg-[var(--secondary-color)] md:rounded-tl-[9rem] md:rounded-br-[9rem] flex flex-col justify-center items-center  overflow-hidden">
        <div className=" flex flex-col justify-center items-center md:gap-2 rounded-br-[3rem] rounded-tl-[3rem text-[var(--tertiary-color)] font-semibold text-lg px-8 py-3">
          <p className="uppercase text-[var(--primary-color)] lg:text-lg font-bold">
            our team
          </p>
          <Bounce triggerOnce>
            <h1 className="lg:text-5xl font-bold text-white">
              Our Dedicated People
            </h1>
          </Bounce>
        </div>

        <div className="flex flex-wrap justify-center md:gap-6 md:p-6  gap-4 mb-4 lg:mb-0">
          { data?.allTeam?.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg lg:w-100 w-[90%] overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member?.image?.url}
                  alt={member?.name}
                  className="w-full md:h-96 h-60 object-cover rounded-t-2xl"
                />
                {/* Share Button */}
                <button className="absolute bottom-4 md:right-4 right-6 bg-[var(--primary-color)] text-black p-2 rounded-full shadow-lg  transition">
                  <FaShareAlt />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member?.name}
                </h3>
                <p className="text-[var(--DarkYellow-color)]">{member?.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
