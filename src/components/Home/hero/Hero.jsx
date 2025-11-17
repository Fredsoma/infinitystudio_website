import React, { useState } from "react";
import "./hero.css";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn } from "../../../animation/motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import heroDarkImg from "../../../images/bulb1.png";
import videoImg from "../../../images/pull.png";
import articleImg from "../../../images/polo.png";

export default function Hero({ theme }) {
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    swipeToSlide: true,
    afterChange: (index) => setCurrent(index),
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

  const slides = [
    {
      id: 0,
      img: articleImg,
      alt: "product polo",
      title: ["we’re Creating Perfect", "Digital Product to", "Promote Your Brand"],
      highlightIndex: 2,
      description:
        "We are a design and branding agency.\nWe carry out your sales campaign perfectly.",
    },
    {
      id: 1,
      img: videoImg,
      alt: "video pull",
      title: ["We craft engaging", "Video & Interactive", "Product Experiences"],
      highlightIndex: 1,
      description:
        "We produce videos that convert.\nStorytelling + performance marketing.",
    },
    {
      id: 2,
      img: heroDarkImg,
      alt: "bright idea bulb",
      title: ["Bright ideas that", "Turn into", "Beautiful Designs"],
      highlightIndex: 2,
      description:
        "Creative solutions for modern brands.\nDesign, branding and printing services.",
    },
  ];

  // motion variants
  const containerVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
    exit: { opacity: 0, transition: { when: "afterChildren" } },
  };

  const lineVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
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
          {/* Text block — Animated per slide */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="hero_content"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                className="hero_text"
                variants={containerVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {slides[current].title.map((line, idx) => (
                  <motion.h2
                    key={idx}
                    className={idx === slides[current].highlightIndex ? "highlight" : ""}
                    variants={lineVariant}
                  >
                    {line}
                  </motion.h2>
                ))}

                <motion.p className="description" variants={lineVariant}>
                  {slides[current].description.split("\n").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i !== arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </motion.p>

                <motion.div className="hero_btns" variants={lineVariant}>
                  <Link to="/quote" className="primary_btn getbtn">
                    Get Started Now
                  </Link>
                  <Link to="/Services2" className="secondary_btn discbtn">
                    Discover More
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            variants={fadeIn("left", "spring", 1, 0.75)}
            className="hero_img"
          >
            <Slider {...settings}>
              {slides.map((s) => (
                <div key={s.id} className="hero_slide_item">
                  <img src={s.img} alt={s.alt} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </motion.div>

      <div aria-label="Mission and Vision" className="inf-mission">
        <div className="inf-mission__bar" />
        <p className="inf-mission__text">
          Infinity Studios provides to achieve excellence in{" "}
          <span className="highlight">Digital transformation</span>,{" "}
          <span className="highlight">IT</span> and{" "}
          <span className="highlight">all Printing Services</span>.
        </p>
      </div>
    </section>
  );
}
