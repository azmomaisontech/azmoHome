import * as React from "react";
import "../styles/agentInfo/AgentInfo.css";
import ContactAgent from "../component/agentInfoPage/ContactAgent";
import Profile from "../component/agentInfoPage/Profile";
import AddAgent from "../component/agentInfoPage/AddAgent";
import ProfileInfo from "../component/agentInfoPage/ProfileInfo";
import ActiveListing from "../component/agentInfoPage/ActiveListing";
import AgentRatings from "../component/agentInfoPage/AgentRatings";

const AgentInfo: React.FC = () => {
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
    }
  ];
  return (
    <main id="agent_info">
      <div className="container">
        <div className="left">
          <Profile agent={agents[0]} />
          <ActiveListing />
          <AgentRatings />
        </div>
        <div className="right">
          <ContactAgent />
          <AddAgent />
          <ProfileInfo />
        </div>
      </div>
    </main>
  );
};

export default AgentInfo;
