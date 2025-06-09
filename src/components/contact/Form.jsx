import React, { useState } from "react";
import { useContactMutation } from "../../store/Reducer/Contact";
import { toast } from "react-toastify";

export const Form = () => {
  const [contact, { isSuccess, isError, isLoading }] = useContactMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contact(formData).unwrap();
      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        comment: "",
        serviceType: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="min-h-screen w-full bg-[#1a1a1a] px-4 py-10 lg:px-20 text-gray-200">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#d4af37] font-semibold text-sm sm:text-base uppercase">
            Get in Touch
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mt-2">
            Need Help? Let’s Get in Touch
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded-lg bg-[#2a2a2a] text-gray-200 placeholder:text-gray-500 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-lg bg-[#2a2a2a] text-gray-200 placeholder:text-gray-500 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-gray-200 placeholder:text-gray-500 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="technology">Technology</option>
          </select>

          <textarea
            name="comment"
            rows={6}
            placeholder="Your Message"
            className="px-4 py-3 rounded-lg bg-[#2a2a2a] text-gray-200 placeholder:text-gray-500 border border-[#d4af37]/30 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={formData.comment}
            onChange={handleChange}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#d4af37] text-black px-10 py-3 rounded-lg font-semibold hover:bg-[#caa735] transition disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
