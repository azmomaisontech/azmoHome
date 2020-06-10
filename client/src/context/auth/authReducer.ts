import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, State, Action } from "../type";

export default (state: State, action: Action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        token: action.payload.token,
        success: action.payload.success,
        loading: false
      };
  }
};
