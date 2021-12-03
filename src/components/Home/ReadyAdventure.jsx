import React from "react";
import bg from "../../assets/images/ready-bg.png";
import googleIcon from "../../assets/images/google-icon.png";
import appIcon from "../../assets/images/app-icon.png";
import readyImg from "../../assets/images/ready-img.png";
const ReadyAdventure = () => {
  return (
    <div
      className="ready-adventure-wrapper"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-2 ready-img">
            <img
              data-aos="fade-left"
              className="img-fluid"
              src={readyImg}
              alt="pic--"
            />
          </div>
          <div className="col-lg-7 order-lg-1">
            <div className="ready-content">
              <h2 data-aos="fade-right">Are you ready adventure with us?</h2>
              <p data-aos="fade-right">
                Download the app to send money to your family &amp; loved
                <br />
                one<span>( Coming soon )</span>
              </p>
              <div
                data-aos="fade-right"
                className="social-play d-flex align-items-center"
              >
                <a href="/">
                  <img src={googleIcon} alt="pic--" />
                </a>
                <a className="app-icon" href="/">
                  <img src={appIcon} alt="pic--" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyAdventure;
