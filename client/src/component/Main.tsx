import * as React from "react";
import TopHome from "./TopHome";
import "../styles/Main.css";

const Main: React.FC = () => {
  return (
    <main>
      <div className="container">
        <TopHome />
      </div>
    </main>
  );
};

export default Main;
