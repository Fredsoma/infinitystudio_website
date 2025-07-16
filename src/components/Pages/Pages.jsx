import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services2 from "../Home/services/Services2";
import Training2 from "../Home/Training2/Training2";
import About2 from "../Home/about/About2";
import Products from "../Home/Products/Products";
import Contactus2 from "../Home/Contactus/Contactus2";
import QuotePage from "../Home/quote/QuotePage";
import OrderPage from "../Home/Products/OrderPage";

const Pages = () => {
  const [theme, setTheme] = useState("");
  const location = useLocation();

  // Debug the current path
  console.log("Current path:", location.pathname);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "" ? "light-theme" : ""));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Paths where Header and Footer should not be rendered
  const noHeaderFooterPaths = ["/Pwd"];
  const shouldRenderHeaderFooter = !noHeaderFooterPaths.includes(
    location.pathname
  );

  return (
    <>
      {shouldRenderHeaderFooter && (
        <Header theme={theme} toggleTheme={toggleTheme} className="head" />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services2" element={<Services2 />} />
        <Route path="/Contactus2" element={<Contactus2 />} />
        <Route path="/About2" element={<About2 />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Training2" element={<Training2 />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/order/:title" element={<OrderPage />} />
      </Routes>

      {shouldRenderHeaderFooter && <Footer />}
    </>
  );
};

export default Pages;
