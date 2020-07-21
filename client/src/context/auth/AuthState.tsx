import React, { useReducer, createContext } from "react";
import axios from "axios";
import { AuthReducer } from "../auth/authReducer";
import {
  ContextProps,
  Props,
  FormData,
  UpdateName,
  UpdateEmail,
  UpdatePassword,
  AuthEnum,
  AuthStateProps
} from "./type";

const initialState: AuthStateProps = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  success: false
};

const AuthContext = createContext<Partial<ContextProps>>({});

const AuthState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  //Methods

  //Sets Loading to true
  const setLoading = () => {
    dispatch({
      type: AuthEnum.setLoading
    });
  };

  // For both Login and Registering users
  const authUser = async (formData: FormData, url: string, type: string) => {
    setLoading();

    try {
      const res = await axios.post(url, formData, config);
      dispatch({
        type,
        payload: res.data
      });
      loadUser();
      clearSuccess();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError,
        payload: err.response.data.error
      });

      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 2000);
    }
  };

  //Load user after registering or login
  const loadUser = async () => {
    setLoading();

    try {
      const res = await axios.get("api/v1/auth/me");
      dispatch({
        type: AuthEnum.userLoaded,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AuthEnum.authError,
        payload: err.response.data.error
      });
      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 2000);
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

  //Update user name
  const updateUserName = async (formData: UpdateName) => {
    setLoading();

    try {
      const res = await axios.put("api/v1/auth/updatename", formData, config);
      dispatch({
        type: AuthEnum.updateUser,
        payload: res.data
      });
      clearSuccess();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError
      });
      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 2000);
    }
  };

  //Update user email
  const updateUserEmail = async (formData: UpdateEmail) => {
    setLoading();

    try {
      const res = await axios.put("api/v1/auth/updateemail", formData, config);
      dispatch({
        type: AuthEnum.updateUser,
        payload: res.data
      });
      clearSuccess();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError
      });
      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 2000);
    }
  };

  //Update user password
  const updateUserPassword = async (formData: UpdatePassword) => {
    setLoading();

    try {
      const res = await axios.put("api/v1/auth/updatepassword", formData, config);
      dispatch({
        type: AuthEnum.updatePassword,
        payload: res.data
      });
      clearSuccess();
    } catch (err) {
      dispatch({
        type: AuthEnum.authError
      });
      setTimeout(() => {
        dispatch({
          type: AuthEnum.clearError
        });
      }, 2000);
    }
  };

  const logoutUser = async () => {
    try {
      dispatch({
        type: AuthEnum.logoutUser
      });
      await axios.get("api/v1/auth/logout");
    } catch (err) {
      console.log(err);
    }
  };

  //Clear Success field
  const clearSuccess = () => {
    setTimeout(() => {
      dispatch({
        type: AuthEnum.clearSuccess
      });
    }, 2000);
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
        updateUserName,
        updateUserEmail,
        updateUserPassword,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
