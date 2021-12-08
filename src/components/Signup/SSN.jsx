import React from "react";
import { SmallContainer } from "../../utils/FormContainers";
import { ReactComponent as BankLogo } from "../../assets/images/bank-logo.svg";
import GroundWrapper from "../../utils/GroundWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SSN = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log({
      ...values,
      ...state,
    });
    navigate("../identity", {
      state: {
        ...state,
        ...values,
      },
    });
  };
  return (
    <GroundWrapper>
      <SmallContainer className="text-center my-5">
        <div className="headings mb-5">
          <h1 className="text-lg pb-2 font-weight-bold">Create your account</h1>
          <h2 className="text-small">It’s free and easy</h2>
          <label className="text-caption mt-4">
            inloggning med Mobilt BankID
          </label>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-signup text-left"
        >
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">SSN</label>
            <input
              className="input-info"
              type="text"
              pattern="^[0-9]{6}[0-9]{4}$"
              placeholder="YYYYMMDD****"
              defaultValue={state.ssn}
              {...register("ssn", {
                required: true,
                pattern: /^[0-9]{6}[0-9]{4}$/,
              })}
            />
          </div>
          <div className="mt-2 text-muted text-caption">
            <BankLogo width={20} height={20} /> We only support MobilBankID sign
            up
          </div>
          <div className="text-center">
            <button type="submit" className="send-btn w-100 mt-5">
              Logga in
            </button>
          </div>
        </form>
      </SmallContainer>
    </GroundWrapper>
  );
};

export default SSN;
