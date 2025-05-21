import React, { useState } from "react";
import { useContactMutation } from "../../store/Reducer/Contact";

export const Form = () => {
  const [contact, isSuccess, isError, isLoading] = useContactMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
    serviceType: "",
  });

  console.log("form data:::", formData);

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
      const response = await contact(formData).unwrap();
      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", comment: "", serviceType: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="lg:h-screen w-full overflow-hidden px-4 md:pt-22 py-6 lg:px-16">
      <div className="w-full relative h-auto flex flex-col justify-center gap-6 lg:px-24">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <p className="text-black font-semibold text-sm sm:text-lg uppercase">
            get in touch
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
            Needs Help? Let’s Get in Touch
          </h1>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Name & Email Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              className="w-full sm:w-1/2 px-4 py-3 sm:py-4 border border-gray-300 rounded-lg text-black placeholder:text-slate-400"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              name="fullName"
              required
            />
            <input
              type="text"
              className="w-full sm:w-1/2 px-4 py-3 sm:py-4 border border-gray-300 rounded-lg text-black placeholder:text-slate-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>

          {/* Select Dropdown */}
          <select
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 text-black rounded-lg placeholder:text-slate-400"
            value={formData.serviceType}
            onChange={handleChange}
            required
            name="serviceType"
          >
            <option value="" className="text-slate-400">
              Select
            </option>
            <option value="business">Business</option>
            <option value="marketing">Marketing</option>
            <option value="technology">Technology</option>
          </select>

          {/* Textarea */}
          <textarea
            rows={6}
            className="w-full px-4 py-3 sm:py-4 border border-gray-300 text-black rounded-lg placeholder:text-slate-400"
            placeholder="Your Message"
            value={formData.comment}
            onChange={handleChange}
            required
            name="comment"
          ></textarea>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-black px-10 sm:px-14 py-3 rounded-lg cursor-pointer hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
