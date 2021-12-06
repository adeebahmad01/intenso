import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpSSN from "../components/Signup/SSN";
import SignupCountryInfo from "../components/Signup/CountryInfo";
import Home from "../pages/Home";
import GroundWrapper from "../utils/GroundWrapper";
import Identity from "../components/Signup/Identity";
import Documents from "../components/Signup/Documents";
import LoginCountryInfo from "../components/Login/Country";
import SendMoney from "../components/Dashboard/SendMoney";
import Success from "../components/Dashboard/Success";
import LoginSSN from "../components/Login/SSN";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<GroundWrapper />} />
      <Route path="/signup">
        <Route path="country" element={<SignupCountryInfo />} />
        <Route path="ssn" element={<SignUpSSN />} />
        <Route path="identity" element={<Identity />} />
        <Route path="documents" element={<Documents />} />
      </Route>
      <Route path="/login">
        <Route path="country" element={<LoginCountryInfo />} />
        <Route path="ssn" element={<LoginSSN />} />
      </Route>
      <Route path="/dashboard">
        <Route path="send" element={<SendMoney />} />
        <Route path="success" element={<Success />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
