import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import currencies from "../../data/currencies";
import ReactSelect from "../../lib/ReactSelect";
import { SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [country, setCountry] = useState(currencies[0].options[0]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    if (state && state.countryName) {
      setCountry(
        currencies[1].options.find((c) => c.country === state.countryName)
      );
    }
  }, [state]);
  const onSubmit = (values) => {
    navigate("../ssn", {
      state: {
        countryName: country.country,
        ...values,
      },
    });
  };
  return (
    <GroundWrapper>
      <SmallContainer className="text-center my-5">
        <div className="headings">
          <h1 className="text-lg pb-2 font-weight-bold">Create your account</h1>
          <h2 className="text-small">It’s free and easy</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-signup container-fluid text-left"
        >
          <div className="form-group country-box mt_25">
            <label htmlFor="youSend">Country</label>
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
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">Phone number</label>
            <div className="input-info d-flex justify-content-center align-items-center">
              <div className="border-right d-flex justify-content-center align-items-center pr-3 h-100">
                {country.countryCode}
              </div>
              <input
                className="w-100 h-100 input-info"
                type="text"
                maxLength={10}
                onKeyDown={(e) =>
                  [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "0",
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "ArrowUp",
                    "ArrowDown",
                    " ",
                  ].indexOf(e.key) === -1 && e.preventDefault()
                }
                placeholder="874 2032450"
                {...register("phone", {
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">E-mail</label>
            <input
              className="input-info"
              type="text"
              placeholder="nnn@ddd.com"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="form-group receive-box mt_20 d-flex">
            <div>
              <input
                type="checkbox"
                className="custom-checkbox mr-0"
                name="terms"
                id="terms"
                required
              />
            </div>
            <label htmlFor="terms" className="w-auto font-weight-normal pl-3">
              By creating an account means you agree to the{" "}
              <b>Terms and Conditions</b>, and our <b>Privacy Policy</b>.
            </label>
          </div>
          <div className="text-center">
            <button type="submit" className="send-btn w-100 mt_30">
              Next
            </button>
          </div>
        </form>
      </SmallContainer>
    </GroundWrapper>
  );
};

export default SignupForm;
