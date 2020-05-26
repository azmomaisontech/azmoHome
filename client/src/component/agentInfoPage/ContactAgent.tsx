import * as React from "react";
import "../../styles/agentInfo/ContactAgent.css";

const Contact: React.FC = () => {
  return (
    <form>
      <h3>Contact Us</h3>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Email" />
      <textarea name="message" rows={6}></textarea>
      <button type="submit">Contact us</button>
    </form>
  );
};

export default Contact;
