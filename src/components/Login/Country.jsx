import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import currencies from "../../data/currencies";
import ReactSelect from "../../lib/ReactSelect";
import { SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";

const Country = () => {
  const [country, setCountry] = useState(currencies[0].options[0]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../ssn");
  };
  return (
    <GroundWrapper>
      <SmallContainer>
        <div className="headings mb-3 text-center">
          <h1 className="text-lg pb-2 font-weight-bold">Create your account</h1>
          <h2 className="text-small">It’s free and easy</h2>
          <label className="text-caption mt-4">
            inloggning med Mobilt BankID
          </label>
        </div>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="form-group country-box mt_25">
            <label>Country</label>
            <div className="input-group position-relative">
              <ReactSelect
                dropdownClassName="w-100"
                Target={(p) => (
                  <div
                    {...p}
                    className="input-group-append country-input-group"
                  >
                    <div className="w-100">
                      <span className="input-group-text custom-select form-select p-0">
                        <span className="px-2 py-1 d-block w-100 h-100">
                          <span className="text-secondary d-flex h-100 w-100 align-items-center">
                            <span
                              className={`currency-flag ${country.flag} mr-1`}
                            />
                            &nbsp; &nbsp;
                            {country.country}
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                options={currencies}
                placeholder="Select Currency"
                onChange={setCountry}
                value={country}
                type="other"
                field="country"
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="send-btn w-100 mt-5">
              Logga in
            </button>
          </div>
        </form>
      </SmallContainer>
    </GroundWrapper>
  );
};

export default Country;
