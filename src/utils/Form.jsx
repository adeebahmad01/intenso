import React, { useState } from "react";
import currencies from "../data/currencies";
import ReactSelect from "../lib/ReactSelect";
import alarmIcon from "../assets/images/alerm-icon.svg";
import errorIcon from "../assets/images/error-icon.svg";
import feesIcon from "../assets/images/fees-icon.svg";
const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].options[0]);
  const [sendingCurr, setsendingCurr] = useState(currencies[0].options[0]);
  const [receivingCurr, setreceivingCurr] = useState(currencies[0].options[0]);
  return (
    <div className="col-lg-5 col-md-12 order-lg-2">
      <div className="home-right-box">
        <div className="text-center">
          <h4>Send money abroad</h4>
        </div>
        <div className="form-group country-box mt_25">
          <label htmlFor="youSend">Country</label>
          <div className="input-group position-relative">
            <ReactSelect
              dropdownClassName="w-100"
              Target={(p) => (
                <div {...p} className="input-group-append country-input-group">
                  {" "}
                  <span className="input-group-text custom-select form-select p-0">
                    <span className="px-2 py-1 d-block w-100 h-100">
                      <span className="text-secondary d-flex h-100 w-100 align-items-center">
                        <span
                          className={`currency-flag ${currency.flag} me-1`}
                        />{" "}
                        &nbsp;
                        {currency.short}
                      </span>
                    </span>
                  </span>
                </div>
              )}
              options={currencies}
              placeholder="Select Currency"
              onChange={setCurrency}
              value={currency}
              type="currency"
            />
          </div>
        </div>
        <div className="form-group receive-box mt_20">
          <label htmlFor="inputCountry">Receiving method</label>
          <select
            className="custom-select form-select"
            id="inputCountry"
            name="country_id"
          >
            <option value>Mobile</option>
            <option value={244}>Telephone</option>
          </select>
        </div>
        <div className="form-group receive-box mt_20">
          <label htmlFor="inputCountry">Delivery channel</label>
          <input className="input-info" type="text" placeholder="Channel 1" />
        </div>
        <div>
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">You Send</label>
            <div className="d-flex align-items-center">
              <input className="input-info" type="text" placeholder={840} />
              <ReactSelect
                Target={(p) => (
                  <div
                    {...p}
                    className="send-box w-auto h-100 form-select custom-select input-group-append country-input-group"
                  >
                    <div className="bg-transparent border-0">
                      <div className="input-group-text bg-transparent p-0 h-100">
                        <span className="px-2 py-1">
                          <span className="text-secondary">
                            <span
                              className={`currency-flag ${sendingCurr.flag} mr-1`}
                            />{" "}
                            &nbsp;
                            {sendingCurr.short}
                          </span>
                        </span>
                      </div>
                    </div>{" "}
                  </div>
                )}
                options={currencies}
                placeholder="Select Currency"
                onChange={setsendingCurr}
                value={sendingCurr}
                type="currency"
              />
            </div>
          </div>
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">Receipient will receive</label>
            <div className="d-flex align-items-center">
              <input className="input-info" type="text" placeholder={100} />
              <ReactSelect
                dropdownClassName={"w-auto position-relative"}
                Target={(p) => (
                  <div
                    {...p}
                    className="send-box w-auto h-100 form-select custom-select input-group-append country-input-group"
                  >
                    <div className="bg-transparent border-0">
                      <div className="input-group-text bg-transparent p-0 h-100">
                        <span className="px-2 py-1">
                          <span className="text-secondary">
                            <span
                              className={`currency-flag ${receivingCurr.flag} mr-1`}
                            />{" "}
                            &nbsp;
                            {receivingCurr.short}
                          </span>
                        </span>
                      </div>
                    </div>{" "}
                  </div>
                )}
                options={currencies}
                placeholder="Select Currency"
                onChange={setreceivingCurr}
                value={receivingCurr}
                type="currency"
              />
            </div>
          </div>
        </div>
        <p className="exchange-text">
          <img className="mr_5" src={alarmIcon} alt="pic--" />
          Exchange rate : 1 SEK{" "}
          <img className="mr_5 ml_5" src={errorIcon} alt="pic--" /> 0,121 SEK
        </p>
        <p className="exchange-text mt_15">
          <img className="mr_5" src={feesIcon} alt="pic--" />
          Exchange rate : 1 SEK
        </p>
        <div className="total-text mt_20 d-flex align-items-center justify-content-between">
          <h3>Total to Pay:</h3>
          <h3>4,38€</h3>
        </div>
        <div className="text-center">
          <button type="button" className="send-btn mt_30">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
