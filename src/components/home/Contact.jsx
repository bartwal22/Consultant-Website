import React, { useState } from "react";
import { useContactMutation } from "../../store/Reducer/Contact";
import toast from "react-hot-toast";
import { Bounce } from "react-awesome-reveal";

export const Contact = () => {
  const [contact, isSuccess, isError, isLoading] = useContactMutation();

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
      // Reset form
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
    <section className="lg:h-screen w-full overflow-hidden flex flex-col md:flex-row lg:justify-between lg:px-10 lg:py-2 bg-white border-t-2 border-[var(--primary-color)]">
      <div className="lg:w-[40%] w-full lg:h-full md:rounded-2xl">
        <img
          src="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710156_1280.jpg"
          alt="demo image"
          className="h-full w-full object-cover md:rounded-2xl"
        />
      </div>

      <div className="lg:w-[50%] w-full mx-auto md:p-10 p-4   rounded-lg mr-auto">
        {/* <Bounce triggerOnce direction="center"> */}
        <h2 className="md:text-2xl text-xl font-bold text-gray-900 md:mb-4 mb-2">
          Book Appointment Now
        </h2>
        {/* </Bounce> */}
        <div className="border-b border-gray-300 mb-4"></div>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Mark"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Daniel"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium">Message*</label>
            <textarea
              rows="8"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="w-full flex justify-center text-center">
            <button  type="submit" className="bg-[var(--primary-color)] text-black md:py-4 py-3 rounded-lg font-bold flex items-center justify-center gap-2  cursor-pointer w-full text-center  hover:bg-[var(--secondary-color)] border border-[var(--primary-color)] hover:text-[var(--primary-color)]">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
