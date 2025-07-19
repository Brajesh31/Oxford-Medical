import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <div className="container-fluid footer d-flex justify-content-center">
            <div className="container">
              <div className="row">
                <div className="col footersection">
                  <div className="d-flex flex-column">
                    <img src="../../img/footerlogo.jpg" alt="" />
                    <img src="../../img/footerlogo.jpg" alt="" />
                  </div>
                </div>
                <div className="col second-section mt-3 mt-lg-0">
                  <form>
                    <label className="title">MAILING LIST</label>
                    <p>
                      Sign Up For Information On New Developments, <br />{" "}
                      Special Offers And Outstanding Opportunities!
                    </p>
                    <div className="d-flex flex-column">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="email-input text-center"
                      />
                      <button className="go-button">Go</button>
                    </div>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="subscribeOption"
                          defaultChecked
                        />
                        Subscribe
                      </label>
                      <label>
                        <input type="radio" name="subscribeOption" />
                        UnSubscribe
                      </label>
                    </div>
                  </form>
                </div>
                <div className="col third-section mt-5 mt-lg-0 ms-0 ps-0 ps-lg-5 ms-lg-5">
                  <h3>LINKS</h3>
                  <ul className="list">
                    <li>Become an Affiliate</li>
                    <li>Tearms & Conditions</li>
                    <li>www.oxfordmedicals.de</li>
                    <li>www.oxfordmedicals.co.uk</li>
                    <li>OMI Health Education Blog</li>
                    <li>Downloadable Documations</li>
                  </ul>
                  <div className="paymentcontainer">
                    <div className="payment">
                      <img src="../../img/discover.png" alt="" />
                      <img src="../../img/master-card.png" alt="" />
                      <img src="../../img/visa.png" alt="" />
                      <img src="../../img/paypal.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title-line d-flex justify-content-center align-items-center text-light">
            Copyright 2025 Oxford Medical Instruments Health Store. All Rights
            Reserved.
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
