import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { PasswordType } from "./AccountSetting";
import * as Toast from "../../utils/alert/toast";
type HandleChange = ChangeEvent<HTMLInputElement>;

interface ChangePasswordProps {
  handlePasswordSubmit: (e: FormEvent<HTMLFormElement>, password: PasswordType) => void;
  loading: boolean | undefined;
  success: boolean | undefined;
  error: string | null | undefined;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ handlePasswordSubmit, loading, success, error }) => {
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

  useEffect(() => {
    if (error) {
      Toast.error(error);
    }

    if (success) {
      Toast.success("User registered successfully", 2000);
    }

    setPassword({
      currentPassword: "",
      newPassword: ""
    });
  }, [success]);

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
      <button type="submit">Change</button>
    </form>
  );
};

export default ChangePassword;
