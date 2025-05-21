import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSubscriptionMutation } from "../../store/Reducer/Service";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [subscription, { isError, isSuccess, isLoading }] =
    useSubscriptionMutation();
  const [email, setEmail] = useState("");

  const handelChange = (e) => {
    setEmail(e.target.value);
  };

  const submit = async () => {
    try {
      await subscription(email);
      toast.success("Subscribed Successfully");
      setEmail("")
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <footer className="text-white lg:py-10 lg:px-6">
      <div className="bg-[var(--secondary-color)] lg:h-[50vh] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-10 lg:rounded-[2rem] relative">
        {/* About Company */}
        <div>
          <h2 className="text-xl font-bold mb-3">About Company</h2>
          <hr className="w-12 border-t-2 border-white mb-3" />
          <p className="text-gray-300 text-sm">
            Venenatis egestas fames cum erat duis cubilia sagittis vivamus
            ultrices magnis proin inceptos
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaXTwitter />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-gray-700 p-2 rounded transition-all cursor-pointer hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <hr className="w-12 border-t-2 border-white mb-3" />
          <ul className="space-y-2 text-gray-300">
            {["About", "Project", "Team", "Gallery", "Blog", "Contact Us"].map(
              (link, index) => (
                <a href={`/${link.toLocaleLowerCase()}`}>
                  <li
                    key={index}
                    className="text-sm cursor-pointer hover:text-[var(--DarkYellow-color)] w-fit"
                  >
                    → {link}
                  </li>
                </a>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-3">Services</h2>
          <hr className="w-12 border-t-2 border-white mb-3" />
          <ul className="space-y-2 text-gray-300">
            {[
              "Cyber Security",
              "IT Management",
              "QA & Testing",
              "Infrastructure Plan",
              "IT Consultant",
            ].map((service, index) => (
              <li
                key={index}
                className="text-sm cursor-pointer hover:text-[var(--DarkYellow-color)] w-fit"
              >
                → {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="text-xl font-bold mb-3">Get In Touch</h2>
          <hr className="w-12 border-t-2 border-white mb-3" />
          <p className="text-gray-300 text-sm mb-4">
            Curabitur aliquet quam posuere blandit ellentesque insd orci ipsum
            id orci porta dapibus...
          </p>

          {/* Subscribe Input */}
          <div className="flex flex-row  items-center bg-gray-700 p-2 rounded w-full relative">
            <span className="text-white text-lg mx-2">📧</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent text-sm flex-1 outline-none text-white placeholder-gray-300 w-full sm:w-auto px-2 py-1"
              onChange={handelChange}
            />
            <button
              onClick={submit}
              className="bg-white text-gray-900 font-bold px-4 py-1 rounded cursor-pointer hover:bg-[var(--primary-color)] mt-2 sm:mt-0"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="absolute hidden md:block h-[0.05rem] w-[95%] bg-white right-[3%] bottom-[13%] rounded"></div>

        {/* Footer Bottom */}
        <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 lg:text-sm text-[0.6rem] w-full text-center">
          © 2024 Copyrights by Movvexa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
