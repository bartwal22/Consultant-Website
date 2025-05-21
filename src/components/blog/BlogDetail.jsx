import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";
import { useGetRandomBlogQuery, useGetSingleBlogQuery } from "../../store/Reducer/Blog";
import { useLocation } from "react-router-dom";
import { useContactMutation } from "../../store/Reducer/Contact";
import toast from "react-hot-toast";

export const BlogDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [
    contact,
    { isSuccess, isError: contactError, isLoading: contactLoading },
  ] = useContactMutation();
   const {
      data: randomBlog,
      isLoading: randomLoading,
      isError: randomError,
      isSuccess: randomSuccess,
    } = useGetRandomBlogQuery();
console.log("random blogs", randomBlog);
  const {
    data: singleBlog,
    isLoading,
    isError,
  } = useGetSingleBlogQuery(id, {
    skip: !id, // skip the query if id is null
  });

  const data = singleBlog?.blog;
  console.log("single blog", data);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      comment: formData.message,
      phoneNumber: formData.phoneNumber,
      id: data?._id,
      serviceType: "blog"
    };

    try {
      const data = await contact(payload).unwrap();
     
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        id: ""
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        id: ""
      });
    }else if(contactError){
      toast.error("Submission failed.");
    }
  }, [isSuccess]);

  return (
    <section className="overflow-hidden w-full h-full lg:px-14 px-4 py-3 lg:py-6 flex flex-col md:flex-row">
      <div className="lg:w-[65%] h-full lg:px-10">
        <div className="lg:min-h-[35rem] lg:h-full w-full rounded lg:mb-6">
          <div className="relative rounded w-full lg:h-[25rem]">
            <div className="rounded h-full w-full">
              <img
                src={data?.image?.url}
                alt={data?.title}
                className="h-full w-full object-cover rounded"
              />
            </div>
            <div className="absolute bottom-0  bg-black w-full">
              <div>
                <p className="font-medium text-white lg:px-4 px-2 text-lg">
                  15/02/2023
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:gap-4  lg:mt-6 mt-2">
            <h2 className="lg:text-3xl text-xl font-bold text-black">
              {data?.title}
            </h2>
            <p className="text-gray-600 lg:text-[1.1rem] text-[0.9rem] font-medium">
              {data?.description}
            </p>
          </div>
        </div>

        <div className="flex w-full shadow-lg rounded-lg overflow-hidden md:mt-0 mt-3">
          {/* Left Section */}
          <div className="bg-[var(--secondary-color)] text-white p-6 flex items-center">
            <FaQuoteLeft className="md:text-4xl text-2xl" />
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 md:p-6 p-4 flex-1">
            <p className="text-gray-800 font-semibold md:text-lg text-sm">
              {data?.blogMessage}
            </p>
            {/* <p className="text-[var(--primary-color)] font-bold md;mt-2">
              — Monalisa Saisha
            </p> */}
          </div>
        </div>

        <div className="w-full h-auto flex flex-col md:gap-4 gap-2 lg:mt-6 mt-4">
          <div className="flex lg:gap-4 flex-col md:flex-row gap-2">
            <div className="lg:h-30rem lg:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2025/03/17/10/14/penguin-9475470_1280.jpg"
                alt=""
                className="h-full w-full object-cover rounded-[1rem]"
              />
            </div>

            <div className="lg:h-30rem lg:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2025/03/17/10/14/penguin-9475470_1280.jpg"
                alt=""
                className="h-full w-full object-cover rounded-[1rem]"
              />
            </div>
          </div>

          <div>
            <p className="text-gray-600 md:text-lg text-sm font-normal">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              temporibus dolor maxime culpa iusto corrupti veniam tempore
              deleniti doloremque aut.
            </p>
          </div>
        </div>

        <div className="w-full mx-auto lg:mt-6 mt-2 rounded-lg">
          <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-4">
            Leave a Reply
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--DarkYellow-color)]"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--DarkYellow-color)]"
                />
              </div>
            </div>

            {/* Select Topic */}
            {/* <select className="w-full px-4 py-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--DarkYellow-color)]">
              <option>Select Topic</option>
              <option>General Inquiry</option>
              <option>Feedback</option>
              <option>Support</option>
            </select> */}

            {/* Message Field */}
            <div className="relative">
              <FaComments className="absolute left-3 top-3 text-gray-400" />
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--DarkYellow-color)]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-[var(--primary-color)] text-black font-semibold py-2 md:pyu-3  text-lg rounded-md hover:bg-[var(--secondary-color)] transition cursor-pointer hover:text-[var(--primary-color)]"
              type="submit"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>

      <div className="lg:w-[35%] md:mt-0 mt-4">
        <div className="flex flex-col gap-4">
          <div className="border-b-1 border-gray-300 lg:pb-4 ">
            <h1 className="font-bold lg:text-2xl text-xl">Recent Blogs</h1>
          </div>

          <div className="flex md:items-center flex-col md:flex-row md:gap-4 gap-2 lg:mb-4">
            <div className="lg:h-[5rem] lg:w-[5rem] rounded">
              <img
                src="https://cdn.pixabay.com/photo/2025/01/09/13/56/cat-9321685_1280.jpg"
                alt=""
                className="h-full w-full object-cover rounded"
              />
            </div>
            <div>
              <p className="font-semibold lg:text-lg text-lg text-slate-500">
                12/3/2023
              </p>
              <p className="font-semibold lg:text-xl text-lg text-black">
                Financial health Every Business...
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-4 gap-1 w-full lg:rounded-[1rem] bg-[var(--secondary-color)] lg:py-10 lg:px-14 px-4 py-4">
          <h4 className="font-bold lg:text-3xl text-lg text-[var(--DarkYellow-color)]">
            Have Any Questions? Call us Today!
          </h4>
          <p className="font-semibold text-lg text-white">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="font-bold lg:text-3xl text-xl text-white">
            +1 3993 39349 39
          </p>
          <a href="/contact">
            <button className="bg-[var(--primary-color)] text-black font-medium text-lg lg:py-3 lg:px-4 py-2 px-2 rounded cursor-pointer hover:bg-transparent border hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]">
              Make Appointment
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
