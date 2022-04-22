import { all, delay, fork, put, takeLatest, call } from "redux-saga/effects";
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
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    console.log("saga logIn");
    // const result = yield call(logInAPI); // todo
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
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
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI); // todo
    yield delay(1000);
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
  return axios.post("http://localhost:3065/user", data); // data = {email,name,password}
}

function* signUp(action) {
  try {
    console.log("-------------------------- signUp");
    const result = yield call(signUpAPI, action.data); // todo
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
