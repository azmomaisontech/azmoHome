import { AlertEnum, AlertStateProps } from "./type";

export const AlertReducer = (state: AlertStateProps, action: any) => {
  switch (action.type) {
    case AlertEnum.setAlert:
      return {
        alert: action.payload
      };
    case AlertEnum.clearAlert:
      return {
        alert: {}
      };

    default:
      return state;
  }
};
