import * as React from "react";

interface AgentProps {
  agent: {
    id: number;
    name: string;
    phone: string;
    img: string;
  };
}

const Agent: React.FC<AgentProps> = ({ agent }) => {
  return <h1>{agent.name}</h1>;
};

export default Agent;
