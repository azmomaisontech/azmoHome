export const SET_ALERT = "SET_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";
export const SET_LOADING = "SET_LOADING";
export const CLEAR_SUCCESS = "CLEAR_SUCCESS";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const USER_LOADED = "USER_LOADED";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const AUTH_ERROR = "AUTH_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";
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

export interface State {
  token: string;
  isAuthenticated: boolean;
  loading: boolean;
  error: string;
  user: object;
  success: boolean;
}

export interface Action {
  type: string;
  payload: {
    error?: string;
    token?: string;
    success?: boolean;
    data?: object;
  };
}

export interface Props {
  children: JSX.Element[] | JSX.Element;
}
