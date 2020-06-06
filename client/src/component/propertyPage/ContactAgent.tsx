import React from "react";
import "../../styles/property/ContactAgent.css";

const ContactAgent: React.FC = () => {
  return (
    <div className="modal-form">
      <h3> Contact Agent Form</h3>
      <form>
        <div className="form-group">
          <i className="fas fa-user-alt"></i>
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <i className="fas fa-phone"></i> <input type="text" placeholder="Phone" />
        </div>
        <div className="form-group">
          <i className="fas fa-envelope"></i>
          <input type="email" name="" id="" placeholder="Email" />
        </div>
        <textarea name="" id="" cols={10} rows={5}></textarea>
        <button type="submit">Contact Agent</button>
      </form>
      <p>
        By pressing Contact Agent, you agree that AzmoHome and its affiliates, and real estate professionals may
        call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices.
        You don't need to consent as a condition of buying any property, goods or services. Message/data rates may
        apply. You also agree to our Terms of Use. AzmoHome does not endorse any real estate professionals.
      </p>
    </div>
  );
};

export default ContactAgent;
