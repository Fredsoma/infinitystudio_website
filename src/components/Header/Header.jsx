import React, { useRef, useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/infinity-graphics-logo.png";


const nav_list = [
  { path: "/", display: "Home", icon: "home-line" },
  { path: "/About2", display: "About", icon: "user-line" },
  { path: "/Services2", display: "Services", icon: "settings-2-line" },
  { path: "/Products", display: "Products", icon: "shopping-bag-line" },
  { path: "/Contactus2", display: "Contact", icon: "phone-line" },
  { path: "/Training2", display: "Training", icon: "book-open-line" },
  { path: "/quote", display: "Quote", icon: "chat-quote-line" },
];

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef();

  // change header bg on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on overlay click or navigation
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header-bg" : ""}`}>
      <div className="container nav_wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="Oprah Logo" />
        </Link>

        {/* Overlay */}
        <div
          ref={overlayRef}
          className={`nav-overlay ${menuOpen ? "visible" : ""}`}
          onClick={closeMenu}
        />

        {/* Navigation */}
        <nav className={`navigation ${menuOpen ? "menu_active" : ""}`}>
          <ul className="menu">
            {nav_list.map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="menu_link" onClick={closeMenu}>
                  {/* the icon */}
                  <i
                    className={`ri-${item.icon} menu_icon`}
                    aria-hidden="true"
                  />
                  <span className="menu_text">{item.display}</span>
                </Link>
              </li>
            ))}
            <li>
              {/* Theme toggle (commented out) */}
              {/* <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light-theme" ? "🌙 Dark" : "☀️ Light"}
              </button> */}
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className="mobile_menu"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`} />
        </button>
      </div>
    </header>
  );
}
