import React from "react";

import freeIcon1 from "../../assets/images/free-icon-01.png";
import freeIcon2 from "../../assets/images/free-icon-02.png";
import freeIcon3 from "../../assets/images/free-icon-03.png";
import freeIcon4 from "../../assets/images/free-icon-04.png";
const FreeInstantArea = () => {
  return (
    <section>
      <div className="free-instant-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="head-text">
                Free &amp; instant transfers over 80+ countries all
                <br />
                over the world.
              </h2>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-6">
                  <div className="free-box free-color-one text-center">
                    <img src={freeIcon1} alt="pic--" />
                    <h3>Cash pick up</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                  <div className="free-box free-color-two text-center">
                    <img src={freeIcon2} alt="pic--" />
                    <h3>Mobile payment</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                  <div className="free-box free-color-two text-center">
                    <img src={freeIcon3} alt="pic--" />
                    <h3>Bank transfers</h3>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                  <div className="free-box free-color-two text-center">
                    <img src={freeIcon4} alt="pic--" />
                    <h3>Airtime</h3>
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

export default FreeInstantArea;
