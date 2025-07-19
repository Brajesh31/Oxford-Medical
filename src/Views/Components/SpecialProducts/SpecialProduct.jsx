import React from "react";

const SpecialProduct = ({
  product_title,
  product_title2,
  product_price,
  stock_info1,
  stock_info2,
  btn_text,
  img,
}) => {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        {" "}
        <div className="custom-card">
          <div className="card-content ">
            <div className="card-text">
              <p className="product-title">
                {product_title} <br /> {product_title2}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fa-solid fa-star"
                        style={{ color: "#ffa800", fontSize: "10px" }}
                      ></i>
                    ))}
                  </div>
                  <p className="product-price">{product_price}</p>
                  <p className="stock-info">
                    {stock_info1}
                    <span className="free-ship">{stock_info2}</span>
                  </p>
                  <button className="add-btn">{btn_text}</button>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center card-image">
                  <img src={img} alt={product_title} className="product-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
