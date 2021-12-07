import React from "react";
import { useNavigate } from "react-router-dom";
import { SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import { ReactComponent as ExIcon } from "../../assets/images/exchange.svg";

const Summary = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../success");
  };
  return (
    <GroundWrapper>
      <div className="container-fluid">
        <div className="row mt-5 pt-5">
          <div className="col-lg-6">
            <SmallContainer className="mx-auto">
              <div className="headings text-center mb-4">
                <h1 className="text-lg pb-2 font-weight-bold">
                  New Beneficiary details
                </h1>
              </div>
              <form action="/">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">First name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Sweden"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Last name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Address (Optional)</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">City</label>
                  <select className="input-info custom-select" type="text">
                    <option value="">City</option>
                    <option value="paric">Paris</option>
                  </select>
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Mobile number</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Mobile number"
                  />
                </div>
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">
                    Purpose of Sending the fund
                  </label>
                  <select className="input-info custom-select">
                    <option value="">Familiy Support</option>
                    <option value="paric">Educational Purposes</option>
                    <option value="">Medical Purposes</option>
                    <option value="">Other</option>
                  </select>
                </div>
              </form>
            </SmallContainer>
          </div>
          <div className="col-lg-6">
            <SmallContainer>
              <form action="/" onSubmit={handleSubmit}>
                <div className="headings text-center mb-4">
                  <h1 className="text-lg pb-2 font-weight-bold">
                    Transaction summary
                  </h1>
                  <label className="text-caption font-weight-normal">
                    Total cost consist of the conversion rate and fees.
                  </label>
                </div>
                <div>
                  <b>Summary :</b>
                </div>
                <div className="border p-2 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 text-muted font-weight-bold">
                      Amount to send
                    </p>
                    <div className="text-caption text-muted">SEK</div>
                  </div>
                  <div
                    style={{
                      maxWidth: "170px",
                      width: "100%",
                    }}
                    className="input-info d-flex pr-5 align-items-center"
                  >
                    840
                  </div>
                </div>
                <div className="border p-2 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 text-muted font-weight-bold">
                      Amount to receive
                    </p>
                    <div className="text-caption text-muted">EURO</div>
                  </div>
                  <div
                    style={{
                      maxWidth: "170px",
                      width: "100%",
                    }}
                    className="input-info d-flex pr-5 align-items-center"
                  >
                    100
                  </div>
                </div>
                <div className="border p-2 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 text-muted font-weight-bold">
                      Conversion Rate
                    </p>
                    <div className="text-caption text-muted">Mondemi</div>
                  </div>
                  <div
                    style={{
                      maxWidth: "170px",
                      width: "100%",
                    }}
                    className="input-info d-flex pr-3 align-items-center"
                  >
                    1SEK <ExIcon className="mx-2" /> 0.121 SEK
                  </div>
                </div>
                <div className="border p-3 d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 text-muted font-weight-bold">Fees</p>
                    <div className="text-caption text-muted">
                      Transfers should arrive in
                    </div>
                  </div>
                  <div
                    style={{
                      maxWidth: "170px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "170px",
                        width: "100%",
                      }}
                      className="input-info mb-2 h-auto py-2 d-flex pr-3 align-items-center"
                    >
                      0,00
                    </div>
                    <div
                      style={{
                        maxWidth: "170px",
                        width: "100%",
                      }}
                      className="input-info h-auto py-2 d-flex pr-3 align-items-center"
                    >
                      10Mins
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center py-2">
                  <b>Total :</b>
                  <b className="text-muted">SEK 840,00</b>
                </div>
                <hr className="my-0" />
                <div className="d-flex justify-content-between align-items-center py-2">
                  <b className="text-muted text-caption">
                    Amount to be paid by customer:
                  </b>
                  <b>SEK 840,00</b>
                </div>
                <div className="text-small text-muted">
                  By clicking checkout you accept the Silente terms and
                  conditions and privacy policy.
                </div>
                <div className="text-center">
                  <button type="submit" className="send-btn w-100 mt-3">
                    Confirm
                  </button>
                </div>
              </form>
            </SmallContainer>
          </div>
        </div>
      </div>
    </GroundWrapper>
  );
};

export default Summary;
