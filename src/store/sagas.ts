import {fork, all} from 'redux-saga/effects';
import watchToCallAuthAPI from '../modules/authentication/redux/saga';
import watchToCallHomeAPI from '../modules/home/redux/saga';

export default function* rootSaga() {
  yield all([fork(watchToCallAuthAPI), fork(watchToCallHomeAPI)]);
}
