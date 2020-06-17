import React, { useReducer, createContext } from "react";
import axios from "axios";
import { AuthReducer } from "../auth/authReducer";
import { ContextProps, Props, FormData, AuthEnum } from "./type";

const initialState = {
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
      loadUser();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError,
        payload: err.response.data.error
      });

      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 3000);
    }
  };

  //Sets Loading to true
  const setLoading = () => {
    dispatch({
      type: AuthEnum.setLoading
    });
  };

  //Load user after registering or login
  const loadUser = async () => {
    try {
      const res = await axios.get("api/v1/auth/me");
      dispatch({
        type: AuthEnum.userLoaded,
        payload: res.data
      });
      clearSuccess();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError,
        payload: err.response.data.error
      });
    }
  };

  //Register new user
  const registerUser = async (formData: FormData) => {
    const url = "api/v1/auth/register";
    const type = AuthEnum.registerUser;
    await authUser(formData, url, type);
  };

  //Login  user
  const loginUser = async (formData: FormData) => {
    const url = "api/v1/auth/login";
    const type = AuthEnum.loginUser;
    await authUser(formData, url, type);
  };

  const logoutUser = () => {
    dispatch({
      type: AuthEnum.logoutUser
    });
  };

  //Clear Success field
  const clearSuccess = () => {
    dispatch({
      type: AuthEnum.clearSuccess
    });
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        user: state.user,
        success: state.success,
        registerUser,
        loginUser,
        loadUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
