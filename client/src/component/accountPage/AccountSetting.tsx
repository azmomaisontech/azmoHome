import React, { useState } from "react";
import "../../styles/account/AccountSetting.css";

const EditProfile: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(!passwordType);
  };

  return (
    <section className="account_setting">
      <h2>Edit Profile Information</h2>
      <div className="flex-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <form>
          <div className="form-group">
            <label htmlFor="password">Old Password</label>
            <input type={passwordType ? "text" : "password"} id="password" required />
            <span className="showpassword" onClick={handleShowPassword}>
              {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type={passwordType ? "text" : "password"} id="password" required />
            <span className="showpassword" onClick={handleShowPassword}>
              {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
            </span>
          </div>
          <button type="submit">Submit</button>
        </form>
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
