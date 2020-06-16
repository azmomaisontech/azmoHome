import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthState } from "./context/auth/AuthState";
import { AlertState } from "./context/alert/AlertState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <AlertState>
        <App />
      </AlertState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
