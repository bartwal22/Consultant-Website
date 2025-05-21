import React from 'react'

export const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6  mx-auto border border-slate-300">
    <img
      src="https://cdn.pixabay.com/photo/2020/11/24/04/01/pond-5771499_1280.jpg" // Replace with actual path
      alt="Service"
      className="w-full md:w-1/2 rounded-lg object-cover"
    />

    <div className="md:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Task Assessment
      </h2>
      <p className="text-gray-500 mb-4 lg:text-lg text-sm font-medium">
        Strategy consulting helps organizations define and achieve their business goals through comprehensive planning, analysis, and implementation. Here's a detailed look at the various services and approaches.
      </p>
      <p className="text-gray-500 mb-2 lg:text-lg text-sm font-normal">
        <strong className='font-bold text-gray-800'>Vision and Mission Definition:</strong> Clarifying the organization’s purpose and long-term aspirations.
      </p>
      <p className="text-gray-500 mb-6 lg:text-lg text-sm font-normal">
        <strong className='font-bold text-gray-800'>Core Competencies Analysis:</strong> Identifying unique strengths and capabilities that provide competitive advantages.
      </p>
      <a href="/contact">
      <button className="px-5 py-2 border border-[var(--primary-color)] text-black rounded-lg bg-[var(--primary-color)]  cursor-pointer transition-all duration-300">
        Book Appointment
      </button>
      </a>

    </div>
  </div>
  )
}
