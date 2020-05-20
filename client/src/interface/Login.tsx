import * as React from "react";
import LoginForm from "../component/loginPage/LoginForm";
import "../styles/login/Login.css";

const Login: React.FC = () => {
  return (
    <main id="login">
      <div className="container">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
