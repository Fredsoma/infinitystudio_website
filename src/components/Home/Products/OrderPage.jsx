import React from "react";
import { useParams } from "react-router-dom";
import OrderForm2 from "./OrderForm2";
import "./order.css";

export default function OrderPage() {
  const { title } = useParams();

  return (
    <>
      <header className="inf-about__header">
        <h2 className="inf-about__title">
          <span className="inf-highlight">Order</span>
        </h2>
        <nav aria-label="breadcrumb" className="inf-breadcrumb">
          <p className="quote-subtitle">
            <h1>Order the product {title}</h1>
          </p>
        </nav>
      </header>
      <div className="order-page">
        <OrderForm2 />
      </div>
    </>
  );
}
