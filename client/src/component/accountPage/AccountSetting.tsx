import React, { FormEvent } from "react";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import "../../styles/account/AccountSetting.css";

//I am using prop drilling to handle Form submission on child
// components because i was having problems handling them inside
//  the child component because they are nested routes
//When i click submit, it refreshes the page and adds "account" to the URL before "api/v1"
interface HandleSubmit {
  handleSubmit: (e: SubmitForm, data: string) => void;
}

type SubmitForm = FormEvent<HTMLFormElement>;

const EditProfile: React.FC<HandleSubmit> = ({ handleSubmit }) => {
  return (
    <section className="account_setting">
      <h2>Edit Profile Information</h2>
      <div className="flex-container">
        <ChangeName handleSubmit={handleSubmit} />
        <ChangeEmail />
        <ChangePassword />
      </div>
      <div className="deactivate">
        <h3>Deactivate Account</h3>
        <p>All your saved homes and preferences will be permanently lost if you deactivate your account.</p>
        <p>Receiving too many emails? Unsubscribe from our mailing list instead.</p>
        <p> To change your email address, simply click "Edit email" next to your email address above.</p>
        <div className="buttons">
          <button className="danger">Deactivate Account</button> <button> Unsubscribe</button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
