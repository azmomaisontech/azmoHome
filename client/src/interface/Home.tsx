import * as React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Main from "../component/Main";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default Home;
