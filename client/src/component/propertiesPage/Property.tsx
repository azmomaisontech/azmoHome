import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/properties/Property.css";

interface PropertyProps {
  property: {
    id: number;
    price: number;
    address: string;
    type: string;
    bed: number;
    bath: number;
    size: number;
    image: string;
  };
}

const Property: React.FC<PropertyProps> = ({ property }) => {
  const [heart, showHeart] = useState(false);

  const handleClicked = (id: number) => {
    showHeart(!heart);
    console.log("clicked", id);
  };

  const { id, price, address, type, bed, bath, size, image } = property;
  return (
    <div className="property">
      <Link to={`property/${id}`}>
        <div className="img">
          <img src={image} alt="Property" />
        </div>
        <div className="info">
          <h3>${price}</h3>
          <p>{address}</p>
          <p>
            {bed} bed | {bath} ba | {size} sqft
          </p>
          {type === "sale" ? (
            <p>
              {" "}
              <span className="red"></span> House for sale
            </p>
          ) : (
            <p>
              <span className="blue"></span> House for rent
            </p>
          )}
        </div>
      </Link>
      <div className="save" onClick={() => handleClicked(id)}>
        <div className="heart">
          <div className="before" style={{ background: "transparent" }}></div>
          <div className="after" style={{ background: "transparent" }}>
            >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
