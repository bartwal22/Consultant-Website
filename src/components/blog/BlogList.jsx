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
  const { data, isLoading, isError, isSuccess } = useGetBlogQuery({
    page: page,
    limit: 10,
  });

  const {
    data: randomBlog,
    isLoading: randomLoading,
    isError: randomError,
    isSuccess: randomSuccess,
  } = useGetRandomBlogQuery();

  console.log("random blog,", randomBlog);

  console.log("data of blog::::::::::", data);
  const handleIncrease = () => {
    if (data?.totalPages < 2) setPage(page + 1);
  };

  const handleDecrease = () => {
    if (data?.currentPage > 1) setPage(page - 1);
  };

  return (
    <section className="h-full w-full overflow-hidden relative lg:px-14 lg:py-6 py-2 px-4 flex flex-col md:flex-row">
      <div className="lg:w-[65%] lg:px-10">
        {isSuccess &&
          data?.allBlogs &&
          data?.allBlogs?.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        <div className="flex justify-start items-center md:gap-4 gap-2 md:mt-0 mt-2">
          <div
            className="cursor-pointer rounded  lg:h-[2.5rem] h-[2rem] w-[2rem] lg:w-[2.5rem] bg-[var(--primary-color)] flex justify-center items-center hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            onClick={handleDecrease}
          >
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div className="rounded  lg:h-[2.5rem] lg:w-[2.5rem]  h-[2rem] w-[2rem] border border-[var(--tertiary-color)] flex justify-center items-center">
            <p className="font-semibold">{data?.currentPage}</p>
          </div>
          <div className=" rounded  lg:h-[2.5rem] lg:w-[2.5rem]  h-[2rem] w-[2rem] border-[var(--tertiary-color)]  flex justify-center items-center">
            <p className="font-semibold">{data?.totalPages}</p>
          </div>
          <div
            className="cursor-pointer rounded  lg:h-[2.5rem] lg:w-[2.5rem]  h-[2rem] w-[2rem] bg-[var(--primary-color)] flex justify-center items-center hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            onClick={handleIncrease}
          >
            <MdOutlineKeyboardArrowRight size={24} />
          </div>
        </div>
      </div>

      <div className="lg:w-[35%] md:mt-0 mt-4">
        <div className="flex flex-col gap-4">
          <div className="border-b-1 border-gray-300 lg:pb-4 ">
            <h1 className="font-bold lg:text-2xl text-xl">Recent Blogs</h1>
          </div>
{randomBlog?.blogs?.map((blog, index) => (
   <div className="flex md:items-center flex-row md:gap-4 gap-2 mb-2 lg:mb-4" key={index}>
   <div className="lg:h-[5rem] lg:w-[5rem] h-[5rem] w-[5rem] rounded">
     <img
       src={blog?.image?.url}
       alt=""
       className="h-full w-full object-cover rounded"
     />
   </div>
   <div>
     <p className="font-semibold text-lg text-slate-500">12/2/2000</p>
     <p className="font-semibold lg:text-xl text-lg text-black">
      {blog?.title}
     </p>
   </div>
 </div>
))}
         
        </div>

        <div className="flex flex-col md:gap-4 gap-1 w-full lg:rounded-[1rem] bg-[var(--secondary-color)] lg:py-10 lg:px-14 px-4 py-4">
          <h4 className="font-bold lg:text-3xl text-xl text-[var(--primary-color)]">
            Have Any Questions? Call us Today!
          </h4>
          <p className="font-semibold lg:text-lg text-lg text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="font-bold lg:text-3xl text-xl text-white">
            +1 3993 39349 39
          </p>
          <a href="/contact">
            <button className="bg-[var(--primary-color)] text-black font-medium lg:py-3 py-2 lg:px-4 px-2 rounded-[0.5rem] cursor-pointer hover:bg-transparent border hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]">
              Make Appointment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
