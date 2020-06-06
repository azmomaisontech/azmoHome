import React from "react";
import "../../styles/property/PropertyImage.css";

interface PropertyImageProps {
  image: string[];
}
const PropertyImage: React.FC<PropertyImageProps> = ({ image }) => {
  return (
    <section className="property-image">
      {image.map(img => (
        <a key={Math.random()} target="_blank" rel="noopener noreferrer" href={img}>
          <img src={img} alt="Home" />
        </a>
      ))}
      <h1>Scroll Down</h1>
    </section>
  );
};

export default PropertyImage;
