import React from "react";

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
  };
}

const PropertyInfo: React.FC<PropertyInfoProps> = props => {
  return <h1> Testing </h1>;
};

export default PropertyInfo;
