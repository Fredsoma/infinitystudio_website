import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../animation/motion";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "Printing",
    desc: "High‑quality offset and digital printing solutions on any material—brochures, banners, business cards, and more—to make your brand stand out in print.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Design & App Development",
    desc: "Custom websites and mobile applications built with the latest technologies, optimized for user experience, performance, and scalability.",
  },
  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Creative visual assets—from logos and icons to infographics and social media graphics—designed to communicate your message and captivate your audience.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Data‑driven campaigns across SEO, PPC, social media, and email marketing to boost your online presence, engagement, and conversions.",
  },
];

const Services = () => (
  <section id="Services">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="container"
    >
      <div className="services_top-content">
        <h6 className="subtitle">Our Services</h6>
        <h2>Save Time Managing Your Business With</h2>
        <h2 className="highlight">Our Best Services</h2>
      </div>
      <div className="service_item-wrapper">
        {serviceData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn("right", "spring", i * 0.25, 0.75)}
            className="services_item"
          >
            <span className="service_icon">
              <i className={item.icon}></i>
            </span>
            <h3 className="services_title">{item.title}</h3>
            <p className="description">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
