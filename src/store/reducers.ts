import {combineReducers} from 'redux';
import AuthReducer from '../modules/authentication/redux/reducer';
import HomeReducer from '../modules/home/redux/reducer';

const ReducerRoot = combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
});
export type rootState=ReturnType<typeof ReducerRoot>
export default ReducerRoot;
