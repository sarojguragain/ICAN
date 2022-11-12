import { actionTypes } from "./type";
import axios from "axios";

export const login = (data) => {
  return {
    type: actionTypes.LOGIN,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};
export const userLogout = () => {
  const clear = localStorage.clear();
  return {
    type: actionTypes.LOGOUT,
    payload: clear,
  };
};

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const setCurrentUser = (user) => {
  return {
    type: actionTypes.TOKEN,
    payload: user,
  };
};

export const registration = (data) => {
  return {
    type: actionTypes.REGISTRATION,
    payload: data,
  };
};

export const registrationSuccess = (data) => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
    payload: data,
  };
};

export const changePassword = (data) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    payload: data,
  };
};
export const changePasswordSuccess = (data) => {
  return {
    type: actionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: data,
  };
};
export const forgetPassword = (data) => {
  return {
    type: actionTypes.FORGET_PASSWORD,
    payload: data,
  };
};
export const forgetPasswordSuccess = (data) => {
  return {
    type: actionTypes.FORGET_PASSWORD_SUCCESS,
    payload: data,
  };
};
