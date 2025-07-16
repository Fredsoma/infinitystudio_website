import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => (
  <section className="product-grid">
    {products.map(({ id, title, price, image }) => (
      <article key={id} className="product-card sec1">
        <div className="imgbox" style={{ backgroundImage: `url(${image})` }} />
        <div className="product-card__content">
          <strong className="product-card__title">{title}</strong>
          <span className="product-card__price">
            {price.toLocaleString()} XAF POUR 1 Unité
          </span>
          <Link to={`/order/${id}`} className="btn cmdprx">
            Commander
          </Link>
        </div>
      </article>
    ))}
  </section>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default ProductGrid;
