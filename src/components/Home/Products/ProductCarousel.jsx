import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ products }) => {
  const settings = {
    infinite: true,
    speed: 5000, // long duration for continuous feel
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // no delay between cycles
    cssEase: "linear", // smooth continuous motion
    pauseOnHover: false,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="product-carousel">
      <Slider {...settings}>
        {products.map(({ id, title, price, image }) => (
          <div key={id} className="product-card sec1">
            <div
              className="imgbox"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="product-card__content">
              <strong className="product-card__title">{title}</strong>
              <span className="product-card__price">
                {price.toLocaleString()} XAF for 1 unit
              </span>
              {/* Link now directs to the order page for this product */}
              <Link to={`/order/${title}`} className="btn cmdprx">
                Order
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCarousel;
