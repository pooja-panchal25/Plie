import {takeLatest, call, put} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_FAILURE} from './type';
import api from '../../../utils/Api';
import { CommonActions } from '@react-navigation/native';

function* workerToCallLoginApi(data: { payload: { nav: any; data: any; }; }) {
  try {
    const navigation = data.payload.nav;
    const paramData = data.payload.data;
    const loginRes = yield api.post('login', paramData).then(res => {
      return res.data;
    });
    console.log("ia m in print the. login res===>",loginRes)
    if (loginRes.success) {
      global.access_token = loginRes.data?.token;
      yield put({
        type: LOGIN_SUCCESS,
        payload: loginRes,
      });
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: 'Home',
              },
            ],
          })
        );

} else {
      yield put({
        type: LOGIN_FAILURE,
        payload: loginRes.message,
      });
    }
  } catch (error) {}
}
function* watchToCallAuthAPI() {
  yield takeLatest(LOGIN_REQUEST, workerToCallLoginApi);
}
export default watchToCallAuthAPI;
