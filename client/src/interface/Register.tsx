import * as React from "react";
import RegisterForm from "../component/registerPage/RegisterForm";
import "../styles/register/Register.css";

const Login: React.FC = () => {
  return (
    <main id="register">
      <div className="container">
        <RegisterForm />
      </div>
    </main>
  );
};

export default Login;
