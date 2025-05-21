import React from "react";
import { ServicesCard } from "./ServicesCard";
import { useGetServiceQuery } from "../../store/Reducer/Service";
import { Fade } from "react-awesome-reveal";


export const ServicesSection = () => {
  const { data, isLoading, isError, isSuccess } = useGetServiceQuery();
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {isSuccess && data?.data && data?.data?.map((service, index) => (
          <Fade triggerOnce key={index} delay={index * 100} origin="center">


          <ServicesCard  data={service} />
        </Fade>
        ))}
      </div>
    </section>
  );
};
