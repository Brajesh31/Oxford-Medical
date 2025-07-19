import React from "react";

const Productcard = ({
  product_badge,
  producttitle1,
  producttitle2,
  price,
  shippinginfo1,
  shippinginfo2,
  btntext,
  img,
}) => {
  return (
    <>
      <div className="product-card">
        <div className="left-content">
          <div className="big-saving-badge">{product_badge}</div>
          <h2 className="product-title">
            {producttitle1} <br /> {producttitle2}
          </h2>
          <div className="price-info">
            <div className="price">{price}</div>
            <div className="shipping-info">
              {shippinginfo1} • {shippinginfo2}
            </div>
          </div>
          <button className="buy-btn">{btntext}</button>
        </div>
        <div className="product-image">
          <div className="inhaler-device">
            <img src={img} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Productcard;
