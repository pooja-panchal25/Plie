import {combineReducers} from 'redux';
import AuthReducer from '../modules/authentication/redux/reducer';
import HomeReducer from '../modules/home/redux/reducer';
import  wishlistReducer  from '../modules/wishlist/redux/Reducer';

const ReducerRoot = combineReducers({
  auth: AuthReducer,
  home: HomeReducer,
  wishList: wishlistReducer,

});
export type rootState=ReturnType<typeof ReducerRoot>
export default ReducerRoot;
