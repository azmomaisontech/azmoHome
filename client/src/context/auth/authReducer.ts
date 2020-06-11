import { AuthEnum, State, Action } from "../type";

const AuthReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case AuthEnum.registerUser:
      return {
        ...state
      };
    default: {
      state;
    }
  }

  return state;
};

export default AuthReducer;
