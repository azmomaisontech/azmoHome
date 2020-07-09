import React, { useContext, FormEvent } from "react";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import { AuthContext } from "../../context/auth/AuthState";
import "../../styles/account/AccountSetting.css";

type SubmitForm = FormEvent<HTMLFormElement>;

const EditProfile: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { updateUserName, loading } = authContext;

  const handleSubmit = (e: SubmitForm, name: string) => {
    e.preventDefault();
    if (updateUserName) {
      updateUserName({ name });
    }
    console.log("Done");
  };

  return (
    <main id="account_setting">
      <div className="container">
        <section className="account_setting">
          <h2>Edit Profile Information</h2>
          <div className="flex-container">
            <ChangeName handleSubmit={handleSubmit} loading={loading!} />
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
      </div>
    </main>
  );
};

export default EditProfile;
