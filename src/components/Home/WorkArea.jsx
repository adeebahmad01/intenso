import React from "react";
import howImg from "../../assets/images/how-img.png";
import LineOne from "../../assets/images/Line-one.png";
const WorkArea = () => {
  return (
    <section>
      <div className="how-work-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 how-img">
              <img
                data-aos="fade-right"
                className="img-fluid"
                src={howImg}
                alt
              />
            </div>
            <div className="col-lg-6">
              <div className="how-work-content">
                <h2 data-aos="fade-top" className="how-head">
                  How’s work ?
                </h2>
                <div
                  data-aos="fade-left"
                  className="
              how-number-first how-number-content
              position-relative
              mt_35
            "
                >
                  <img className="line-one" src={LineOne} alt />
                  <div className="d-flex align-items-start custom-flex">
                    <div className="how-number-text">
                      <span className="number-box" />
                      <p>
                        <span>0</span>1
                      </p>
                    </div>
                    <p className="how-para">
                      Register with bankID to secure <br />
                      your account.
                    </p>
                  </div>
                  <h4 className="sign-head">Sign Up quickly</h4>
                </div>
                <div
                  data-aos="fade-left"
                  className="how-number-second how-number-content"
                >
                  <div className="d-flex align-items-start custom-flex">
                    <div className="how-number-text">
                      <span className="number-box" />
                      <p>
                        <span>0</span>2
                      </p>
                    </div>
                    <p className="how-para">
                      Upload your ID so we can verify who
                      <br />
                      you are, this will help us to complain
                      <br />
                      with the national regualtions.
                    </p>
                  </div>
                  <h4 className="sign-head">ID verifications</h4>
                </div>
                <div
                  data-aos="fade-left"
                  className="how-number-three how-number-content"
                >
                  <div className="d-flex align-items-start custom-flex">
                    <div className="how-number-text">
                      <span className="number-box" />
                      <p>
                        <span>0</span>3
                      </p>
                    </div>
                    <p className="how-para">
                      Details of your receipient should be
                      <br />
                      clearly stated in details to avoid
                      <br />
                      delay while making the payments.
                    </p>
                  </div>
                  <h4 className="sign-head">Add Beneficiary</h4>
                </div>
                <div
                  data-aos="fade-left"
                  className="
              how-number-second how-number-content how-number-four
              position-relative
            "
                >
                  <img className="line-two" src={LineOne} alt />
                  <div className="d-flex align-items-start custom-flex">
                    <div className="how-number-text">
                      <span className="number-box" />
                      <p>
                        <span>0</span>4
                      </p>
                    </div>
                    <p className="how-para">
                      Choose payment method and
                      <br />
                      we will handle the rest, in a<br />
                      click your money will be remitt
                      <br />
                      to your loved one.
                    </p>
                  </div>
                  <h4 className="sign-head text-center">
                    Fund Transfer To Local
                    <br />
                    Bank or others method
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkArea;
