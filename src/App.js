import React from "react";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/currency-flags.min.css";
import "./assets/css/helper.css";
import "./App.css";
import "./assets/css/responsive.css";
import useEventListener from "./hooks/useEventListener";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
  useEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
