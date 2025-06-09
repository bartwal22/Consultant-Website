import React from "react";
import { useGetServiceQuery } from "../../store/Reducer/Service";
import { Fade } from "react-awesome-reveal";

export const ServicesSection = () => {
  const { data, isSuccess } = useGetServiceQuery();

  if (!isSuccess || !data?.data) return null;

  const firstTwo = data.data.slice(0, 2);
  const remaining = data.data.slice(2);

  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1604263710021-2ac5cd439907?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold text-[#FFD700]">Our Services</h2>
        <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">
          We offer a variety of specialized services designed to elevate your
          experience and meet your unique needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* First Two Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
          {firstTwo.map((service, i) => (
            <Fade triggerOnce key={i} delay={i * 100} origin="bottom">
              <div className="bg-white/5 backdrop-blur-lg border border-yellow-500 rounded-2xl overflow-hidden shadow-2xl transition hover:scale-[1.01]">
                <img
                  src={service.gallery?.url}
                  alt={service.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#FFD700] mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 text-center">
                    <a href="/contact">
                      <button className="bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition">
                        Book Appointment
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Remaining Services in Column */}
        {remaining.length > 0 && (
          <div className="mt-12 flex flex-col gap-10">
            {remaining.map((service, i) => (
              <Fade triggerOnce key={i} delay={i * 100} origin="bottom">
                <div className="bg-white/5 backdrop-blur-lg border border-yellow-500 rounded-2xl overflow-hidden shadow-xl transition hover:scale-[1.01]">
                  <img
                    src={service.gallery?.url}
                    alt={service.title}
                    className="w-full h-48 md:h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#FFD700] mb-2 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-center">
                      {service.description}
                    </p>
                    <div className="mt-4 text-center">
                      <a href="/contact">
                        <button className="bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition">
                          Book Appointment
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
