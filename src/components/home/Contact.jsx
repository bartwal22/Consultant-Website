import React, { useState } from "react";
import { useContactMutation } from "../../store/Reducer/Contact";
import toast from "react-hot-toast";

export const Contact = () => {
  const [contact] = useContactMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;
    const payload = {
      fullName,
      email: formData.email,
      comment: formData.message,
      phoneNumber: formData.phoneNumber,
    };

    try {
      const data = await contact(payload).unwrap();
      console.log("Success:", data);
      toast.success("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed.");
    }
  };

  return (
    <section
      className="lg:h-screen w-full flex flex-col md:flex-row lg:justify-between lg:px-12 lg:py-12
                 bg-gradient-to-br from-black via-[#bfa838cc] to-[#1a1a1a]
                 border-t-2 border-[#d4af37] overflow-hidden"
    >
      {/* Left Image */}
      <div className="lg:w-[40%] w-full lg:h-full md:rounded-2xl overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710156_1280.jpg"
          alt="demo image"
          className="h-full w-full object-cover md:rounded-2xl"
        />
      </div>

      {/* Form Container */}
      <div
        className="lg:w-[55%] w-full mx-auto p-10 rounded-3xl bg-black bg-opacity-80
                   shadow-lg shadow-[#d4af37cc] text-white mt-8 md:mt-0
                   max-h-[90vh] overflow-auto"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-[#d4af37] mb-6 text-center md:text-left">
          Book Appointment Now
        </h2>
        <div className="border-b border-[#d4af37] mb-6"></div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#d4af37] font-semibold mb-1">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Mark"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-4 bg-transparent border border-[#d4af37] rounded-2xl
                           text-white placeholder-[#bfa838cc]
                           shadow-inner shadow-[#bfa83866]
                           focus:outline-none focus:ring-4 focus:ring-[#d4af37cc]
                           transition-all duration-300 hover:border-[#f1c40f]"
              />
            </div>

            <div>
              <label className="block text-[#d4af37] font-semibold mb-1">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Daniel"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-4 bg-transparent border border-[#d4af37] rounded-2xl
                           text-white placeholder-[#bfa838cc]
                           shadow-inner shadow-[#bfa83866]
                           focus:outline-none focus:ring-4 focus:ring-[#d4af37cc]
                           transition-all duration-300 hover:border-[#f1c40f]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#d4af37] font-semibold mb-1">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-[#d4af37] rounded-2xl
                         text-white placeholder-[#bfa838cc]
                         shadow-inner shadow-[#bfa83866]
                         focus:outline-none focus:ring-4 focus:ring-[#d4af37cc]
                         transition-all duration-300 hover:border-[#f1c40f]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[#d4af37] font-semibold mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-[#d4af37] rounded-2xl
                         text-white placeholder-[#bfa838cc]
                         shadow-inner shadow-[#bfa83866]
                         focus:outline-none focus:ring-4 focus:ring-[#d4af37cc]
                         transition-all duration-300 hover:border-[#f1c40f]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#d4af37] font-semibold mb-1">
              Message*
            </label>
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              required
              className="w-full p-4 bg-transparent border border-[#d4af37] rounded-2xl
                         text-white placeholder-[#bfa838cc]
                         shadow-inner shadow-[#bfa83866]
                         focus:outline-none focus:ring-4 focus:ring-[#d4af37cc]
                         transition-all duration-300 hover:border-[#f1c40f]
                         resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="bg-[#d4af37] text-black font-bold py-4 rounded-3xl
                         w-full max-w-md
                         hover:bg-[#b5962a] transition-colors duration-300
                         border-2 border-[#d4af37] hover:border-[#b5962a]"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
