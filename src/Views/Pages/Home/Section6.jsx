import React, { useEffect, useState } from "react";
import TrendingProducts from "../../Components/TrendingProducts/TrendingProducts";
import axios from "axios";

const Section6 = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("./JSON/TrendingProducts.json");
      setData(response.data.trendingproduct);
      setData2(response.data.trendingproduct2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <section className="py-4">
      <div className="omi-products">
        <h1>Our Trending Product</h1>
        <div className="border border-5-dark"></div>
        <div className="container">
          <div className="row mt-5">
            {data.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <TrendingProducts
                  roundtext={item.roundtext}
                  img={item.img}
                  card_title={item.card_title}
                  card_text={item.card_text}
                  card_price={item.card_price}
                  card_price_two={item.card_two_pric}
                  line1={item.line1}
                  line2={item.line2}
                  btn_text={item.btn_text}
                  text1={item.text1}
                  text2={item.text2}
                />
              </div>
            ))}
          </div>
          <div className="row mt-5">
            {data2.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <TrendingProducts
                  roundtext={item.roundtext}
                  img={item.img}
                  card_title={item.card_title}
                  card_text={item.card_text}
                  card_price={item.card_price}
                  card_price_two={item.card_two_pric}
                  line1={item.line1}
                  line2={item.line2}
                  btn_text={item.btn_text}
                  text1={item.text1}
                  text2={item.text2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
