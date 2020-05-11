import * as React from "react";

const TopHome: React.FC = () => {
  return (
    <section id="tophome">
      <p>
        <i className="fas fa-map-marker-alt"></i>
        {"  "} 9721 Glen Creek Ave, Ballston Spa, NY
      </p>
      <h2>Villa 9721 Glen Creek</h2>
      <div>
        <span className="gray-text"> Start From:</span> <span className="text-bold"> $300,000</span>
      </div>
      <div className="house-info">
        <div className="info">
          <i className="fas fa-map-signs"></i>
          <p>5201 Sqft</p>
        </div>
        <div className="info">
          <i className="fas fa-bed"></i>
          <p>8 Bed Room</p>
        </div>
        <div className="info">
          <i className="fas fa-bath"></i>
          <p>7 Bath Room</p>
        </div>
        <div className="info">
          <i className="fas fa-car"></i>
          <p>1 Garage</p>
        </div>
      </div>
    </section>
  );
};

export default TopHome;
