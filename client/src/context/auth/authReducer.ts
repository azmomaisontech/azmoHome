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
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.data,
        loading: false
      };
    case AuthEnum.userLoaded:
      return {
        ...state,
        user: action.payload.data,
        success: action.payload.success,
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

    default:
      return state;
  }
};
