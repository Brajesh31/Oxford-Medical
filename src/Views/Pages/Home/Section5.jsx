import React, { useEffect, useState } from "react";
import Productcard from "../../Components/Productcard/Productcard";
import axios from "axios";
const Section5 = () => {
  const [productdata, setProductdata] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("./JSON/Productcard.json");
      setProductdata(response.data.productcardData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <section>
      <div className="omi-products">
        <h1>All OMI Products</h1>
        <div className="border border-5-dark"></div>
        <div className="container">
          <div className="mt-5 mainproducts">
            {productdata.map((item) => {
              return (
                <Productcard
                  key={item.id}
                  product_badge={item.product_badge}
                  producttitle1={item.producttitle1}
                  producttitle2={item.producttitle2}
                  price={item.price}
                  shippinginfo1={item.shippinginfo1}
                  shippinginfo2={item.shippinginfo2}
                  btntext={item.btntext}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
