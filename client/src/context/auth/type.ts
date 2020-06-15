export enum AuthEnum {
  clearSuccess = "CLEAR_SUCCESS",
  registerUser = "REGISTER_USER",
  loginUser = "LOGIN_USER",
  userLoaded = "USER_LOADED",
  updateUser = "UPDATE_USER",
  logoutUser = "LOGOUT_USER",
  updatePassword = "UPDATE_PASSWORD",
  setLoading = "SET_LOADING",
  authError = "AUTH_ERROR",
  clearError = "CLEAR_ERROR"
}

export type AuthStateProps = {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  error: string | null;
  user: { role: string; id: string; name: string; email: string } | null;
  success: boolean;
};

export interface FormData {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

export interface ContextProps extends AuthStateProps {
  setLoading: () => void;
  registerUser: (dataform: FormData) => void;
}

export interface Props {
  children: JSX.Element[] | JSX.Element;
}
