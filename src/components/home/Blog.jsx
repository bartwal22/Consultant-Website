import React from "react";
import { Fade } from "react-awesome-reveal";

const blogPosts = [
  {
    id: 1,
    category: "Business",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    author: "Markus David",
    date: "1 Year Ago",
    title: "Building Performance Teams & Cultivating Leadership",
  },
  {
    id: 2,
    category: "Business",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    author: "Markus David",
    date: "1 Year Ago",
    title: "How Business Consulting Services Provide Stability",
  },
  {
    id: 3,
    category: "Business",
    image: "https://via.placeholder.com/400", // Replace with actual image URL
    author: "Markus David",
    date: "1 Year Ago",
    title: "Making Smarter Decisions for the Future Development",
  },
];

export const Blog = () => {
  return (
    <section className="w-full lg:py-10 py-6 lg:h-screen lg:px-10">
      {/* Header Section */}
      <div className="text-center md:mb-10 mb-4">
        <p className="text-lg font-bold text-[var(--primary-color)] uppercase">
          Recent Blog Posts
        </p>
        {/* <Fade triggerOnce> */}

        <h2 className="md:text-5xl text-3xl font-bold text-gray-800">
          Articles Daily Updated
        </h2>
        {/* </Fade> */}
      </div>

      {/* Blog Cards */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-10 px-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white relative overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/19/21/10/frog-1339892_1280.jpg"
              alt={post.title}
              className="lg:w-full lg:h-[18rem] object-cover lg:rounded-[1.5rem]"
            />
            <div className="p-5">
              <span className="bg-[var(--primary-color)] text-black lg:text-[0.8rem] text-[0.9rem]  uppercase font-semibold lg:px-5 px-3 lg:py-1 lg:rounded-[0.4rem] absolute top-[5%]">
                {post.category}
              </span>
              <div className="text-gray-600 lg:text-lg text-sm font-semibold md:mt-2">
                <p>
                  Posted By: {post.author} • <span className="text-slate-400">{post.date}</span>
                </p>
              </div>
              <h3 className="lg:text-[1.4rem] text-lg font-bold text-gray-900 md:mt-2">
                {post.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
