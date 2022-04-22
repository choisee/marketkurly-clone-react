import { all, fork } from "redux-saga/effects";

// import productSaga from './product';
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
  // yield all([fork(productSaga), fork(userSaga)]);
}
