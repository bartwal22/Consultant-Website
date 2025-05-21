import React from "react";
import { Hero } from "../components/home/Hero";
import { Feature } from "../components/home/Feature";
import { Consultancy } from "../components/home/Consultancy";
import { Services } from "../components/home/Services";
import { Trust } from "../components/home/Trust";
import { Project } from "../components/home/Project";
import { Ourpage } from "../components/home/Ourpage";
import { Appointment } from "../components/home/Appointment";
import { Growth } from "../components/home/Growth";
import { Team } from "../components/home/Team";
import { Testimonial } from "../components/home/Testimonial";
import { Blog } from "../components/home/Blog";
import { Contact } from "../components/home/Contact";
import { useIncrementViewersMutation } from "../store/Reducer/Service";

export const Home = () => {
  const [incrementViewers] = useIncrementViewersMutation();

  React.useEffect(() => {
    incrementViewers();
  }, []);
  return (
    <main>
      <Hero />
      <Feature />
      <Consultancy />
      <Services />
      <Trust />
      <Project />
      <Ourpage />
      <Appointment />
      <Growth />
      <Team />
      <Testimonial />
      <Blog />
      <Contact />
    </main>
  );
};
