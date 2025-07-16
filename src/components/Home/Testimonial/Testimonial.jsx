import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import person1 from "../../../images/ava-1.jpg";
import person2 from "../../../images/ava-2.jpg";
import person3 from "../../../images/ava-3.jpg";

const Testimonial = () => {
  const settings = {
    dots: false,
    isFinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <div className="container">
        <div className="slider_content-top">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 Customer</span>
          </h2>
        </div>

        <div className="slider_wrapper">
          <Slider {...settings}>
            <div className="slider_item">
              <p className="description">
                “Working with Infinity Studios was a game‑changer. Their team
                not only redesigned our app’s UI, they helped us increase user
                engagement by 45% in just two months.”
              </p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={person3} alt="" />
                </div>
                <div className="customer_detail-text">
                  <h5 className="customer_name"> Russel Tsague</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>
            <div className="slider_item">
              <p className="description">
                “Their web design and development process was seamless—from
                wireframes to launch, we always knew what to expect. Our new
                site now loads twice as fast and converts 30% more visitors.”
              </p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={person2} alt="" />
                </div>
                <div className="customer_detail-text">
                  <h5 className="customer_name"> Maria kanga</h5>
                  <p className="description">Web design</p>
                </div>
              </div>
            </div>
            <div className="slider_item">
              <p className="description">
                “Infinity Studios’ digital marketing campaign tripled our
                monthly leads. Their data‑driven strategy and attentive support
                made all the difference.”
              </p>
              <div className="customer_details">
                <div className="customer_img">
                  <img src={person1} alt="" />
                </div>
                <div className="customer_detail-text">
                  <h5 className="customer_name"> Fred Soma</h5>
                  <p className="description">Software Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
