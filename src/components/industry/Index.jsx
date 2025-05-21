import React from "react";
import { IndustryCard } from "./IndustryCard";
import { useGetIndustryQuery } from "../../store/Reducer/Industry";
import { Fade } from "react-awesome-reveal";

export const Index = () => {
  const { data, isLoading, isError, isSuccess } = useGetIndustryQuery();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-10 px-4 gap-4 py-4 lg:py-8">
      {isSuccess &&
        data &&
        data?.data?.map((item, index) => (
          <Fade triggerOnce origin="center" delay={index * 100}>
            <IndustryCard key={index} data={item} />
          </Fade>
        ))}
    </section>
  );
};
