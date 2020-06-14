import React, { useReducer, createContext } from "react";
import { AuthReducer } from "../auth/authReducer";
// import { AuthState, AuthAction, StoreWithAction, Props, AuthEnum } from "./type";
import { ContextProps, Props, AuthEnum } from "./type";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  success: false
};

// const AuthContext = createContext<StoreWithAction>({
//   state: initialState,
//   dispatch: () => null
// });

const AuthContext = createContext<Partial<ContextProps>>({});

const AuthState: React.FC<Props> = ({ children }) => {
  // const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Methods

  //Sets Loading to true
  const setLoading = () => {
    dispatch({
      type: AuthEnum.setLoading
    });
  };

  //Register new user
  const registerUser = () => {
    dispatch({
      type: AuthEnum.registerUser,
      payload: {
        token: "a",
        success: true
      }
    });
  };

  return <AuthContext.Provider value={{ loading: state.loading, registerUser }}>{children}</AuthContext.Provider>;

  // return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthState };
