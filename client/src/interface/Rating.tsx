import * as React from "react";
import "../styles/rating/Rating.css";
import AddRating from "../component/ratingPage/AddRating";

const Rating: React.FC = () => {
  return (
    <main id="new_review">
      <div className="container">
        <AddRating />
      </div>
    </main>
  );
};

export default Rating;
