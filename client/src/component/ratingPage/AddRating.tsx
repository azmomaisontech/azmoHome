import * as React from "react";
import { Link } from "react-router-dom";
import StarRatingUI from "../../utils/starRating/StarRatingUI";
import "../../styles/rating/AddRating.css";

const AddRating: React.FC = () => {
  return (
    <section className="rating">
      <Link to="/agent_info/2">View Profile</Link>
      <div className="grid-container">
        <div className="new-rating">
          <h2 className="m-headings">Write a review</h2>
          <form>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input type="number" min={1} max={5} name="rating" id="rating" />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service provided</label>
              <select name="service" id="service">
                <option>Choose One</option>
                <option value="">Listed and sold a home/land</option>
                <option value=""> Listed and Rented a Home/Land</option>
                <option value=""> Managed my property</option>
                <option value="">None. We connected but did not work out</option>
                <option value="">Never responded to my inquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="review">Describe in details your experience with Mary Carpenter</label>
              <textarea name="review" id="review" cols={30} rows={10}></textarea>
            </div>
            <div className="form-group-spec">
              <input type="checkbox" id="declaration" name="declaration" value="declaration" />
              <label htmlFor="declaration">I promise this review is honest and respectful</label>
            </div>
            <button type="submit">Submit this review</button>
          </form>
        </div>
        <div className="agent-profile">
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
              alt="Profile"
            />
            <div className="info">
              <h2>Azmo Maison</h2>
              <StarRatingUI rating={3} />
              <p>13 years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRating;
