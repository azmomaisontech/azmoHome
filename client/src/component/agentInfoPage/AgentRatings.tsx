import * as React from "react";
import { Link } from "react-router-dom";
import StarRatingUI from "../../utils/starRating/StarRatingUI";
import "../../styles/agentInfo/AgentRatings.css";

const AgentRatings: React.FC = () => {
  return (
    <section className="ratings">
      <div className="top">
        <h2 className="m-headings">Ratings & Reviews</h2>
        <Link to="/agent_info/2/rating">Write a review</Link>
      </div>
      <div className="rating">
        <StarRatingUI rating={1} />
        <p>
          <strong>Service Provided : </strong>
          Sold me a land
        </p>
        <p>
          She is a Godly lady. She will go above and beyond to get the job done. And she had our home sold in 27 days
          after another realtor could not do it in 7 months. With the few tip she gave us to do around the house that
          were very cheap. It sold quick.
        </p>
        <p className="bold-text">
          <strong> Moses Aizee</strong>
        </p>
      </div>
    </section>
  );
};

export default AgentRatings;
