import React, { useEffect, useState } from "react";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";
import img1 from "../../../../public/img/img1.png";
import axios from "axios";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProduct";

const Section7 = () => {
  const [data, setData] = useState([]);
  const features = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="12"
            width="28"
            height="16"
            rx="2"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="6" y="16" width="4" height="2" fill="#666" />
          <rect x="12" y="16" width="4" height="2" fill="#666" />
          <rect x="18" y="16" width="4" height="2" fill="#666" />
          <circle
            cx="10"
            cy="32"
            r="3"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="24"
            cy="32"
            r="3"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M30 20h6l-2-4h-4v4z"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="10"
            y1="28"
            x2="10"
            y2="29"
            stroke="#666"
            strokeWidth="1.5"
          />
          <line
            x1="24"
            y1="28"
            x2="24"
            y2="29"
            stroke="#666"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Free Shipping",
      subtitle: "On all orders over $49",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 18l6 6 12-12"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 20c0-6.627 5.373-12 12-12s12 5.373 12 12"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "15 days returns",
      subtitle: "moneyback guarantee",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="12"
            width="24"
            height="16"
            rx="2"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M16 12V8a4 4 0 0 1 8 0v4"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="20" cy="20" r="2" fill="#666" />
          <line
            x1="20"
            y1="22"
            x2="20"
            y2="24"
            stroke="#666"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Secure checkout",
      subtitle: "Protected by Paypal",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4"
            y="8"
            width="32"
            height="20"
            rx="2"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M8 16h8v4H8z" fill="#666" />
          <line x1="20" y1="18" x2="28" y2="18" stroke="#666" strokeWidth="1" />
          <line x1="20" y1="22" x2="32" y2="22" stroke="#666" strokeWidth="1" />
          <circle
            cx="28"
            cy="32"
            r="4"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M26 32l1.5 1.5L30 31"
            stroke="#666"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Offer & gift here",
      subtitle: "On all orders over",
    },
  ];

  const fetchingData = async () => {
    try {
      const response = await axios.get("./JSON/SpecialProduct.json");
      setData(response.data.specialProduct);
      // console.log(response.data.specialProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <section>
      <div className="omi-products py-5">
        <h1 className="mb-3">Special Products</h1>
        <div className="border border-5-dark mb-4 mx-auto"></div>

        <div className="container">
          <div className="row mt-4 g-3">
            {/* LEFT BIG CARD */}
            <div className="col-lg-4">
              <TrendingProducts
                roundtext={"Sale"}
                img={img1}
                card_title={"PEME MAT PACKAGE - OMI PEME Full Body"}
                card_text={"Mat,OMI MiNiMat/Chair Mat,OMI PEME Medallion"}
                rating={5}
                card_price={"$1450"}
                card_price_two={"$1350"}
                line1={"IN Stock."}
                line2={"FREE SHIPPING"}
                btn_text={"ADD TO CART"}
                text1={"Compare"}
                text2={"Quick View"}
              />
            </div>
            <div className="col-lg-8">
              <div className="row g-3">
                {data.map((item) => (
                  <SpecialProducts
                    product_title={item.product_title}
                    product_title2={item.product_title2}
                    product_price={item.product_price}
                    stock_info1={item.stock_info1}
                    stock_info2={item.stock_info2}
                    btn_text={item.btn_text}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid py-4 mt-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row g-0">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3">
                <div className="d-flex align-items-center p-3 h-100">
                  <div className="flex-shrink-0 me-3">{feature.icon}</div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1 shipping-title">{feature.title}</h6>
                    <p className="mb-0 shipping-subtitle">{feature.subtitle}</p>
                  </div>
                </div>
                {index < features.length - 1 && (
                  <div
                    className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
                    style={{
                      width: "1px",
                      height: "40px",
                      backgroundColor: "#dee2e6",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
