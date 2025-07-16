import React, { useEffect } from "react";
import "./about2.css";
import Counter from "../counter/Counter";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../animation/motion";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Structured Process",
    desc: "We follow a structured approach to ensure clarity and efficiency from concept to delivery.",
  },
  {
    icon: "ri-team-line",
    title: "Expert Team",
    desc: "Our experts bring diverse skills and a commitment to excellence in every project.",
  },
  {
    icon: "ri-time-line",
    title: "24/7 Support",
    desc: "We provide round-the-clock assistance to address any questions or concerns.",
  },
];

const storyPoints = [
  {
    year: "2023",
    text: "Infinity Studios was founded by Jane Doe and John Smith to revolutionize digital marketing.",
  },
  {
    year: "2024",
    text: "We launched our first major campaign, boosting client engagement by 200%.",
  },
  {
    year: "2025",
    text: "Expanded to a team of 20 specialized professionals across design and development.",
  },
];



const About2 = () => {
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header & Breadcrumb */}
      <header className="inf-about__header">
        <h2 className="inf-about__title">
          About <span className="inf-highlight">Us</span>
        </h2>
        <nav aria-label="breadcrumb" className="inf-breadcrumb">
          <Link to="/" className="inf-breadcrumb__link">
            Home
          </Link>
          <span className="inf-breadcrumb__sep">/</span>
          <span
            className="inf-breadcrumb__link inf-breadcrumb__link--current"
            aria-current="page"
          >
            About <span className="inf-highlight">Us</span>
          </span>
        </nav>
      </header>

      <section id="about-us" className="inf-about">
        {/* Mission & Vision */}
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="inf-container"
        >
          <div aria-label="Mission and Vision" className="inf-mission">
            <div className="inf-mission__bar" />
            <p className="inf-mission__text">
              At Infinity Studios, our mission is to empower brands with bold,
              creative strategies that drive tangible growth. We envision a
              future where every business, regardless of size, can harness
              innovative design and data-driven marketing to reach its full
              potential.
            </p>
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="inf-container"
        >
          <div aria-label="Company Story" className="inf-story">
            <h2 className="inf-story__heading">Our Story</h2>
            <div className="inf-story__timeline">
              {storyPoints.map((item, idx) => (
                <div key={idx} className="inf-story__point">
                  <span className="inf-story__year">{item.year}</span>
                  <p className="inf-story__text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="inf-container"
        >
          <div className="inf-values">
            <motion.h6
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="inf-values__subtitle"
            >
              Our Values
            </motion.h6>
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="inf-values__title"
            >
              Core Principles That Drive Us
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="inf-values__desc"
            >
              Transparency, innovation, and customer focus guide every decision
              we make, ensuring our solutions align with your vision.
            </motion.p>
            <div className="inf-values__list">
              {chooseData.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn("up", "tween", 0.2, 1)}
                  className="inf-value-item"
                >
                  <span className="inf-value-item__icon">
                    <i className={item.icon} aria-hidden="true" />
                  </span>
                  <div className="inf-value-item__content">
                    <h4 className="inf-value-item__title">{item.title}</h4>
                    <p className="inf-value-item__text">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Counters */}
        <Counter />

        {/* Team */}
        <Team />

        {/* Testimonials */}
        <Testimonial />

        {/* Call to Action */}
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="inf-container"
        >
          <div className="inf-cta">
            <h2 className="inf-cta__heading">Ready to get started?</h2>
            <p className="inf-cta__text">
              Reach out today for a free consultation and see how we can bring
              your vision to life.
            </p>
            <Link to="/contactus2" className="inf-cta__button">
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About2;
