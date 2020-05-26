import * as React from "react";
import { Link } from "react-router-dom";
import StarRatingUI from "../../utils/StarRatingUI";
import "../../styles/agency/Agent.css";

interface AgentProps {
  agent: {
    id: number;
    name: string;
    phone: string;
    rating: number;
    totalRating: number;
    img: string;
  };
}

const Agent: React.FC<AgentProps> = ({ agent }) => {
  return (
    <section className="agent-card">
      <Link to={`/agent_info/${agent.id}`}>
        <div className="agent-image">
          <img src={agent.img} alt="Agency Profile" />
        </div>
        <div className="agent-info">
          <div>{agent.name}</div>
          <div>{agent.phone}</div>
          <StarRatingUI rating={agent.rating} />
          <div className="small-text">{agent.totalRating} total reviews</div>
        </div>
      </Link>
    </section>
  );
};

export default Agent;
