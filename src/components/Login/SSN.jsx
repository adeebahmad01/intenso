import React from "react";
import { SmallContainer } from "../../utils/FormContainers";
import { ReactComponent as BankLogo } from "../../assets/images/bank-logo.svg";
import GroundWrapper from "../../utils/GroundWrapper";
import { useNavigate } from "react-router-dom";
const SSN = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard/send");
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
        <form onSubmit={handleSubmit} className="form-signup text-left">
          <div className="form-group receive-box mt_20">
            <label htmlFor="inputCountry">SSN</label>
            <input
              className="input-info"
              type="text"
              placeholder="YYYYMMDD****"
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
