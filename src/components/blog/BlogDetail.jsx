import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaUser, FaEnvelope, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useContactMutation } from "../../store/Reducer/Contact";
import {
  useGetRandomBlogQuery,
  useGetSingleBlogQuery,
} from "../../store/Reducer/Blog";
import toast from "react-hot-toast";

export const BlogDetail = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [contact, { isSuccess, isError }] = useContactMutation();
  const { data: singleBlog } = useGetSingleBlogQuery(id, { skip: !id });

  const data = singleBlog?.blog;

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message sent!");
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
    } else if (isError) toast.error("Something went wrong!");
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      comment: formData.message,
      id,
      serviceType: "blog",
    };
    try {
      await contact(payload).unwrap();
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 md:px-10 py-8 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-[#f5b10010] pointer-events-none z-0" />
      <div className="absolute -top-40 right-[-120px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(245,177,0,0.2),transparent)] blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(245,177,0.15),transparent)] blur-3xl rounded-full z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8">
        {/* Left Main Content */}
        <div className="lg:w-[65%] space-y-6">
          {/* Blog Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={data?.image?.url}
              alt={data?.title}
              className="w-full h-72 object-cover"
            />
            <p className="text-sm text-gray-400 px-4 py-2 bg-black">
              Published on: 15/02/2023
            </p>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              {data?.title}
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              {data?.description}
            </p>
          </div>

          {/* Quote */}
          <div className="flex bg-gradient-to-br from-[#f5b10020] to-transparent rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[var(--secondary-color)] p-6 flex items-center">
              <FaQuoteLeft className="text-3xl text-white" />
            </div>
            <div className="bg-[#ffffff10] p-6 flex-1">
              <p className="text-white text-lg font-medium italic">
                {data?.blogMessage}
              </p>
            </div>
          </div>

          {/* Supporting Images */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <img
              src="https://images.unsplash.com/photo-1616587659117-e60354acfd90?q=80&w=2070"
              className="w-full md:w-1/2 h-60 object-cover rounded-xl shadow"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1582787264401-9be4ca537f4f?q=80&w=2070"
              className="w-full md:w-1/2 h-60 object-cover rounded-xl shadow"
              alt=""
            />
          </div>

          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            rerum porro at aliquid.
          </p>

          {/* Contact Form */}
          <div className="bg-black bg-opacity-60 rounded-xl p-6 space-y-4 shadow-lg mt-6 border border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-400">
              Leave a Reply
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute top-3 left-3 text-yellow-400" />
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="pl-10 py-3 w-full rounded bg-gray-900 text-yellow-300 focus:ring-2 ring-yellow-400 outline-none placeholder-yellow-500"
                  />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-yellow-400" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="pl-10 py-3 w-full rounded bg-gray-900 text-yellow-300 focus:ring-2 ring-yellow-400 outline-none placeholder-yellow-500"
                  />
                </div>
              </div>
              <div className="relative">
                <FaComments className="absolute top-3 left-3 text-yellow-400" />
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="pl-10 py-3 w-full rounded bg-gray-900 text-yellow-300 focus:ring-2 ring-yellow-400 outline-none placeholder-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 border border-transparent text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[35%] flex flex-col gap-6">
          {/* Recent Blog */}
          <div className="bg-[#ffffff10] rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1647086981666-c736e3c44914?q=80&w=1976"
                className="w-20 h-20 rounded object-cover"
                alt=""
              />
              <div className="space-y-1">
                <p className="text-sm text-yellow-300">12/03/2023</p>
                <p className="font-medium text-white">
                  Financial Health in Business
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[var(--secondary-color)] text-white p-6 rounded-xl text-center shadow-lg space-y-3">
            <h4 className="text-xl font-bold text-[var(--DarkYellow-color)]">
              Need Assistance?
            </h4>
            <p className="text-md">Call us now to discuss your next project.</p>
            <p className="text-2xl font-bold">+1 3993 39349 39</p>
            <a href="/contact">
              <button className="mt-2 bg-[var(--primary-color)] hover:bg-transparent text-black hover:text-[var(--primary-color)] border hover:border-[var(--primary-color)] font-semibold py-2 px-4 rounded transition-all duration-300">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
