import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectCard({ card }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden lg:h-[28rem] h-[24rem] bg-cover bg-center shadow-xl group transition-transform duration-300 hover:scale-[1.02] border border-gray-700/40"
      style={{
        backgroundImage: `url(${card?.coverImage?.url})`,
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-0" />

      {/* Title Badge - moved to top for space */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-yellow-400 text-black text-xs md:text-sm font-bold px-4 py-1 rounded-full shadow-md tracking-wider uppercase">
          {card?.category || "Featured Project"}
        </div>
      </div>

      {/* Content Panel */}
      <div className="absolute bottom-6 left-6 right-6 bg-[#1f1f1f]/90 md:p-6 p-4 rounded-2xl z-10 shadow-lg border border-yellow-500/20">
        <h2 className="text-yellow-400 md:text-2xl text-xl font-bold mb-2 line-clamp-1">
          {card?.title}
        </h2>

        <div className="border-t border-yellow-600/20 pt-3 mt-2">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
            {card?.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-[11px] md:text-xs text-gray-400 italic">
            {card?.techStack?.join(", ")}
          </span>

          <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition">
            Learn More <FaArrowRight className="text-xs mt-[1px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
