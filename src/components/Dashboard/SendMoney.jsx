import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../utils/Form";
import GroundWrapper from "../../utils/GroundWrapper";

const SendMoney = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("../details");
  };

  return (
    <GroundWrapper>
      <Form onSubmit={onSubmit} />
    </GroundWrapper>
  );
};

export default SendMoney;
