
import React, { useState, useEffect } from "react";
import {
  FaArrowCircleUp,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/infinity-graphics-logo.png";
import "./footer.css";

const pagesLinks = [
  { path: "/About2", display: "About" },
  { path: "/Services2", display: "Services" },
  { path: "/Products", display: "Products" },
  { path: "/Contactus2", display: "Contact" },
  { path: "/Training2", display: "Training" },
  { path: "/quote", display: "Quote" },
];

const services = [
  { display: "Printing" },
  { display: "Graphic Design" },
  { display: "Digital Marketing" },
  { display: "Web Design" },
  { display: "App Development" },
];

const support = [
  { display: "Infinity" },
  { display: "undefine" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openWhatsAppChat = () => {
    window.open("https://wa.me/237670570317", "_blank");
  };

  return (
    <footer className="footer">
      <div className="container footer_wrapper">
        {/* Logo & Description */}
        <div className="footer_logo">
          <img src={logo} alt="Infinity Studio Logo" />
          <p className="small_text desci">
            Infinity Studios delivers creative solutions that drive results—
            from branding to digital marketing and beyond.
          </p>
          <div className="footericons">
            <a
              href="https://www.facebook.com/profile.php?id=100083188127312"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size="1.3rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/infinity-studios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size="1.3rem" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer_quick-links">
          <h3 className="quick_links-title">Services</h3>
          <ul className="quick_links">
            {services.map((link, i) => (
              <li key={i} className="quick_link-item">
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div className="footer_quick-links">
          <h3 className="quick_links-title">Quick Links</h3>
          <ul className="quick_links">
            {pagesLinks.map((link, i) => (
              <li key={i} className="quick_link-item">
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div className="footer_quick-links">
          <h3 className="quick_links-title">support</h3>
          <ul className="quick_links">
            {support.map((link, i) => (
              <li key={i} className="quick_link-item">
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* WhatsApp Contact */}
        <div className="footer_contact-cta">
          <h3>Chat With Us</h3>
          <button className="zapp" onClick={openWhatsAppChat}>
            <FaWhatsapp size="2rem" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <p className="copyright">
        © {new Date().getFullYear()} Infinity Studios. All rights reserved.{" "}
        <a
          href="https://fredsoma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          · Developed by Fred Soma
        </a>
      </p>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`topbtn ${showTop ? "show" : ""}`}
        aria-label="Back to top"
      >
        <FaArrowCircleUp />
      </button>
    </footer>
  );
}
