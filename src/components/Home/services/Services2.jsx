import React, { useEffect } from "react";
import "./services2.css";
import { Link } from "react-router-dom";
import Testimonial from "../Testimonial/Testimonial";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
} from "../../../animation/motion";

const processSteps = [
  {
    icon: "ri-lightbulb-line",
    title: "Strategy",
    desc: "We audit your needs and craft a tailored plan.",
  },
  {
    icon: "ri-pencil-ruler-2-line",
    title: "Design",
    desc: "Our designers bring concepts to life in high‑fidelity mockups.",
  },
  {
    icon: "ri-code-line",
    title: "Development",
    desc: "We build pixel‑perfect, performant websites & apps.",
  },
  {
    icon: "ri-rocket-fill",
    title: "Launch & Iterate",
    desc: "We deploy, monitor, and continuously optimize.",
  },
];

const featureData = [
  {
    id: 1,
    title: "Infographic Design",
    variant: "feature--graphic",
    light: true,
    desc: "Turn complex data into stunning visuals that educate and engage your audience at a glance.",
  },
  {
    id: 2,
    title: "Print on Any Media",
    variant: "feature--print",
    desc: "From banners and brochures to custom merchandise, we handle every print format with precision.",
  },
  {
    id: 3,
    title: "Modern Silk‑Screen",
    variant: "feature--screen",
    desc: "Premium silk‑screen printing for apparel and promotional items that leave a lasting impression.",
  },
  {
    id: 4,
    title: "Web Development",
    variant: "feature--web",
    desc: "Custom websites built for performance, SEO, and seamless user experiences on any device.",
  },
  {
    id: 5,
    title: "Mobile Development",
    variant: "feature--mobile",
    desc: "Native and cross‑platform apps that deliver intuitive interfaces and robust functionality.",
  },
  {
    id: 6,
    title: "UI/UX Design",
    variant: "feature--uiux",
    desc: "User‑centered designs that balance aesthetics with usability to drive engagement and retention.",
  },
];

const Services2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header & Breadcrumb */}
      <header className="inf-about__header">
        <h2 className="inf-about__title">
          Our <span className="inf-highlight">Services</span>
        </h2>
        <nav aria-label="breadcrumb" className="inf-breadcrumb">
          <Link to="/" className="inf-breadcrumb__link">
            Home
          </Link>
          <span className="inf-breadcrumb__sep">/</span>
          {/* Current page: use a non-link element */}
          <span
            className="inf-breadcrumb__link inf-breadcrumb__link--current"
            aria-current="page"
          >
            <span className="inf-highlight">Services</span>
          </span>
        </nav>
      </header>

      {/* Mission & Vision */}
      <section id="mission" className="inf-mission-section">
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          animate="show"
          className="inf-mission-container"
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
      </section>

      <main className="services-page">
        {/* Intro Heading */}
        <section className="services-intro">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="services-intro__container"
          >
            <h2 className="services-intro__subtitle">How We Work</h2>
            <h3 className="services-intro__heading">Our Process in 4 Steps</h3>
          </motion.div>
        </section>

        {/* Process Steps */}
        <section className="service-list">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="service-item"
              variants={fadeIn("up", "spring", i * 0.2, 0.8)}
            >
              <span className="service-item__icon">
                <i className={step.icon} aria-hidden="true" />
              </span>
              <h4 className="service-item__title">{step.title}</h4>
              <p className="service-item__desc">{step.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Features */}
        {featureData.map((feature) => (
          <section
            key={feature.id}
            className={`feature-section ${feature.variant}`}
          >
            <div className="feature-section__content">
              <h3
                className={`feature-section__title${
                  feature.light ? " feature-section__title--light" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p className="feature-section__desc">{feature.desc}</p>
              <Link to="/quote" className="btn-quote">
                Get a Quote <FaArrowRight />
              </Link>
            </div>
            <div className="feature-section__image" />
          </section>
        ))}

        {/* Testimonials */}
        <Testimonial />
      </main>
    </>
  );
};

export default Services2;
