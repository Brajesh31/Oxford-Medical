import React, { useEffect, useState } from "react";
import Card from "../../Components/CardComponent/Card";
import axios from "axios";
// import img from "../../../img/cardimg.png";
const Section2 = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("./JSON/Card.json");
      setData(response.data.cardData);
      // console.log(response.data.cardData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid products">
          <h1 className="text-center mt-5 mt-md-0 mt-lg-0">We Manufacture</h1>
          <div className="product-section">
            <div className="container-fluid">
              <div className="product-container d-flex justify-content-center gap-2 gap-lg-3 flex-wrap mt-4">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    card_img={item.cardimg}
                    card_text={item.cardtext}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
