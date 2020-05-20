import * as React from "react";
import Main from "../component/homePage/Main";
import TopProperties from "../component/homePage/TopProperties";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Main />
      <TopProperties />
    </React.Fragment>
  );
};

export default Home;
