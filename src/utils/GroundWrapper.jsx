import React from "react";
import image from "../assets/images/home-bg.png";
const GroundWrapper = ({ children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        fontFamily: `'Montserrat', sans-serif`,
      }}
      className="d-flex py-5 flex-column align-items-center ground_wrapper justify-content-center"
    >
      {children}
    </section>
  );
};

export default GroundWrapper;
