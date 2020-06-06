import React, { useState } from "react";
import StarRatingUI from "../../utils/starRating/StarRatingUI";
import moneyConverter from "../../utils/moneyConverter/moneyConverter";
import ContactAgent from "./ContactAgent";
import Modal from "../../utils/modal/Modal";
import "../../styles/property/PropertyInfo.css";

interface PropertyInfoProps {
  info: {
    price: number;
    bed: number;
    bath: number;
    size: number;
    address: string;
    type: string;
    overview: string;
    agent: string;
    yearBuilt: string;
    parking: string;
    phone: string;
    rating: number;
    totalRating: number;
    img: string;
  };
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ info }) => {
  const { price, bed, bath, size, address, type, agent, yearBuilt, parking, phone, rating, totalRating, img } = info;

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const dismissable = () => {
    setModalOpen(false);
  };

  let children;
  if (modalOpen) {
    children = <ContactAgent />;
  }

  return (
    <section className="property-info">
      <div className="fixed-section">
        <nav>
          <ul>
            <li>
              <i className="far fa-heart"></i>Save
            </li>
          </ul>
        </nav>
        <header>
          <div className="info">
            <span className="large-text">{moneyConverter("USD", price)}</span>
            <span>
              <strong>{bed}</strong> bed | <strong>{bath}</strong> ba | <strong>{size} </strong>sqft
            </span>
          </div>
          <div className="address">
            <p>{address}</p>
          </div>
          <button onClick={handleModalOpen}>Contact agent</button>
          <Modal visible={modalOpen} dismiss={dismissable} children={children} />
        </header>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus nemo, aliquid accusantium repellendus
          nostrum. Laboriosam rerum quo ab nesciunt harum non debitis ipsum doloremque dicta, culpa, excepturi
          dignissimos quas perferendis similique sapiente distinctio explicabo tempora. Eos labore perspiciatis nobis
          nostrum, tempora quasi nulla, recusandae reprehenderit ducimus sit dolores illum.
        </p>
      </div>
      <div className="listing-agent">
        <h3>Listing Agency</h3>
        <div className="agent">
          <div className="agent-image">
            <img src={img} alt="Agency Profile" />
          </div>
          <div className="agent-info">
            <div>{agent}</div>
            <div>{phone}</div>
            <StarRatingUI rating={rating} />
            <div className="small-text">{totalRating} total reviews</div>
          </div>
        </div>
      </div>
      <div className="features">
        <h3>Home Features</h3>
        <div className="grid-container">
          <div>
            <strong>Type: </strong>
            {type}
          </div>
          <div>
            <strong>Year built: </strong>
            {yearBuilt}
          </div>
          <div>
            <strong>Parking: </strong>
            {parking}
          </div>
          <div>
            <strong>Size: </strong>
            {size} Sqft
          </div>
          <div>
            <strong>Street: </strong>
            Gated
          </div>
          <div>
            <strong>Units: </strong>4
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
