import React from "react";
import FreeInstantArea from "../components/Home/FreeInstantArea";
import FreeInstantAreaNext from "../components/Home/FreeInstantAreaNext";
import MultiFunction from "../components/Home/MultiFunction";
import ReadyAdventure from "../components/Home/ReadyAdventure";
import Transfters from "../components/Home/Transfters";
import WorkArea from "../components/Home/WorkArea";

const Home = () => {
  return (
    <main>
      <Transfters />
      <FreeInstantArea />
      <FreeInstantAreaNext />
      <WorkArea />
      <MultiFunction />
      <ReadyAdventure />
    </main>
  );
};

export default Home;
