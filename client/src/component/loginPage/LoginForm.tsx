import React, { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { AuthContext } from "../../context/auth/AuthState";
import { AlertContext } from "../../context/alert/AlertState";
import "../../styles/login/LoginForm.css";

type HandleChange = ChangeEvent<HTMLInputElement>;
type SubmitForm = FormEvent<HTMLFormElement>;

const LoginForm: React.FC = () => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { loginUser, isAuthenticated, error, loading } = authContext;
  const { alert, setAlert } = alertContext;

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

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

  // Google OAuth
  const responseGoogle = (response: any) => {
    console.log(response);
  };

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
          <input type="email" id="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={passwordType ? "text" : "password"}
            id="password"
            name="password"
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
        {/* <p className="link">
          <i className="fab fa-google"></i> <Link to="/">Sign in with Google</Link>
        </p> */}

        <GoogleLogin
          clientId="438086349865-f4935n0aiobevfbba6a6nd727tdh9q2p.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <p className="link small-text">
          New to AzmoHomes? <Link to="/register"> Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
