import React from "react";
import "../about/about.css"
import "./solution.css"
import aboutImg from "../../../images/learn.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../../../animation/motion";

const Solution = () => {
   return (
    <section id="About about_body" className="sec">
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
            className="about_content acont"
          >
            <h2 className="description about_content-desc soltext">
              Choose the solution adapted to your needs.
            </h2>
            <p className="description about_content-desc">
              We offer tailored solutions — from lightweight pilots to full-scale implementations — so you get the features you need, when you need them, without paying for what you don’t.
            </p>
            <Link to="/quote" className="sign_btn primary_btn more_btn">
                          Request a free consultation
                        </Link>
          </motion.div>
           <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="about_i"
          >
            <img src={aboutImg} alt="" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Solution