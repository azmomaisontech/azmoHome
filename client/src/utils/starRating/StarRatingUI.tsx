import React from "react";
import "./StarRatingUI.css";

interface StarRatingUIProps {
  rating: number;
}

const StarRatingUI: React.SFC<StarRatingUIProps> = ({ rating }) => {
  // Total Stars Possible
  const starsTotal = 5;

  //Convert to Percentage, where 5 rating will be 100%
  const starPercentage = (rating / starsTotal) * 100;

  // Round to nearest 10
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="stars-outer">
      <div style={{ width: starPercentageRounded }} className="stars-inner"></div>
    </div>
  );
};

export default StarRatingUI;
