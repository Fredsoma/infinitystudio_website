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
    desc: "Our transparent, step‑by‑step process ensures every milestone is clear, on‑time, and on‑budget.",
  },
  {
    icon: "ri-team-line",
    title: "We Design",
    desc: "A hand‑picked crew of experts in design, development, and marketing committed to your success.",
  },
  {
    icon: "ri-wifi-line",
    title: "We Implement",
    desc: "Our transparent, step‑by‑step process ensures every milestone is clear, on‑time, and on‑budget.",
  },
  {
    icon: "ri-team-line",
    title: "We Test",
    desc: "A hand‑picked crew of experts in design, development, and marketing committed to your success.",
  },
  {
    icon: "ri-time-line",
    title: "We Deploy and maintain",
    desc: "Around‑the‑clock assistance means you’ll never be left waiting for answers or updates.",
  },
   {
    icon: "ri-time-line",
    title: "24/7 Support",
    desc: "Around‑the‑clock assistance means you’ll never be left waiting for answers or updates.",
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
