import { toast } from "react-toastify";

export const success = (msg: string, timeout = 5000) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const error = (msg: string, timeout = 5000) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const warn = (msg: string, timeout = 5000) => {
  return toast.warn(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};

export const info = (msg: string, timeout = 5000) => {
  return toast.info(msg, {
    position: "top-right",
    autoClose: timeout,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
};
