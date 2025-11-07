import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../about/about2.css"
import {
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../animation/motion";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Consulting",
    desc: "We follow a structured approach to ensure clarity and efficiency from concept to delivery.",
  },
  {
    icon: "ri-team-line",
    title: "Design services",
    desc: "Our experts bring diverse skills and a commitment to excellence in every project.",
  },
   {
    icon: "ri-wifi-line",
    title: "Videography",
    desc: "We follow a structured approach to ensure clarity and efficiency from concept to delivery.",
  },
  {
    icon: "ri-team-line",
    title: "Digital marketing",
    desc: "Our experts bring diverse skills and a commitment to excellence in every project.",
  },
  {
    icon: "ri-time-line",
    title: "Data & AI",
    desc: "We provide round-the-clock assistance to address any questions or concerns.",
  },
  {
    icon: "ri-time-line",
    title: "Training",
    desc: "We provide round-the-clock assistance to address any questions or concerns.",
  },
];

const Serv= () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
      <section id="about-us" className="inf-about">
        {/* Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="inf-container"
        >
          <div className="inf-values">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <center>
            <Link to="/About2" className="sign_btn primary_btn more_btn ">
                        Discover More
                      </Link>
          </center>
           
        </motion.div>
      </section>
    </>
  );
}

export default Serv