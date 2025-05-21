import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiRoadMapFill } from "react-icons/ri";

export const Map = () => {
  return (
    <section className="lg:h-screen h-full w-full overflow-hidden relative">
      {/* Google Map */}
      <div className="md:h-[50vh] h-[70vh] lg:h-full w-full">
        <iframe
          title="Google Map"
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509482!2d144.9537353153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df9b1a749%3A0x5045675218ce840!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1633367628344!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info Card */}
      <div className="bg-white w-[70%] sm:w-[60%] lg:w-[26%] h-auto lg:h-[72vh] absolute left-[5%] sm:left-[10%] lg:left-[10%] top-[15%] lg:top-[16%] shadow-lg rounded-lg overflow-hidden">
        
        {/* Image Section */}
        <div className="bg-blue-200 w-full h-[15vh] lg:h-[40%]">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/19/15/37/call-center-8643475_1280.jpg"
            alt="Contact"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Contact Details */}
        <div className="py-6 px-6 lg:py-8 lg:px-10">
          {/* Call Section */}
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <div className="bg-[var(--secondary-color)] flex justify-center items-center rounded-full md:h-12 md:w-12 w-10 h-10">
              <FaPhone className="text-[var(--primary-color)] md:text-xl text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[var(--primary-color)] text-sm sm:text-base lg:text-lg uppercase font-normal">
                Call us 24/7
              </p>
              <h2 className="text-[var(--secondary-color)] text-base sm:text-xl lg:text-2xl font-normal">
                +61 3 8376 6284
              </h2>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-4 mb-4 lg:mb-6">
            <div className="bg-[var(--secondary-color)] flex justify-center items-center rounded-full md:h-12  h-10 md:w-12 w-10">
              <IoMail className="text-[var(--primary-color)] md:text-xl text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[var(--primary-color)] text-sm sm:text-base lg:text-lg uppercase font-normal">
                Make a Quote
              </p>
              <h2 className="text-[var(--secondary-color)] text-base sm:text-xl lg:text-2xl font-normal">
                info@help-moveexa.com
              </h2>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-center gap-4">
            <div className="bg-[var(--secondary-color)] flex justify-center items-center rounded-full md:h-12 h-10 md:w-12 w-10">
              <RiRoadMapFill className="text-[var(--primary-color)] md:text-xl text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[var(--primary-color)] text-sm sm:text-base lg:text-lg uppercase font-normal">
                Service Station
              </p>
              <h2 className="text-[var(--secondary-color)] text-base sm:text-xl lg:text-2xl font-normal">
                25 Hilton Street, Aus.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
