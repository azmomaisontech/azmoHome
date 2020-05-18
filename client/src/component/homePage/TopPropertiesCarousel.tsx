import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import image from "../../resources/ralph-kayden-2d4lAQAlbDA-unsplash.jpg";

const TopPropertiesCarousel: React.FC = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      transitionTime={500}
      infiniteLoop
      useKeyboardArrows
      autoPlay
    >
      <div className="property">
        <img src={image} alt="Property" />
        <div className="property-info">
          <span>FOR SALE</span>
          <p className="start">
            Start From: <span className="primary-text"> $300,000 </span>{" "}
          </p>
          <p className="address">
            {" "}
            <i className="fas fa-map-marker-alt"></i> 9721 Glen Creek Ave, Ballstart Spa, NY{" "}
          </p>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing. Iste ex quisquam est quas sit, quibusdam aperiam
            suscipit in enim placeat.
          </p>
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
          <div className="view-more">
            <Link to="/">View More</Link>
          </div>
        </div>
      </div>
      <div className="property">
        <img src={image} alt="Property" />
        <div className="property-info">
          <span>FOR SALE</span>
          <p className="start">
            Start From: <span className="primary-text"> $300,000 </span>{" "}
          </p>
          <p className="address">
            {" "}
            <i className="fas fa-map-marker-alt"></i> 9721 Glen Creek Ave, Ballstart Spa, NY{" "}
          </p>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing. Iste ex quisquam est quas sit, quibusdam aperiam
            suscipit in enim placeat.
          </p>
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
          <div className="view-more">
            <Link to="/">View More</Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default TopPropertiesCarousel;
