import React from "react";
import Property from "./Property";
import "../../styles/properties/PropertiesBox.css";

const PropertiesBox: React.FC = () => {
  const properties = [
    {
      id: 1,
      price: 1395,
      address: "9 Rumukrusi street, Borokiri",
      type: "sale",
      bed: 2,
      bath: 3,
      size: 1000,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 2,
      price: 1395,
      address: "9 Rumukrusi street, Borokiri",
      type: "rent",
      bed: 2,
      bath: 3,
      size: 1000,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 3,
      price: 1395,
      address: "9 Rumukrusi street, Borokiri",
      type: "rent",
      bed: 2,
      bath: 3,
      size: 1000,
      image:
        "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    },
    {
      id: 4,
      price: 1395,
      address: "9 Rumukrusi street, Borokiri",
      type: "sale",
      bed: 2,
      bath: 3,
      size: 1000,
      image:
        "https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    }
  ];
  return (
    <section className="propertiesbox">
      <div className="grid">
        {properties.map(property => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesBox;
