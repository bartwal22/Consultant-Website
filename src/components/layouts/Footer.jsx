import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSubscriptionMutation } from "../../store/Reducer/Service";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [subscription] = useSubscriptionMutation();
  const [email, setEmail] = useState("");

  const handelChange = (e) => {
    setEmail(e.target.value);
  };

  const submit = async () => {
    try {
      await subscription(email);
      toast.success("Subscribed Successfully");
      setEmail("");
    } catch (error) {
      console.log("error:", error);
      toast.error("Subscription failed.");
    }
  };

  return (
    <footer className="text-white lg:py-10 lg:px-6 bg-black border-t-4 border-[#d4af37]">
      <div
        className="bg-black lg:h-[50vh] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-10 lg:rounded-[2rem] relative
                   shadow-[0_0_20px_#d4af37]"
      >
        {/* About Company */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-[#d4af37]">
            About Company
          </h2>
          <hr className="w-12 border-t-2 border-[#d4af37] mb-3" />
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
                className="bg-[#d4af37] text-black p-2 rounded transition-colors cursor-pointer
                           hover:bg-transparent hover:text-[#d4af37] border-2 border-[#d4af37]"
                aria-label="social-link"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-[#d4af37]">Quick Links</h2>
          <hr className="w-12 border-t-2 border-[#d4af37] mb-3" />
          <ul className="space-y-2 text-gray-300">
            {["About", "Project", "Team", "Gallery", "Blog", "Contact Us"].map(
              (link, index) => (
                <a key={index} href={`/${link.toLowerCase()}`}>
                  <li className="text-sm cursor-pointer hover:text-[#d4af37] w-fit transition-colors duration-300">
                    → {link}
                  </li>
                </a>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-[#d4af37]">Services</h2>
          <hr className="w-12 border-t-2 border-[#d4af37] mb-3" />
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
                className="text-sm cursor-pointer hover:text-[#d4af37] w-fit transition-colors duration-300"
              >
                → {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-[#d4af37]">
            Get In Touch
          </h2>
          <hr className="w-12 border-t-2 border-[#d4af37] mb-3" />
          <p className="text-gray-300 text-sm mb-4">
            Curabitur aliquet quam posuere blandit ellentesque insd orci ipsum
            id orci porta dapibus...
          </p>

          {/* Subscribe Input */}
          <div className="flex flex-col bg-[#111111] p-2 rounded w-full relative border border-[#d4af37]">
            <div className="flex items-center mb-2">
              <span className="text-[#d4af37] text-lg mx-2">📧</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent text-sm flex-1 outline-none text-white placeholder-[#d4af37] px-2 py-1"
                onChange={handelChange}
                value={email}
              />
            </div>
            <button
              onClick={submit}
              className="bg-[#d4af37] text-black font-bold px-4 py-1 rounded cursor-pointer
               hover:bg-transparent hover:text-[#d4af37] border-2 border-[#d4af37] transition-colors duration-300 w-full"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="absolute hidden md:block h-[0.05rem] w-[95%] bg-[#d4af37] right-[3%] bottom-[13%] rounded"></div>

        {/* Footer Bottom */}
        <div className="absolute bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 lg:text-sm text-[0.6rem] w-full text-center">
          © 2024 Copyrights by Movvexa. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
