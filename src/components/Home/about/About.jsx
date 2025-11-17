import React from "react";
import "./about.css";
import aboutImg from "../../../images/about-us.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../../../animation/motion";
const chossData = [
  {
    icon: "ri-wifi-line",
    title: "We Analyse",
    desc: "We run stakeholder interviews, user research and data audits to define goals, KPIs and a prioritized roadmap.",
  },
  {
    icon: "ri-team-line",
    title: "We Design",
    desc: "We craft user-centered interfaces, interactive prototypes and a reusable design system that align with your brand.",
  },
  {
    icon: "ri-wifi-line",
    title: "We Implement",
    desc: "We build production-ready code, integrate third-party services/APIs, and optimize for performance, security and scale.",
  },
  {
    icon: "ri-team-line",
    title: "We Test",
    desc: "We run automated and manual QA—unit, integration, accessibility and user testing—to ensure quality and reliability.",
  },
  {
    icon: "ri-time-line",
    title: "We Deploy and maintain",
    desc: "We deploy via CI/CD, monitor performance and apply routine updates, security patches, and proactive optimizations.",
  },
  {
    icon: "ri-time-line",
    title: "24/7 Support",
    desc: "Dedicated support with SLAs, incident response and proactive monitoring so your product stays online and healthy.",
  },
];

const About = () => {
  return (
    <section id="About about_body">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container "
      >
        <div className="about_wrapper">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="about_content"
          >
            <h6 className="subtitle"> Why choose us !!!</h6>
            <h2>Specialist in advicing client</h2>
            <h2 className="highlight">with our unique technology</h2>
            <div>
              {chossData.map((item, index) => (
                <div className="choose_us-item" key={index}>
                  <span className="choose_us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/About2" className="sign_btn primary_btn more_btn">
              Discover More
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="about_img"
          >
            <img src={aboutImg} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
