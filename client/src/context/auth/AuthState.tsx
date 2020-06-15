import React, { useReducer, createContext } from "react";
import axios from "axios";
import { AuthReducer } from "../auth/authReducer";
import { ContextProps, Props, FormData, AuthEnum } from "./type";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  success: false
};

const AuthContext = createContext<Partial<ContextProps>>({});

const AuthState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Methods

  // For both Login and Registering users
  const authUser = async (formData: FormData, url: string, type: string) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(url, formData, config);
      dispatch({
        type,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AuthEnum.authError,
        payload: err.response.data.error
      });
    }
  };

  //Sets Loading to true
  const setLoading = () => {
    dispatch({
      type: AuthEnum.setLoading
    });
  };

  //Register new user
  const registerUser = async (formData: FormData) => {
    const url = "api/v1/auth/register";
    const type = AuthEnum.registerUser;
    await authUser(formData, url, type);
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        user: state.user,
        success: state.success,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
