import React, { useState } from "react";
import { BlogCard } from "./BlogCard";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import {
  useGetBlogQuery,
  useGetRandomBlogQuery,
} from "../../store/Reducer/Blog";

export const BlogList = () => {
  const [page, setPage] = useState(1);

  const { data, isSuccess } = useGetBlogQuery({ page, limit: 10 });
  const { data: randomBlog, isSuccess: randomSuccess } =
    useGetRandomBlogQuery();

  const handleIncrease = () => {
    if (data?.currentPage < data?.totalPages) setPage(page + 1);
  };

  const handleDecrease = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-[#e6e6e6] py-12 px-6 lg:px-20 overflow-x-hidden">
      {/* Subtle Gold Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#000000] via-[#111111] to-[#2b1e0f] z-0 pointer-events-none opacity-60"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(circle,#d4af3733,transparent)] blur-2xl top-[-200px] right-[-300px] z-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 max-w-screen-xl mx-auto">
        {/* Blog List */}
        <div className="lg:w-[65%] space-y-6">
          <h2 className="text-3xl font-extrabold text-[#d4af37] mb-2">
            Explore Our Latest Blogs
          </h2>

          {isSuccess &&
            data?.allBlogs?.map((blog, index) => (
              <BlogCard key={index} data={blog} />
            ))}

          {/* Pagination */}
          <div className="flex items-center gap-3 mt-4">
            <button
              className="rounded-full bg-[#d4af37] text-black hover:bg-black hover:text-[#d4af37] transition-all p-2"
              onClick={handleDecrease}
            >
              <MdKeyboardArrowLeft size={24} />
            </button>
            <span className="font-semibold text-lg text-[#cccccc]">
              Page {data?.currentPage} of {data?.totalPages}
            </span>
            <button
              className="rounded-full bg-[#d4af37] text-black hover:bg-black hover:text-[#d4af37] transition-all p-2"
              onClick={handleIncrease}
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[35%] flex flex-col gap-8">
          {/* Recent Blogs */}
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md border border-[#2a2a2a]">
            <h3 className="text-2xl font-bold text-[#d4af37] border-b pb-2 mb-4">
              Recent Blogs
            </h3>
            {randomSuccess &&
              randomBlog?.blogs?.map((blog, index) => (
                <div className="flex items-start gap-4 mb-4" key={index}>
                  <img
                    src={blog?.image?.url}
                    alt={blog?.title}
                    className="w-20 h-20 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm text-[#888888]">12/2/2000</p>
                    <p className="font-semibold text-[#e6e6e6] text-base">
                      {blog?.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Call-to-Action */}
          <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-lg border border-[#2a2a2a]">
            <h4 className="font-bold text-2xl text-[#d4af37]">
              Have Any Questions?
            </h4>
            <p className="text-base text-[#cccccc]">
              Call us today. We’re here to help!
            </p>
            <p className="font-extrabold text-3xl text-white">
              +1 3993 39349 39
            </p>
            <a href="/contact">
              <button className="bg-[#d4af37] text-black font-medium py-2 px-4 rounded hover:bg-transparent hover:text-[#d4af37] border border-[#d4af37] transition-all mt-2">
                Make Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
