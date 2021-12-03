import React from "react";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/currency-flags.min.css";
import "./assets/css/helper.css";

import "./App.css";
import "./assets/css/responsive.css";
import Home from "./pages/Home";
import useEventListener from "./hooks/useEventListener";

const App = () => {
  useEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
  });
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
