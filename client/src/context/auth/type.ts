export enum AuthEnum {
  clearSuccess = "CLEAR_SUCCESS",
  registerUser = "REGISTER_USER",
  loginUser = "LOGIN_USER",
  userLoaded = "USER_LOADED",
  updateUser = "UPDATE_USER",
  logoutUser = "LOGOUT_USER",
  updatePassword = "UPDATE_PASSWORD",
  authError = "AUTH_ERROR",
  setLoading = "SET_LOADING",
  clearError = "CLEAR_ERROR"
}

// Auth State TYPES
// type ActionMap<M extends { [index: string]: any }> = {
//   [Key in keyof M]: M[Key] extends undefined
//     ? {
//         type: Key;
//       }
//     : {
//         type: Key;
//         payload: M[Key];
//       };
// };

export type AuthStateProps = {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  error: string | null;
  user: { role: string; id: string; name: string; email: string } | null;
  success: boolean;
};

// type AuthPayload = {
//   [AuthEnum.setLoading]: {
//     loading: boolean;
//   };

//   [AuthEnum.registerUser]: {
//     token: string;
//     success: boolean;
//   };
// };

// export type AuthAction = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

// export interface StoreWithAction {
//   state: AuthState;
//   dispatch: React.Dispatch<AuthAction>;
// }

export interface ContextProps extends AuthStateProps {
  setLoading: () => void;
  registerUser: (dataform: object) => void;
}

export interface Props {
  children: JSX.Element[] | JSX.Element;
}
