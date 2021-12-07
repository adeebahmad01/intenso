import React from "react";
import image from "../assets/images/home-bg.png";
const GroundWrapper = (p) => (
  <section
    {...p}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      fontFamily: `'Montserrat', sans-serif`,
      ...p.style,
    }}
    className={`d-flex py-5 px-2 flex-column align-items-center ground_wrapper justify-content-center ${p.className}`}
  />
);

export default GroundWrapper;
