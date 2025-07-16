import React from "react";
import "./team.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../../animation/motion";

import team01 from "../../../images/team-01.png";
import team02 from "../../../images/team-02.png";
import team03 from "../../../images/team-03.png";
import team04 from "../../../images/team-04.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Country Hurry",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Lindas Walton",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Harry Martin",
    position: "Product Disigner",
  },
  {
    imgUrl: team04,
    name: "Jhon cooper",
    position: "Product Developer",
  },
];

const Team = () => {
  return (
    <section className="our_team">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        <div className="team_content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight"> Our Team</span>
          </h2>
        </div>

        <div className="team_wrapper">
          {teamMembers.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.25, 0.75)}
              className="team_item"
              key={index}
            >
              <div className="team_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team_details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team_member-social">
                  <a
                    href="https://www.facebook.com/profile.php?id=100083188127312"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size="1.5rem" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/infinity-studios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size="1.5rem" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
