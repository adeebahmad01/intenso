import React, { useState } from "react";
import currencies from "../../data/currencies";
import ReactSelect from "../../lib/ReactSelect";
import { SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import Stepper from "../../utils/Stepper";
import { ReactComponent as Download } from "../../assets/images/download-icon.svg";
import { ReactComponent as File } from "../../assets/images/file-icon.svg";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const [country, setCountry] = useState(currencies[0].options[0]);
  const [citizenship, setCitizenship] = useState(currencies[0].options[0]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/send");
  };
  return (
    <GroundWrapper>
      <Stepper className="mt-5 pt-5" />
      <SmallContainer className="mt-3 mb-5">
        <div className="headings text-center">
          <h1 className="text-lg pb-2 font-weight-bold">
            Document verifications
          </h1>
          <h2 className="text-small">
            We only process the document for our internal Compliance
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 px-2">
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
          <div className="form-group country-box mt_25">
            <label>CitizenShip</label>
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
                              className={`currency-flag ${citizenship.flag} mr-1`}
                            />
                            &nbsp; &nbsp;
                            {citizenship.country}
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                )}
                options={currencies}
                placeholder="Select Currency"
                onChange={setCitizenship}
                value={citizenship}
                type="other"
                field="country"
              />
            </div>
          </div>
          <div className="form-group country-box mt_25">
            <label>Select document to upload</label>
            <div className="input-group position-relative">
              <select
                className="input-info form-select custom-select"
                defaultValue=""
              >
                <option disabled value="">
                  Select document
                </option>
                <option value="passport">Passport</option>
                <option value="id_card">ID Card</option>
                <option value="driving_license">Driving License</option>
              </select>
            </div>
          </div>
          <div className="form-group country-box mt_25">
            <label
              htmlFor="front-doc"
              className="d-flex w-100 font-weight-normal align-items-center justify-content-between"
            >
              <span className="d-flex align-items-center">
                <File className="mr-3" />{" "}
                <span className="text-small text-muted">
                  Upload the front of your document
                </span>
              </span>
              <span className="btn d-flex justify-content-center align-items-center input-info w-auto border-blue border">
                Upload <Download className="ml-2" />
              </span>
            </label>
            <input type="file" name="front-doc" id="front-doc" hidden />
          </div>
          <div className="form-group country-box mt_25">
            <label
              htmlFor="back-doc"
              className="d-flex w-100 font-weight-normal align-items-center justify-content-between"
            >
              <span className="d-flex align-items-center">
                <File className="mr-3" />{" "}
                <span className="text-small text-muted">
                  Upload the Back of your document
                </span>
              </span>
              <span className="btn d-flex justify-content-center align-items-center input-info w-auto border-blue border">
                Upload <Download className="ml-2" />
              </span>
            </label>
            <input type="file" name="back-doc" id="front-doc" hidden />
          </div>
          <div className="form-group">
            <div className="text-center">
              <button type="submit" className="send-btn w-100 mt-4">
                Sign up
              </button>
            </div>
          </div>
        </form>
      </SmallContainer>
    </GroundWrapper>
  );
};

export default Documents;
