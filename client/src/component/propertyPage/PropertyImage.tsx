import React from "react";
import "../../styles/property/PropertyImage.css";

interface PropertyImageProps {
  image: string[];
}
const PropertyImage: React.FC<PropertyImageProps> = ({ image }) => {
  return (
    <section className="property-image">
      {image.map(img => (
        <a target="_blank" rel="noopener noreferrer" href={img}>
          <img src={img} alt="Home" />
        </a>
      ))}
    </section>
  );
};

export default PropertyImage;
