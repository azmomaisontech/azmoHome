import React, { useState, ChangeEvent, FormEvent } from "react";
import { PasswordType } from "./AccountSetting";
type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangePasswordProps {
  handlePasswordSubmit: (e: FormEvent<HTMLFormElement>, password: PasswordType) => void;
  loading: boolean | undefined;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ handlePasswordSubmit, loading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const { currentPassword, newPassword } = password;

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
    <form onSubmit={e => handlePasswordSubmit(e, password)}>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type={passwordType ? "text" : "password"}
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={handleChangePassword}
          required
        />
        <span className="showpassword" onClick={handleShowPassword}>
          {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type={passwordType ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={handleChangePassword}
          required
        />
        <span className="showpassword" onClick={handleShowPassword}>
          {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
        </span>
      </div>
      <button disabled={loading} type="submit">
        Change
      </button>
    </form>
  );
};

export default ChangePassword;
