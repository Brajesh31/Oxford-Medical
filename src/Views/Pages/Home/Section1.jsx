import axios from "axios";
import React, { useEffect, useState } from "react";

const Section1 = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/about");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const aboutData = data.length > 0 ? data[0] : {};

  const aboutStyle = {
    padding: "10px",
    height: "559px",
    color: "white",
    backgroundImage: aboutData.img
      ? `url(http://localhost:1000/uploads/${aboutData.img})`
      : "No Image",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    borderRadius: "50px",
  };

  return (
    <>
      <section>
        <div className="container-fluid main-section mt-5">
          <div className="about" style={aboutStyle}>
            <div className="">
              <div className="text-container">
                <div className="container text-uppercase text-center">
                  <h1>{aboutData.title || "Loading..."}</h1>
                  <h1>{aboutData.title2 || ""}</h1>
                </div>
              </div>
              <div className="second-container mt-0 mt-lg-4">
                <div className="text-two">
                  <div className="container text-uppercase text text-center">
                    <h1>{aboutData.sub_title || ""}</h1>
                  </div>
                  <p className="text-center mt-2">{aboutData.para || ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
