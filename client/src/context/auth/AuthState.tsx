import React, { useReducer, createContext } from "react";
import AuthReducer from "../auth/authReducer";
import { State, Action, Props, GenEnum, AuthEnum } from "../type";

const initialState = {
  token: "",
  isAuthenticated: false,
  loading: false,
  error: "",
  success: false
};

const AuthContext = createContext(initialState);

const AuthState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Methods

  // sets Loading to true
  const setLoading = () => {
    dispatch({
      type: GenEnum.setLoading
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        success: state.success
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
