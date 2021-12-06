import React from "react";
import { SmallContainer } from "../../utils/FormContainers";
import GroundWrapper from "../../utils/GroundWrapper";
import { ReactComponent as TransactionSuccess } from "../../assets/images/transaction-success.svg";

const Success = () => {
  return (
    <GroundWrapper>
      <SmallContainer style={{ maxWidth: 400 }} className="my-5">
        <div>
          <TransactionSuccess className="w-100 h-auto" />
        </div>
        <div className="text-center">
          <h2 className="mb-3">Your Transaction was succeessful</h2>
          <p className="text-small mb-3">
            We will notify you once your receipient receive the transfers
          </p>
          <h1 className="mb-4">SEK 840,00</h1>
          <div className="text-caption">Transaction done on 18 April 2021.</div>
        </div>
      </SmallContainer>
    </GroundWrapper>
  );
};

export default Success;
