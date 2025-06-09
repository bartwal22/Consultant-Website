import React, { useState } from "react";
import { IndustryCard } from "./IndustryCard";
import { useGetIndustryQuery } from "../../store/Reducer/Industry";
import { Fade } from "react-awesome-reveal";

export const Index = () => {
  const { data, isLoading, isError, isSuccess } = useGetIndustryQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data?.data?.filter((item) =>
    item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-[#1f1f1f] text-white min-h-screen px-6 lg:px-10 py-8 rounded-md">
      {/* Heading */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          Explore Our Industries
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm">
          Discover how we’re delivering value across a wide range of industries.
          Tailored solutions for your business.
        </p>
      </header>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search industries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-md bg-[#2a2a2a] text-yellow-300 border border-yellow-500 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex justify-center items-center py-20 text-gray-400">
          Loading industries...
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="flex justify-center items-center py-20 text-red-500">
          Failed to load industries. Please try again later.
        </div>
      )}

      {/* Cards Grid */}
      {isSuccess && (
        <>
          {filteredData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <Fade key={item.id || index} triggerOnce delay={index * 100}>
                  <IndustryCard data={item} />
                </Fade>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">
              No industries found matching "{searchTerm}"
            </p>
          )}
        </>
      )}

      {/* CTA Footer */}
      <footer className="text-center mt-16 py-10 border-t border-yellow-500/20">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          Ready to Transform Your Industry?
        </h2>
        <p className="text-gray-300 mb-5 max-w-xl mx-auto">
          Let's collaborate to create something impactful. Contact us for
          tailored business strategies and innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Get in Touch
        </a>
      </footer>
    </section>
  );
};
