import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAILED,
  LOG_OUT_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/user/login", data); // data = {email,password}
}

function* logIn(action) {
  // console.log("-------------------------- logIn");
  try {
    const result = yield call(logInAPI, action.data);
    // yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);

    yield put({
      type: LOG_IN_FAILED,
      error: err.response.data, // err.message
    });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  // console.log("-------------------------- logOut");
  try {
    yield call(logOutAPI);
    // yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILED,
      error: err.response.data, // err.message
    });
  }
}

function signUpAPI(data) {
  return axios.post("/user", data); // data = {email,name,password}
}

function* signUp(action) {
  try {
    // console.log("-------------------------- signUp");
    const result = yield call(signUpAPI, action.data);
    // yield delay(2000);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILED,
      error: err.response.data, // err.message
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
