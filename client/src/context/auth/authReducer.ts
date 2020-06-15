import { AuthEnum, AuthStateProps } from "./type";

export const AuthReducer = (state: AuthStateProps, action: any) => {
  switch (action.type) {
    case AuthEnum.setLoading:
      return {
        ...state,
        loading: true
      };
    case AuthEnum.registerUser:
      return {
        ...state,
        token: action.payload.token,
        success: action.payload.success,
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

    default:
      return state;
  }
};
