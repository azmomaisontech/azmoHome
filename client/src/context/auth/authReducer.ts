import { AuthEnum, AuthState, AuthAction } from "../type";

export const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthEnum.setLoading:
      return [
        ...state,
        {
          loading: action.payload
        }
       ]
       
      
    default: 
      return state;
  =
  }

};
