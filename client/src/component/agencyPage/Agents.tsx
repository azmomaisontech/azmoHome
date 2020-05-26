import * as React from "react";
import Agent from "./Agent";
import "../../styles/agency/Agents.css";

const Agents: React.FC = () => {
  const agents = [
    {
      id: 1,
      name: "Testing",
      phone: "081311111111",
      city: "portharcourt",
      state: "Rivers",
      rating: 3,
      totalRating: 100,
      img:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 2,
      name: "Testing",
      phone: "081311111111",
      city: "portharcourt",
      state: "Rivers",
      rating: 2,
      totalRating: 100,

      img:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 3,
      name: "Testing",
      phone: "081311111111",
      city: "portharcourt",
      state: "Rivers",
      rating: 1,
      totalRating: 100,

      img:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 4,
      name: "Testing",
      phone: "081311111111",
      city: "portharcourt",
      state: "Rivers",
      rating: 5,
      totalRating: 100,
      img:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 4,
      name: "Testing",
      phone: "081311111111",
      city: "portharcourt",
      state: "Rivers",
      rating: 5,
      totalRating: 100,

      img:
        "https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    }
  ];

  return (
    <section className="agents">
      {agents.map(agent => (
        <Agent key={agent.id} agent={agent} />
      ))}
    </section>
  );
};

export default Agents;
