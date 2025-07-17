import {takeLatest, put} from 'redux-saga/effects';
import {
  EVENT_DATA_REQUEST,
  EVENT_DATA_SUCCESS,
  EVENT_DATA_FAILURE,
} from './type';
import api from '../../../utils/Api';

function* workerToCallGetEventDataAPI(data: { payload: { nav: any; }; }) {
  const navigation = data.payload.nav;
  try {
    const eventRes = yield api.post('events-listing').then(res => {
      return res.data;
    });
    if (eventRes) {
      yield put({
        type: EVENT_DATA_SUCCESS,
        payload: eventRes,
      });
    }
  } catch (error) {
    yield put({
      type: EVENT_DATA_FAILURE,
      payload: '',
    });
  }
}

function* watchToCallHomeAPI() {
  yield takeLatest(EVENT_DATA_REQUEST, workerToCallGetEventDataAPI);
}

export default watchToCallHomeAPI;
