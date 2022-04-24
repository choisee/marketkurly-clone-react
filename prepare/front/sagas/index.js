import { all, fork } from "redux-saga/effects";
// import productSaga from './product';
import userSaga from "./user";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3065";
axios.defaults.withCredentials = true;  // fe ~ be 간 민감정보(쿠키) 전달을 위한 설정 (변경 안하면 로그인 후 로그아웃 시도시 401)

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  // yield all([fork(productSaga), fork(userSaga)]);
}
