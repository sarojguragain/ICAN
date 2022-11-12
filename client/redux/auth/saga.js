import { put, takeEvery, call } from "redux-saga/effects";
import { actionTypes } from "./type";
import { message } from "antd";
import {
  changePasswordSuccess,
  forgetPasswordSuccess,
  loginSuccess,
  registrationSuccess,
} from "./action";
import {
  httpLogin,
  httpRegistration,
  httpChangePassword,
  httpForgotPassword,
} from "../http/authentication";

function* getLogin(action) {
  try {
    const response = yield call(httpLogin, action.payload);
    yield put(loginSuccess(response.data));
  } catch (err) {
    message.error({ content: err.message });
  }
}

function* getRegistration(action) {
  try {
    const response = yield call(httpRegistration, action.paylaod);
    yield put(registrationSuccess(response.data.data));
  } catch (err) {
    message.error({ content: err.message });
  }
}

function* changePassword(action) {
  const token = localStorage.token;
  const headerParameters = {
    Authentication: `bearer ${token}`,
  };
  try {
    const user = yield call(
      httpChangePassword,
      action.payload,
      headerParameters
    );
    const response = user.data.data;
    yield put(changePasswordSuccess(response));
  } catch (err) {
    message.error({ content: err.message });
  }
}

function* forgotpassword(action) {
  const token = localStorage.token;
  const headerParameters = {
    Authentication: `bearer ${token}`,
  };
  try {
    const response = yield call(
      httpForgotPassword,
      action.payload,
      headerParameters
    );
    const data = response.data.data;
    yield put(forgetPasswordSuccess(data));
  } catch (err) {
    message.error({ content: err.message });
  }
}

function* authSaga() {
  yield takeEvery(actionTypes.LOGIN, getLogin);
}
export default authSaga;
