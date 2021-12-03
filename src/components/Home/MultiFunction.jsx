import React from "react";
import bg from "../../assets/images/multifunction-bg.png";
// multicros-shape
import MultiCrossShape from "../../assets/images/multicros-shape.png";
//multi-function-icon-01.png
import M1 from "../../assets/images/multi-function-icon-01.png";
import M2 from "../../assets/images/multi-function-icon-02.png";
import M3 from "../../assets/images/multi-function-icon-03.png";
import M4 from "../../assets/images/multi-function-icon-04.png";
const MultiFunction = () => {
  return (
    <div
      className="multifunctional-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="multifunction-box position-relative">
              <img
                className="position-absolute multicros-shape"
                src={MultiCrossShape}
                alt="multicros-shape"
              />
              <h2 data-aos="fade-right">
                A Multifunctional
                <br />
                and Safe Money
                <br />
                transfers
              </h2>
              <a
                data-aos="fade-right"
                className="account-btn compare-btn"
                href="#"
              >
                Compare Plan
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <div
                  data-aos="fade-left"
                  className="multifunction-content position-relative"
                >
                  <img src={M1} alt />
                  <h4>Transparence</h4>
                  <p>
                    No hidden fees, no transfer commissions. We offer safe
                    transaction for you.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-left" className="multifunction-content">
                  <img src={M2} alt />
                  <h4>Safe</h4>
                  <p>
                    Your funds are safeguarded
                    <br />
                    and regulated by the
                    <br />
                    swedish financial
                    <br />
                    inspektion.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div data-aos="fade-left" className="multifunction-content">
                  <img src={M3} alt />
                  <h4>Available</h4>
                  <p>
                    Create account for the <br />
                    online deposit &amp; faster
                    <br />
                    transfers.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div
                  data-aos="fade-left"
                  className="multifunction-content active"
                >
                  <img src={M4} alt />
                  <h4>Reliable</h4>
                  <p>
                    Cash back in every 10
                    <br />
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiFunction;
