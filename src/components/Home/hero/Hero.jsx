import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
} from "../../../animation/motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroDarkImg from "../../../images/bulb1.png";
import videoImg from "../../../images/pull.png";
import articleImg from "../../../images/polo.png";

export default function Hero({ theme }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="hero_section" id="Home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container"
      >
        <div className="hero_wrapper">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="hero_content"
          >
            <h2>we’re Creating Perfect</h2>
            <h2>Digital Product to</h2>
            <h2 className="highlight">Promote Your Brand</h2>
            <p className="description">
              We are a design and branding agency.
              <br />
              We carry out your sales campaign perfectly.
            </p>
            <div className="hero_btns">
              <Link to="/quote" className="primary_btn getbtn">
                Get Started Now
              </Link>
              <Link to="/Services2" className="secondary_btn discbtn">
                Discover More
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 1, 0.75)}
            className="hero_img"
          >
            <Slider {...settings}>
              <div>
                <img src={articleImg} alt="master" />
              </div>
              <div>
                <img src={videoImg} alt="pull" />
              </div>
              <div>
                <img src={heroDarkImg} alt="brain" />
              </div>
            </Slider>
          </motion.div>
        </div>
      </motion.div>
      <div aria-label="Mission and Vision" className="inf-mission">
            <div className="inf-mission__bar" />
            <p className="inf-mission__text">
              Infinity Studios provides to achieve excellence in <span className="highlight">Digital transformation</span>,<span className="highlight">IT</span> and <span className="highlight">all Printing Services</span>.
            </p>
          </div>
    </section>
  );
}
