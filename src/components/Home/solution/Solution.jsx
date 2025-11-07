import React from "react";
import "../about/about.css"
import aboutImg from "../../../images/bulb.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../../../animation/motion";

const Solution = () => {
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
            <h2 className="description about_content-desc">
              Choose the solution adapted to your needs.
            </h2>
            <p className="description about_content-desc">
              At Infinity Studios, we understand that every euro counts. Our
              team combines deep financial expertise with creative marketing
              know‑how to craft campaigns that boost your ROI and strengthen
              your brand’s bottom line.
            </p>
            <Link to="/quote" className="sign_btn primary_btn more_btn">
                          Request a free consultation
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
}

export default Solution