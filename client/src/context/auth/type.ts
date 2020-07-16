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

export interface UpdateName {
  name: string;
}

export interface UpdateEmail {
  email: string;
}

export interface ContextProps extends AuthStateProps {
  setLoading: () => void;
  registerUser: (dataform: FormData) => void;
  loginUser: (dataform: FormData) => void;
  loadUser: () => void;
  updateUserName: (dataForm: UpdateName) => void;
  updateUserEmail: (dataForm: UpdateEmail) => void;
  logoutUser: () => void;
}

export interface Props {
  children: JSX.Element[] | JSX.Element;
}

// export const GET_BOOTCAMPS = "GET_BOOTCAMPS";
// export const GET_BOOTCAMP = "GET_BOOTCAMP";
// export const BOOTCAMP_CREATE = "BOOTCAMP_CREATE";
// export const BOOTCAMP_UPDATE = "BOOTCAMP_UPDATE";
// export const BOOTCAMP_DELETE = "BOOTCAMP_DELETE";
// export const BOOTCAMP_PHOTO = "BOOTCAMP_PHOTO";
// export const FILTERED_BOOTCAMP = "FILTERED_BOOTCAMP";
// export const CLEAR_FILTER = "CLEAR_FILTER";
// export const BOOTCAMP_ERROR = "BOOTCAMP_ERROR";
// export const SET_CURRENT = "SET_CURRENT";
// export const CLEAR_CURRENT = "CLEAR_CURRENT";
// export const CLEAR_BOOTCAMPS = "CLEAR_BOOTCAMPS";
// export const CLEAR_BOOTCAMP = "CLEAR_BOOTCAMP";
// export const ADD_COURSE = "ADD_COURSE";
// export const UPDATE_COURSE = "UPDATE_COURSE";
// export const DELETE_COURSE = "DELETE_COURSE";
// export const COURSE_ERROR = "COURSE_ERROR";
// export const CURRENT_COURSE = "CURRENT_COURSE";
// export const CLEAR_CURRENTCOURSE = "CLEAR_CURRENTCOURSE";
// export const ADD_REVIEW = "ADD_REVIEW";
// export const UPDATE_REVIEW = "UPDATE_REVIEW";
// export const DELETE_REVIEW = "DELETE_REVIEW";
// export const GET_REVIEWS = "GET_REVIEWS";
// export const CLEAR_REVIEWS = "CLEAR_REVIEWS";
// export const GETBOOTCAMP_REVIEWS = "GETBOOTCAMP_REVIEWS";
// export const CLEARBOOTCAMP_REVIEWS = "CLEARBOOTCAMP_REVIEWS";
// export const REVIEW_ERROR = "REVIEW_ERROR";
// export const SET_CURRENTREVIEW = "SET_CURRENTREVIEW";
// export const CLEAR_CURRENTREVIEW = "CLEAR_CURRENTREVIEW";
