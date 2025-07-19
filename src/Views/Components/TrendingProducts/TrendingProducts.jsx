import React from "react";
const TrendingProducts = ({
  roundtext,
  img,
  card_title,
  card_text,
  card_price,
  card_price_two,
  line1,
  line2,
  btn_text,
  text1,
  text2,
}) => {
  return (
    <div className="card position-relative text-center p-3 shadow-sm h-100">
      <span className="badge">{roundtext}</span>
      <img src={img} className="card-img-top img-fluid" alt={card_title} />
      <div className="card-body">
        <h6 className="card-title fw-bold">{card_title}</h6>
        <p className="card-text mb-1">{card_text}</p>

        <div className="mb-2 text-warning d-flex gap-2 justify-content-center mt-2">
          <i className="fa-solid fa-star" style={{ color: "#d9d9d9" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#d9d9d9" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#d9d9d9" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#d9d9d9" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#d9d9d9" }}></i>
        </div>

        <p className="mb-0 mt-2">
          <del className="text-muted">{card_price}</del>
          <span className="text-success fw-bold"> {card_price_two}</span>
        </p>
        <p className="text-secondary small mb-2">
          {line1}. <strong>{line2}</strong>
        </p>

        <button className="btn btn-teal w-100 mb-3 mt-2">{btn_text}</button>

        <div className="d-flex justify-content-center gap-0 gap-md-0 gap-lg-3 pt-2">
          <span className="text-muted small">
            <i className="bi bi-circle"></i> {text1}
          </span>
          <span>|</span>
          <span className="text-muted small">
            <i className="bi bi-eye"></i> {text2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
