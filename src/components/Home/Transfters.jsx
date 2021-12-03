import React from "react";
import image from "../../assets/images/home-bg.png";
import Form from "../../utils/Form";

const Transfters = () => {
  return (
    <section
      className="home-wrapper position-relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <Form />
          <div className="col-lg-7 order-lg-1">
            <div className="home-content">
              <div className="custom-center">
                <h2>
                  Simple &amp; Fast
                  <br /> money transfers.
                </h2>
                <p className="home-para">
                  Pay family and friends at home &amp; Abroad, our transfers
                  fees are
                  <br /> 10x cheaper than others providers &amp; Banks.
                  <br />
                  Join over 1 millions users who trust us.
                </p>
                <a href="#" className="account-btn">
                  Create account
                </a>
              </div>
              <div className="trust-box d-flex align-items-center justify-content-between">
                <div>
                  <h3 className="min-head trust-text">
                    Trusted by More than
                    <br /> <span>1 Millions</span> users.
                  </h3>
                </div>
                <div className="trust-semi-box w-100 d-flex align-items-center justify-content-between">
                  <div>
                    <h3 className="min-head">4.8 on</h3>
                    <p className="mini-para">Apple Store</p>
                  </div>
                  <div>
                    <h3 className="min-head">4.7 on</h3>
                    <p className="mini-para">Play Store</p>
                  </div>
                  <div>
                    <h3 className="min-head">4.7 on</h3>
                    <p className="mini-para">Trustpilot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfters;
