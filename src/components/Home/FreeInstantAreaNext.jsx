import React from "react";
import img from "../../assets/images/free-instant-bg.png";
import exchangeIcon from "../../assets/images/exchange-icon.png";
import freeInstantImg from "../../assets/images/free-instant-img.png";
const FreeInstantAreaNext = () => {
  return (
    <div
      className="free-instant-more-wrapper"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div>
              <img
                data-aos="fade-right"
                className="img-fluid mt_30"
                src={freeInstantImg}
                alt="free-instant-img"
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="free-instant-content mt_30">
              <h2 data-aos="fade-left" className="head-text">
                Free &amp; instant transfers over 80+ countries all
                <br />
                over the world.
              </h2>
              <p data-aos="fade-left" className="get-para">
                Get interbank exchange rate whenever you
                <br />
                exchange major currencies.
              </p>
              <div className="custom-get">
                <div
                  data-aos="fade-left"
                  className="d-flex align-items-center justify-content-between"
                >
                  <p className="exchange-rate mt_35">
                    <img src={exchangeIcon} alt="exchange-icon" />
                    Exchange rates
                  </p>
                  <p className="exchange-rate mt_35">
                    <img src={exchangeIcon} alt="exchange-icon" />
                    Faster send
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="d-flex align-items-center justify-content-between"
                >
                  <p className="exchange-rate mt_30">
                    <img src={exchangeIcon} alt="exchange-icon" />
                    Secure channel
                  </p>
                  <p className="exchange-rate mt_30">
                    <img src={exchangeIcon} alt="exchange-icon" />
                    Money is safe
                  </p>
                </div>
              </div>
              <a data-aos="fade-left" className="checkout-btn" href="#">
                Checkout Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeInstantAreaNext;
