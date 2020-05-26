import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/agentInfo/AddAgent.css";

const AddAgent: React.FC = () => {
  return (
    <section className="add_agent">
      <h3>Add Agent</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, in?</p>
      <Link to="/">Add as your agent</Link>
    </section>
  );
};

export default AddAgent;
