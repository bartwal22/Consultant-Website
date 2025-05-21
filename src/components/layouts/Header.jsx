import React, { useState, useEffect } from "react";
import { Bounce, Slide } from "react-awesome-reveal";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { IoMail, IoLocationOutline } from "react-icons/io5";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#fffefe]  z-50 transition-all duration-300 ${
        scrolled ? "p-0" : "lg:pt-4"
      }`}
    >
      {/* Top Info Bar */}
      <div
        className={`hidden  items-center justify-between px-8 py-3 border-b border-gray-200 transition-all duration-300 overflow-hidden ${
          scrolled ? "hidden" : "lg:flex"
        }`}
      >
        {/* <Slide triggerOnce direction="top"> */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/icon/icon.jpg"
              alt="Company Logo"
              className="h-10 w-10 object-cover"
            />
            <span className="text-2xl font-bold text-gray-900">
              A2Y Consultants
            </span>
          </a>
        {/* </Slide> */}
        <div className="flex space-x-8">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-[#0d0c0d] p-2">
              <IoMail className="text-[#f5f6f0]" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">SEND US A MESSAGE</p>
              <p className="text-md font-semibold text-gray-900">
                solution@moveexa.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-[#0d0c0d] p-2">
              <IoLocationOutline className="text-[#f5f6f0]" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">ADDRESS HERE</p>
              <p className="text-md font-semibold text-gray-900">
                452 Marie Avenue, 166HK
              </p>
            </div>
          </div>
        </div>
        {/* <Bounce triggerOnce> */}
          <button className="hidden lg:flex items-center justify-center gap-2 bg-[#ffcc3fcc] text-[#0d0c0d] font-semibold rounded-lg px-6 py-2.5 hover:bg-[var(--secondary-color)] hover:text-[#f5f6f0] ease-in-out cursor-pointer transition-all ">
            Get A Quote <FaArrowRight />
          </button>
        {/* </Bounce> */}
      </div>

      {/* Navigation Bar */}
      <div className=" flex items-center justify-between px-10 py-2  bg-[#f5f6f0] ">
        <a
          href="/"
          className="text-[#0d0c0d] text-xl font-semibold hidden lg:block hover:text-[var(--primary-color)]"
        >
          {/* <Slide triggerOnce direction="left"> */}
            Home
          {/* </Slide> */}
        </a>
        <a href="/">
          <img
            src="/icon/icon.jpg"
            alt="Company Logo"
            className="h-10 w-10 object-cover block lg:hidden"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 ">
          {[
            "Blog",
            "Service",
            "Team",
            "About",
            "Gallery",
            "Industry",
            "Project",
            "Case Study",
          ].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="  transition-all text-lg font-medium text-[#0d0c0d] hover:text-[var(--primary-color)]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* <Slide triggerOnce direction="right"> */}
          <a
            href="/contact"
            className="hidden md:block text-white transition-all text-lg font-medium hover:text-[#0d0c0d]  px-4 py-1 bg-black hover:bg-[#ffcc3f] rounded-lg"
          >
            Contact
          </a>
        {/* </Slide> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        } bg-white shadow-md absolute top-full left-0 w-full p-4`}
      >
        {[
          "Home",
          "Blog",
          "Service",
          "Team",
          "About",
          "Gallery",
          "Industry",
          "Case Study",
          "Contact",
        ].map((item) => (
          <a
            key={item}
            href={
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
            }
            className="block text-gray-700 py-2 text-center hover:text-blue-600 transition-all"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};
