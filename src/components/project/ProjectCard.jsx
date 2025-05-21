import React from 'react'

export default function ProjectCard({card}) {
  return (
    <div
    className="relative rounded-lg overflow-hidden lg:h-[28rem] h-[20rem] bg-cover bg-center lg:px-10"
    style={{ backgroundImage: `url(${card?.coverImage?.url})` }}
  >
    {/* Category badge */}
    <div className="absolute md:bottom-[40%] bottom-[45%] left-7">
      <div className="bg-[var(--primary-color)] text-black text-sm font-semibold px-6 py-3 rounded-full">
        {card?.title}
      </div>
    </div>

    {/* Content panel */}
    <div className="absolute bottom-7 left-7 right-7 bg-white md:p-6 p-4 rounded-[1rem]">
      <h2 className="text-gray-800 md:text-2xl text-lg font-bold md:mb-3 mb-1">
        {card?.title}
      </h2>
      <div className="border-t border-gray-200 md:pt-4 pt-2 md:mt-1">
        <p className="text-gray-600 md:text-base text-sm">
          {card?.description}
        </p>
      </div>
    </div>
  </div>
  )
}
