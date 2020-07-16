import React, { useState, useContext, useEffect, FormEvent, ChangeEvent } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";
import "../../styles/register/RegisterForm.css";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const RegisterForm: React.FC = () => {
  const authContext = useContext(AuthContext);

  const { registerUser, isAuthenticated, error, loading, alert, setAlert } = authContext;

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

  //where to take the user after registering
  let history = useHistory();
  let location = useLocation();

  // if the user was redirected to the register page from another page,
  //  they should be returned back there after registering, or just
  // returned to the home page
  const { from } = (location.state! as any) || { from: { pathname: "/" } };

  useEffect(() => {
    if (isAuthenticated) {
      history.push(from);
    }
    if (error) {
      //We are checking for setAlert because typescript will scream
      // at us if it isn't defined
      if (setAlert) {
        setAlert("User already exist");
      }
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const handleChange = (e: HandleChange) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: SubmitForm) => {
    e.preventDefault();

    //We are checking for registerUser because typescript will scream
    // at us if it isn't defined
    if (registerUser) {
      registerUser(user);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        {alert && alert.length > 0 && <p className="error-msg">{alert} </p>}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={passwordType ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <span className="showpassword" onClick={handleShowPassword}>
            {showPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
          </span>
        </div>
        <fieldset>
          <legend>Role </legend>
          <div>
            <input type="radio" name="role" id="user" value="user" checked={role === "user"} onChange={handleChange} />
            <label htmlFor="user">User</label>
          </div>
          <div>
            <input
              type="radio"
              name="role"
              id="agent"
              value="agent"
              checked={role === "agent"}
              onChange={handleChange}
            />
            <label htmlFor="agent">Agent</label>
          </div>
        </fieldset>
        <button type="submit">{loading ? "Loading...." : "Sign Up"}</button>
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
