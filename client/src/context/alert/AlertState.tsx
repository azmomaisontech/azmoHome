import React, { useReducer, createContext } from "react";
import { AlertReducer } from "./alertReducer";
import { AlertContextProps, Props, AlertEnum } from "./type";

const initialState = {
  alert: {}
};

const AlertContext = createContext<Partial<AlertContextProps>>({});

const AlertState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Methods
  const setAlert = (msg: string, type: string, timeout = 2000) => {
    dispatch({
      type: AlertEnum.setAlert,
      payload: {
        msg,
        type
      }
    });

    setTimeout(() => {
      dispatch({
        type: AlertEnum.clearAlert
      });
    }, timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertState };
