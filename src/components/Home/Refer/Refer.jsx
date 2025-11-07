import React from "react";
import "../services/services.css"
import "./refer.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../animation/motion";
import logo1 from "../../../images/logo1.png";
import logo2 from "../../../images/logo2.png";
import logo3 from "../../../images/logo3.png";
import logo4 from "../../../images/logo4.png";
import logo5 from "../../../images/logo5.png";
import logo6 from "../../../images/logo6.png";

const serviceData = [
  {
    imgUrl: logo1,
  },
  {
    imgUrl: logo2,
  },
  {
    imgUrl: logo3,
  },
  {
    imgUrl: logo4,
  },
  {
    imgUrl: logo5,
  },
];

const Refer= () => (
  <section id="Services">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container"
    >
      <div className="services_top-content">
        <h2 className="highlight">Our References</h2>
      </div>
      <div className="service_item-wrapper">
        {serviceData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn("right", "spring", i * 0.25, 0.75)}
            
          >
             <div className="service_ico">
                <img src={item.imgUrl} alt="" />
              </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Refer