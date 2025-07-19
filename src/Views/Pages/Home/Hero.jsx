import React from "react";
const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-hero">
        <div className="slider-left d-flex justify-content-center align-items-center">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className="fa-solid fa-star"
                style={{ color: "#E4040E" }}
              ></i>
            ))}
            <span className="rating-text">
              For over 15 years Oxford Medical Instruments Ltd.
            </span>
          </div>

          <div className="hero-text">
            <h2>Get 20% Discount of</h2>
            <h2>Breathing Salt Therapy</h2>
            <h2>Inhalers</h2>
            <p>
              Salt Therapy Inhalers naturally support easier breathing by
              <br />
              delivering fine salt particles to your airways.
            </p>
            <span className="price-info">Starting at $40</span>
          </div>

          <div className="button-section ms-0 ps-0 ms-lg-5 ps-lg-5">
            <a href="#" className="shop-button">
              Shop Now
            </a>
            <span className="genuine-text">100% genuine Products</span>
          </div>
        </div>

        <div className="slider-right"></div>
      </div>
    </div>
  );
};

export default Slider;
