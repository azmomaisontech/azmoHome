import { AuthEnum, AuthStateProps } from "./type";

export const AuthReducer = (state: AuthStateProps, action: any) => {
  switch (action.type) {
    case AuthEnum.setLoading:
      return {
        ...state,
        loading: true
      };
    case AuthEnum.registerUser:
    case AuthEnum.loginUser:
    case AuthEnum.updateUser:
    case AuthEnum.userLoaded:
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.data,
        isAuthenticated: true,
        loading: false
      };
    case AuthEnum.logoutUser:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
        success: false
      };
    case AuthEnum.authError:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        loading: false,
        user: null,
        success: false
      };

    case AuthEnum.clearError:
      return {
        ...state,
        error: null
      };
    case AuthEnum.clearSuccess:
      return {
        ...state,
        success: false
      };
    case AuthEnum.setAlert:
      return {
        ...state,
        alert: action.payload
      };
    case AuthEnum.clearAlert:
      return {
        ...state,
        alert: null
      };

    default:
      return state;
  }
};
