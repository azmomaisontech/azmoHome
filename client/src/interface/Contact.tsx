import * as React from "react";
import TopPage from "../component/contactPage/TopPage";
import ContactForm from "../component/contactPage/ContactForm";
import "../styles/contact/Contact.css";

const Contact: React.FC = () => {
  return (
    <main id="contact">
      <div className="container">
        <TopPage />
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
