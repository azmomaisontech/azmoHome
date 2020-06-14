import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";
import "../../styles/register/RegisterForm.css";

const RegisterForm: React.FC = () => {
  const authContext = useContext(AuthContext);

  const { registerUser } = authContext;

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const { name, email, password, role } = user;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(!passwordType);
  };

  return (
    <div className="register-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required />
        </div>
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
        <fieldset>
          <legend>Role </legend>
          <div>
            <input type="radio" name="role" id="user" value="user" />
            <label htmlFor="user">User</label>
          </div>
          <div>
            <input type="radio" name="role" id="agent" value="agent" />
            <label htmlFor="agent">Agent</label>
          </div>
        </fieldset>
        <button type="submit">Sign Up</button>
        <p className="link primary-text">
          <span className="danger">*</span> By creating an account, you agree and accept our{" "}
          <Link to="/terms"> Terms </Link> and <Link to="privacy_policy"> Privacy Policy. </Link>
        </p>
        <p className="separate">
          <span className="line"></span>
        </p>

        <p className="link small-text">
          Already have an account? <Link to="/login"> Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
