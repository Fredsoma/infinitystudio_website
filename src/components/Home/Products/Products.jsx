import React, { useState, useEffect } from "react";
import "./products.css";
import poloImg from "../../../images/polo.png";
import pullImg from "../../../images/pull.png";
import mugImg from "../../../images/mug.png";
import watchImg from "../../../images/watch.png";
import watch2Img from "../../../images/watch2.png";
import trophieImg from "../../../images/trophie.png";
import trophie1Img from "../../../images/trophie1.png";
import trophie2Img from "../../../images/trophie2.png";
import printImg from "../../../images/print.png";
import mug3Img from "../../../images/mug3.png";
import mug2Img from "../../../images/mug2.png";
import phonehandlerImg from "../../../images/phonehandler.png";
import dtfImg from "../../../images/dtf.png";
import rollupImg from "../../../images/rollup.png";
import chargeurImg from "../../../images/fastcharger.png";
import ProductCarousel from "./ProductCarousel";
import OrderForm from "./OrderForm";

const productsData = [
  { id: 1, title: "T-Shirt Classique", price: 15000, image: poloImg },
  { id: 2, title: "Polo Premium", price: 18000, image: pullImg },
  { id: 3, title: "T-Shirt 3D", price: 20000, image: mugImg },
  { id: 4, title: "Modern Watch", price: 15000, image: watchImg },
  { id: 5, title: "Apple Watch", price: 18000, image: watch2Img },
  { id: 6, title: "hectagone trophie", price: 20000, image: trophieImg },
  { id: 7, title: "classic trophie", price: 15000, image: trophie1Img },
  { id: 8, title: "trophie", price: 18000, image: trophie2Img },
  { id: 9, title: "Printer", price: 20000, image: printImg },
  { id: 10, title: "Travel Mug", price: 15000, image: mug3Img },
  { id: 11, title: "Hot Mug", price: 18000, image: mug2Img },
  { id: 12, title: "PhoneHandler", price: 20000, image: phonehandlerImg },
  { id: 13, title: "Dtf", price: 15000, image: dtfImg },
  { id: 14, title: "RollUp", price: 18000, image: rollupImg },
  { id: 15, title: "Chargeur", price: 18000, image: chargeurImg },
  // Add more products as needed
];

const Products = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="products-hero">
        <div className="products-hero__text">
          <h1 className="products-hero__title">
            Print <span className="highlight">Everything</span>.{" "}
            <span className="highlight">Everywhere</span>.{" "}
            <span className="highlight">Fast</span>.
          </h1>
          <p className="products-hero__subtitle">
            T‑shirts, polos, mugs, trophies… customize everything and receive it
            within 24 hours !
          </p>
        </div>
        <div className="products-hero__image">
          <img src={poloImg} alt="3D Shirts" />
        </div>
      </header>
      <div className="products-page">
        <section className="products-intro">
          <p>Check out our latest creations just below ⬇️</p>
          <p>Scroll down to find your next favorite item !</p>
        </section>

        <ProductCarousel products={productsData} />

        <OrderForm
          selectedFile={selectedFile}
          onFileChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default Products;
