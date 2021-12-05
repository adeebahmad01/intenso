import React from "react";
import { Route, Routes } from "react-router-dom";
import SSN from "../components/Signup/SSN";
import CountryInfo from "../components/Signup/CountryInfo";
import Home from "../pages/Home";
import GroundWrapper from "../utils/GroundWrapper";
import Identity from "../components/Signup/Identity";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<GroundWrapper />} />
      <Route path="/signup">
        <Route path="country" element={<CountryInfo />} />
        <Route path="ssn" element={<SSN />} />
        <Route path="identity" element={<Identity />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
