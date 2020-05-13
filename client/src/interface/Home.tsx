import * as React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Main from "../component/Main";
import HowItWorks from "../component/HowItWorks";
import TopProperties from "../component/TopProperties";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <Main />
      <HowItWorks />
      <TopProperties />
    </React.Fragment>
  );
};

export default Home;
