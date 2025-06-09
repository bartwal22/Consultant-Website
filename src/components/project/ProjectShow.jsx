import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjectQuery } from "../../store/Reducer/Project";

export default function ProjectShow() {
  const [pages, setPages] = useState([1]);
  const [projects, setProjects] = useState([]);
  const [allData, setAllData] = useState({});

  const { data, isSuccess } = useGetProjectQuery({
    page: pages[pages.length - 1],
    limit: 10,
  });

  useEffect(() => {
    if (isSuccess && data?.data?.length > 0) {
      setAllData((prev) => ({
        ...prev,
        [pages[pages.length - 1]]: data.data,
      }));
    }
  }, [data, isSuccess, pages]);

  useEffect(() => {
    const combinedData = pages.flatMap((pageNum) => allData[pageNum] || []);
    setProjects(combinedData);
  }, [allData, pages]);

  const handleLoadMore = () => {
    const nextPage = pages[pages.length - 1] + 1;
    if (nextPage <= data?.pagination?.pages) {
      setPages([...pages, nextPage]);
    }
  };

  const handleShowLess = () => {
    const newPages = [...pages];
    newPages.pop();
    setPages(newPages);
  };

  const isLastPage = pages[pages.length - 1] === data?.pagination?.pages;

  return (
    <section
      className="w-full min-h-screen text-white lg:px-16 p-4 lg:py-10 py-6"
      style={{
        background: "linear-gradient(145deg, #1e1e2f, #111118)",
      }}
    >
      <h1
        className="text-center text-4xl font-bold text-yellow-400 mb-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        {!isLastPage && (
          <button
            onClick={handleLoadMore}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 lg:px-10 py-2 lg:py-3 rounded-md shadow transition-all"
          >
            Load More
          </button>
        )}

        {pages.length > 1 && (
          <button
            onClick={handleShowLess}
            className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 lg:px-10 py-2 lg:py-3 rounded-md shadow transition-all"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
