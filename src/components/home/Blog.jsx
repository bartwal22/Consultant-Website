import React from "react";
import { Fade } from "react-awesome-reveal";

const blogPosts = [
  {
    id: 1,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    author: "Markus David",
    date: "1 Year Ago",
    title: "Building Performance Teams & Cultivating Leadership",
  },
  {
    id: 2,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    author: "Markus David",
    date: "1 Year Ago",
    title: "How Business Consulting Services Provide Stability",
  },
  {
    id: 3,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    author: "Markus David",
    date: "1 Year Ago",
    title: "Making Smarter Decisions for the Future Development",
  },
];

export const Blog = () => {
  return (
    <section className="w-full lg:py-16 py-10 lg:px-10 px-4 bg-gradient-to-br from-black via-[#aa9c47] to-black">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
          Recent Blog Posts
        </p>
        <Fade triggerOnce direction="up">
          <h2 className="md:text-5xl text-3xl font-bold text-white mt-2">
            Articles Daily Updated
          </h2>
        </Fade>
        <div className="w-24 h-1 mx-auto mt-4 bg-yellow-400 rounded"></div>
        <p className="text-gray-300 text-base mt-4 max-w-xl mx-auto">
          Stay informed with the latest business insights and leadership
          strategies. Discover what's trending in the world of business today.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Fade triggerOnce direction="up" key={post.id}>
            <div className="bg-[#111827] rounded-2xl border border-transparent hover:border-yellow-400 shadow-lg transform hover:-translate-y-2 transition duration-300 overflow-hidden">
              <div className="relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-400 font-medium">
                  Posted by{" "}
                  <span className="text-white font-semibold">
                    {post.author}
                  </span>{" "}
                  • {post.date}
                </p>
                <h3 className="text-xl font-bold text-white mt-2 hover:text-yellow-400 transition duration-200">
                  {post.title}
                </h3>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Blog;
