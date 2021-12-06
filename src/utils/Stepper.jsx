import React from "react";

const Stepper = ({ steps = 3, active = steps, ...p }) => (
  <div
    {...p}
    className={`d-flex justify-content-center align-items-center ${p.className}`}
  >
    {Array.from({ length: steps }).map((el, i) => {
      return <div className={`step${i >= active ? " step-active" : ""}`} />;
    })}
  </div>
);

export default Stepper;
