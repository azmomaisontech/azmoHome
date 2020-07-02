export enum AuthEnum {
  registerUser = "REGISTER_USER",
  googleUserAuth = "GOOGLE_USER_AUTH",
  loginUser = "LOGIN_USER",
  userLoaded = "USER_LOADED",
  updateUser = "UPDATE_USER",
  logoutUser = "LOGOUT_USER",
  updatePassword = "UPDATE_PASSWORD",
  setLoading = "SET_LOADING",
  authError = "AUTH_ERROR",
  clearError = "CLEAR_ERROR",
  clearSuccess = "CLEAR_SUCCESS"
}

export type AuthStateProps = {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  user:
    | { role: string; id: string; googleId: string; name: string; email: string; createdAt: Date; updatedAt: Date }
    | string
    | null;
  success: boolean;
};

export interface FormData {
  name?: string;
  email: string;
  password: string;
  role?: string;
}

export interface UpdateFormData {
  [prop: string]: string;
}

export interface ContextProps extends AuthStateProps {
  setLoading: () => void;
  registerUser: (dataform: FormData) => void;
  loginUser: (dataform: FormData) => void;
  loadUser: () => void;
  updateUser: (dataForm: UpdateFormData) => void;
  logoutUser: () => void;
}

export interface Props {
  children: JSX.Element[] | JSX.Element;
}
