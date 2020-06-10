import React, { useReducer, createContext, Dispatch } from "react";
import AuthReducer from "../auth/authReducer";
import {
  State,
  Props,
  REGISTER_USER,
  LOGIN_USER,
  USER_LOADED,
  UPDATE_USER,
  UPDATE_PASSWORD,
  LOGOUT_USER,
  AUTH_ERROR,
  SET_LOADING
} from "../type";

const initialState: State = {
  token: "",
  isAuthenticated: false,
  loading: false,
  error: "",
  user: {},
  success: false
};

const AuthContext = createContext();

const AuthState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Methods
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        success: state.success
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
