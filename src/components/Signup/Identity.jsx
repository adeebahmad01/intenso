import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LargeContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import Stepper from "../../utils/Stepper";
import { useForm } from "react-hook-form";

const Identity = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    console.log(state);
    if (!state.email) {
      navigate("../country", { state });
    }
  }, [state, navigate]);
  const onSubmit = (values) => {
    navigate("../documents", {
      state: {
        ...state,
        ...values,
      },
    });
  };
  return (
    <GroundWrapper>
      <Stepper active={2} className="mt-5 pt-5" />
      <LargeContainer className="mb-5 mt-3">
        <div className="headings text-center mb-4">
          <h1 className="text-lg pb-2 font-weight-bold">
            Identity verifications
          </h1>
          <label className="text-caption text-muted font-weight-normal">
            Please check if all your details are correct
          </label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="/">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">First name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Sweden"
                    defaultValue={state.firstName}
                    {...register("firstName", { required: true })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Last name</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="Sweden"
                    defaultValue={state.lastName}
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">SSN</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="YYYYMMDD****"
                    defaultValue={state.ssn}
                    {...register("ssn", { required: true })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Address</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="xxxxxxxxxxx"
                    defaultValue={state.address}
                    {...register("address", { required: true })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">Postal Code</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="xxxxxxxxxxx"
                    defaultValue={state.postalCode}
                    {...register("postalCode", { required: true })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group receive-box mt_20">
                  <label htmlFor="inputCountry">City</label>
                  <input
                    className="input-info"
                    type="text"
                    placeholder="City"
                    defaultValue={state.cityName}
                    {...register("cityName", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="text-center">
                  <button type="submit" className="send-btn w-100 mt-4">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </LargeContainer>
    </GroundWrapper>
  );
};

export default Identity;
