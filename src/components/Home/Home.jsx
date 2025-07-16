import React from "react";
import { useEffect, useState } from "react";
import NewsLetter from "./Newsletter/NewsLetter";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import About from "./about/About";
import Counter from "./counter/Counter";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Contactus from "./Contactus/Contactus";

const Home = () => {
  const [theme] = useState("");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero theme={theme} />
      <Services />
      <About />
      <Counter />
      <Team />
      <Testimonial />
      <Contactus />
      <NewsLetter />
    </>
  );
};

export default Home;
