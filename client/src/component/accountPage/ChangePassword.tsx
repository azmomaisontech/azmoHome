import React, { useState, ChangeEvent, FormEvent } from "react";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const ChangePassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [password, setPassword] = useState({
    oldpassword: "",
    newpassword: ""
  });

  const { oldpassword, newpassword } = password;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(!passwordType);
  };

  const handleChangePassword = (e: HandleChange) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="oldpassword">Old Password</label>
        <input
          type={passwordType ? "text" : "password"}
          id="oldpassword"
          name="oldpassword"
          value={oldpassword}
          onChange={handleChangePassword}
          required
        />
        <span className="showpassword" onClick={handleShowPassword}>
          {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="oldpassword">New Password</label>
        <input
          type={passwordType ? "text" : "password"}
          id="newpassword"
          name="newpassword"
          value={newpassword}
          onChange={handleChangePassword}
          required
        />
        <span className="showpassword" onClick={handleShowPassword}>
          {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
        </span>
      </div>
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangePassword;
