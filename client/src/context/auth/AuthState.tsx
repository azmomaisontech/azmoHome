import React, { useReducer, createContext, Dispatch } from "react";
import AuthReducer from "../auth/authReducer";
import { AuthState, AuthAction, Props, AuthEnum } from "../type";

const initialState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  error: "",
  success: false
};

const AuthContext = createContext<[AuthState, Dispatch<AuthAction>]>(null);

const AuthState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Methods

  // sets Loading to true
  const setLoading = () => {
    dispatch({
      type: AuthEnum.setLoading
    });
  };

  //   Register new user
  const registerUser = () => {
    dispatch({
      type: AuthEnum.registerUser,
      payload: {
        warn: "registered"
      }
    });
  };

  return <AuthContext.Provider value={[state, setLoading, registerUser]}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthState };
