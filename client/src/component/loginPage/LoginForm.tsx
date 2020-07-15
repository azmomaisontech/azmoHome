import React, { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthState";
import "../../styles/login/LoginForm.css";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const LoginForm: React.FC = () => {
  const authContext = useContext(AuthContext);

  const { loginUser, isAuthenticated, error, loading } = authContext;

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

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
        setAlert("Invalid username or password", "danger");
      }
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const handleGoogleAuth = () => {
    window.open("http://localhost:5000/api/v1/auth/google", "_self");
  };

  const handleChange = (e: HandleChange) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: SubmitForm) => {
    e.preventDefault();

    //We are checking for loginUser because typescript will scream
    // at us if it isn't defined
    if (loginUser) {
      loginUser(user);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {alert && <div className="error-msg">{alert.msg} </div>}
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
        <button type="submit"> {loading ? "Loading.... " : "Sign In"}</button>
        <p className="link">
          <Link to="/forgotpassword">Forgot Password? </Link>
        </p>
        <p className="separate">
          <span className="line"></span> or <span className="line"></span>
        </p>
        <div onClick={handleGoogleAuth} className="google-auth">
          <i className="fab fa-google-plus-g"></i> <span>Sign in with Google</span>
        </div>
        <p className="link small-text">
          New to AzmoHomes? <Link to="/register"> Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
