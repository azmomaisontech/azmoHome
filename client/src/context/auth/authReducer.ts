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
      return {
        ...state,
        success: action.payload.success,
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
    case AuthEnum.authError:
      return {
        ...state,
        error: action.payload,
        token: null,
        isAuthenticated: null,
        loading: false,
        user: null
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
