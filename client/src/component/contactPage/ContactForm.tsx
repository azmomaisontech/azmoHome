import React from "react";
import "../../styles/contact/ContactForm.css";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" required />
        </div>
        <div className="form-group full">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
