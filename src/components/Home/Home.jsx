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
import Serv from "./serv/Serv";
import Innov from "./innov/Innov";
import Refer from "./Refer/Refer";
import Solution from "./solution/Solution";

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
      <Serv />
      <Counter />
      <About />
      <Innov />
      <Refer />
      <Solution />
       {/*<Services /> */}
      <Team />
      <Testimonial />
      <Contactus />
      <NewsLetter />
    </>
  );
};

export default Home;
