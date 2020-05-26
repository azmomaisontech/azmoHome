import * as React from "react";
import ShowMore from "react-show-more";
import StarRatingUI from "../../utils/StarRatingUI";
import "../../styles/agentInfo/Profile.css";

interface ProfileProps {
  agent: {
    img: string;
    name: string;
    phone: string;
    rating: number;
    totalRating: number;
  };
}

const Profile: React.FC<ProfileProps> = ({ agent }) => {
  return (
    <section className="agency-profile">
      <section className="agent-card">
        <div className="agent-image">
          <img src={agent.img} alt="Agency Profile" />
        </div>
        <div className="agent-info">
          <h2>{agent.name}</h2>
          <div>{agent.phone}</div>
          <StarRatingUI rating={agent.rating} />
          <div className="small-text">{agent.totalRating} total reviews</div>
        </div>
      </section>
      <section className="about-us">
        <h2 className="m-headings">About Us</h2>
        <h3>13 years experience</h3>
        <p>Specialties : Buyer's Agent,Listing Agent,Relocation,Consulting,Property Management</p>
        <ShowMore>
          Our team has over 20 years of real estate experience in Mobile and Baldwin County. We have helped over one
          thousand clients buy and sell and have successfully closed over $1 billion dollars for happy clients. In 2014,
          The Carpenter Team ranked 4th in closed transactions in the Gulf State Region of Keller Williams Realty. In
          2015, we moved to Bellator Real Estate & Development. The Carpenter Team sold over $14 million and closed 161
          homes to earn the Double Diamond award. We ranked #5 in Mobile in sales volume out of 1087 active agents. In
          August 2017, we opened RE/MAX Legacy Group. Since opening the office, we have closed over $25 million dollars
          in almost 150 transactions. We are excited to continue to help clients in both Mobile and Baldwin county buy
          and sell real estate! At The Carpenter Team, we work full-time in developing relationships with our clients.
          We believe that when we are fully connected to the success of helping our clients reach their goals of buying
          or selling real estate, everyone wins! Our goal is for you to be so outrageously happy with your experience
          with The Carpenter Team that you gladly introduce us to at least 2 people who are just like you and need to
          buy or sell a home. In fact, by spending our time working by referral, we have more time to devote to our
          current and past clients! No one will work harder to help you get your property SOLD! We understand that this
          is the largest purchase/sale you make in your life and know that it can be really stressful. We commit our
          time and expertise to taking care of all of the details for you and keeping you updated during the entire
          sales process. At The Carpenter Team, we are fierce negotiators and work hard to get you the most for your
          home when selling and the best deal when buying. We also have a full-time Executive Assistant to help you
          navigate the sales process and a Listing Manager to be sure you know what we are doing to get your home SOLD!
          We look forward to helping you buy or sell in 2020!
        </ShowMore>
      </section>
    </section>
  );
};

export default Profile;
