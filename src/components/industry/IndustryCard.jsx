import React from 'react'

export const IndustryCard = ({data}) => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative">
      <img
        src={data?.gallery?.url}
        alt="Business Meeting"
        className="w-full h-64 object-cover"
      />
      <div className="absolute top-4 left-4 bg-[var(--primary-color)] text-black text-center px-3 py-1 rounded-md">
        <p className="text-sm font-bold leading-4">20</p>
        <p className="text-xs font-medium">FEB</p>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
       {data?.title}
      </h3>
      <p className="text-gray-600 mb-4">
       {data?.description}
      </p>
      <a
        href="/contact"
        className="text-[var(--primary-color)] bg-black px-2 py-1 rounded font-semibold inline-flex items-center hover:underline"
      >
        Book Appointment
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
  )
}
