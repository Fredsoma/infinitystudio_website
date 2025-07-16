import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./contactus2.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import aboutImg from "../../../images/about-us.jpg";
import logo from "../../../images/infinity-graphics-logo.png";
import { Link } from "react-router-dom";
import { staggerContainer, fadeIn } from "../../../animation/motion";

const CONTACT_INFO = [
  { icon: "ri-map-pin-line", label: "Yaoundé, Cradat, Cameroon" },
  { icon: "ri-mail-line", label: "infinityStudio@gmail.com" },
  { icon: "ri-phone-line", label: "+237 6 79 72 45 61" },
];

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="inf-about__header">
        <h2 className="inf-about__title">
          Contact <span className="inf-highlight">Us</span>
        </h2>
        <nav aria-label="breadcrumb" className="inf-breadcrumb">
          <Link to="/" className="inf-breadcrumb__link">
            Home
          </Link>
          <span className="inf-breadcrumb__sep">/</span>
          <span
            className="inf-breadcrumb__link inf-breadcrumb__link--current"
            aria-current="page"
          >
            Contact <span className="inf-highlight">Us</span>
          </span>
        </nav>
      </header>
      <main className="contact-us">
        {/* Header */}
        <motion.header
          className="contact-us__header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="contact-us__title"
          >
            Contact <span className="contact-us__highlight">Us</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="contact-us__subtitle"
          >
            Questions ? Comments ? Let’s talk !
            <br />
            We’re excited to create something exceptional together.
          </motion.p>
        </motion.header>

        {/* Details */}
        <section className="contact-us__details">
          {CONTACT_INFO.map((item, i) => (
            <div key={i} className="contact-us__detail">
              <i
                className={`${item.icon} contact-us__icon`}
                aria-hidden="true"
              />
              <span className="contact-us__label">{item.label}</span>
            </div>
          ))}
        </section>

        {/* Body */}
        <motion.section
          className="contact-us__body"
          variants={fadeIn("up", "tween", 0.4, 1)}
        >
          {/* Media */}
          <div className="contact-us__media">
            <img
              src={aboutImg}
              alt="About us"
              className="contact-us__image--main"
            />
            <img src={logo} alt="Logo" className="contact-us__image--logo" />
          </div>

          {/* Form */}
          <form className="contact-us__form">
            <div className="contact-us__field-group">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="contact-us__field-group">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="contact-us__field-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className="contact-us__field-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="4"
                required
              />
            </div>
            <button type="submit" className="contact-us__btn">
              Send
            </button>

            <div className="contact-us__social">
              <a
                href="https://www.facebook.com/profile.php?id=100083188127312"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size="1.5rem"
                  id="mediaicon"
                  aria-label="Facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/infinity-studios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  size="1.5rem"
                  id="mediaicon"
                  aria-label="LinkedIn"
                />
              </a>
            </div>
          </form>
        </motion.section>

        {/* Map */}
        <section className="contact-us__map">
          <iframe
            title="Infinity Studios Location"
            src="https://maps.google.com/maps?hl=en&amp;q=Yaounde%20Cradat&amp;z=15&amp;output=embed"
            allowFullScreen
          />
        </section>
      </main>
    </>
  );
};

export default ContactUs;
