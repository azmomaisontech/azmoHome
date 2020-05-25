import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login/LoginForm.css";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  // const passwordRef = useRef<HTMLInputElement>(null);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(!passwordType);
  };

  return (
    <div className="login-form">
      <form>
        <div className="form-group">
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type={passwordType ? "text" : "password"} id="password" required />
          <span className="showpassword" onClick={handleShowPassword}>
            {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
          </span>
        </div>
        <button type="submit">Sign In</button>
        <p className="link">
          <Link to="/forgotpassword">Forgot Password? </Link>
        </p>
        <p className="separate">
          <span className="line"></span> or <span className="line"></span>
        </p>
        <p className="link">
          <i className="fab fa-google"></i> <Link to="/">Sign in with Google</Link>
        </p>
        <p className="link small-text">
          New to AzmoHomes? <Link to="/register"> Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
