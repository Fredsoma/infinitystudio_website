import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./contactus.css";
import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  staggerContainer,
  fadeIn,
} from "../../../animation/motion";

const Contactus = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement mailing logic
    console.log({ email, subject, message });
  };

  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="blog_top-content"
        >
          <h2>
            Contact
            <span className="highlight"> Us</span>
          </h2>
          <br />
          <br />
          <div className="service_item-wrapper contact_box">
            <div className="contacts_item">
              <h2>
                Infinity
                <span className="highlight"> Studios</span>
              </h2>
              <div className="phmail">
                <p>
                  Phone: <br />
                  <span> 6 70 57 03 17</span>
                </p>
                <p>
                  Email: <br />
                  <span>infinitystudios@gmail.com</span>
                </p>
              </div>
              <br />
              <form onSubmit={handleSubmit} className="format">
                <input
                  type="text"
                  placeholder="NAME"
                  required
                  onChange={(e) => setSubject(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="MESSAGE"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="sign_btn primary_btn more_btn contact_btn"
                >
                  SEND MESSAGE
                </button>
                <div className="footericons footi">
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
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contactus;
