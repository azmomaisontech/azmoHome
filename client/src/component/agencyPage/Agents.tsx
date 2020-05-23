import * as React from "react";
import Agent from "./Agent";

const Agents: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Testing",
      phone: "081311111111",
      rating: 5,
      img: "picture.jpg"
    },
    {
      id: 2,
      name: "Testing",
      phone: "081311111111",
      rating: 5,
      img: "picture.jpg"
    },
    {
      id: 3,
      name: "Testing",
      phone: "081311111111",
      rating: 5,
      img: "picture.jpg"
    }
  ];

  return (
    <section>
      {agents.map(agent => (
        <Agent key={agent.id} agent={agent} />
      ))}
    </section>
  );
};

export default Agents;
