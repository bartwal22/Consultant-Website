import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useGetProjectQuery } from "../../store/Reducer/Project";

export default function ProjectShow() {
  const [pages, setPages] = useState([1]); // initially load page 1
  const [projects, setProjects] = useState([]);
  const [allData, setAllData] = useState({}); // pageNumber -> data
  const lastPageRef = React.useRef(null);

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
    // Merge data from all loaded pages
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
  const isFirstPageOnly = pages.length === 1;

  return (
    <section className="w-full h-full md:h-auto lg:px-16 p-4 lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {!isLastPage && (
          <button
            className="lg:px-10 px-6 py-2 lg:py-3 bg-[var(--primary-color)] text-black font-medium text-lg rounded-md transition cursor-pointer"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}

        {pages.length > 1 && (
          <button
            className="lg:px-10 px-6 py-2 lg:py-3 bg-red-400 text-white font-medium text-lg rounded-md transition cursor-pointer"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
