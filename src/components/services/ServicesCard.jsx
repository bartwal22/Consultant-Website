import React from "react";

export const ServicesCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden border border-slate-200 shadow lg:w-[29rem]">
      <div className="p-6">
        <div className="flex items-center gap-2">
          {/* <div className="text-teal-600">{icon}</div> */}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">{data?.title}</h3>
        <p className="text-gray-600 mt-2">{data?.description}</p>
      </div>
      <div className="relative">
        <img
          src={data?.gallery?.url}
          alt={data?.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-4 left-6">
          <a href="/contact">
            <button className="flex items-center gap-2 bg-[var(--primary-color)] text-black font-semibold px-5 py-2 rounded-lg  transition cursor-pointer">
              Book Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
