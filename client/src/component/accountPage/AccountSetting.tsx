import React, { useContext, useEffect, FormEvent } from "react";
import ChangeName from "./ChangeName";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import { AuthContext } from "../../context/auth/AuthState";
import * as Toast from "../../utils/alert/toast";
import "../../styles/account/AccountSetting.css";

type SubmitForm = FormEvent<HTMLFormElement>;

export interface PasswordType {
  currentPassword: string;
  newPassword: string;
}

const EditProfile: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { updateUserName, updateUserEmail, updateUserPassword, success, loading, error } = authContext;

  const handleNameSubmit = (e: SubmitForm, name: string) => {
    e.preventDefault();
    if (updateUserName) {
      updateUserName({ name });
    }
  };

  const handleEmailSubmit = (e: SubmitForm, email: string) => {
    e.preventDefault();
    if (updateUserEmail) {
      updateUserEmail({ email });
    }
  };

  const handlePasswordSubmit = (e: SubmitForm, password: PasswordType) => {
    e.preventDefault();
    if (updateUserPassword) {
      updateUserPassword(password);
    }
    console.log("clicked");
  };

  useEffect(() => {
    if (error) {
      Toast.error(error);
    }

    if (success) {
      Toast.success("User info changed successfully", 2000);
    }
  }, [success, error]);

  return (
    <main id="account_setting">
      <div className="container">
        <section className="account_setting">
          <h2>Edit Profile Information</h2>
          <div className="flex-container">
            <ChangeName handleNameSubmit={handleNameSubmit} loading={loading} success={success} />
            <ChangeEmail handleEmailSubmit={handleEmailSubmit} loading={loading} success={success} />
            <ChangePassword handlePasswordSubmit={handlePasswordSubmit} loading={loading} />
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
