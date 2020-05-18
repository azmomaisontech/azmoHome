import * as React from "react";
import NavBar from "../component/homePage/NavBar";
import Main from "../component/homePage/Main";
import TopProperties from "../component/homePage/TopProperties";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Main />
      <TopProperties />
    </React.Fragment>
  );
};

export default Home;
