import React from "react";
import "../services/services.css";
import "./refer.css";
import { motion } from "framer-motion";
import logo1 from "../../../images/logo1.png";
import logo2 from "../../../images/logo2.png";
import logo3 from "../../../images/logo3.png";
import logo4 from "../../../images/logo4.png";
import logo5 from "../../../images/logo5.png";
import logo6 from "../../../images/logo6.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Refer = () => {
  // duplicate the array to make a seamless marquee
  const looped = logos.concat(logos);

  return (
    <section id="Services" >
      <div className="container" >
        <div className="services_top-content">
          <h2 className="highlight ref">Our References</h2>
        </div>

        <div className="service_item-wrapper carou" aria-hidden={false}>
          <motion.div
            className="service_item-track"
            // animate the track from 0% to -50% (because we duplicated the logos)
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 18, // adjust speed here (seconds)
                ease: "linear",
              },
            }}
          >
            {looped.map((src, i) => (
              <div key={i} className="service_item">
                <img src={src} alt={`client logo ${i % logos.length + 1}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Refer;
