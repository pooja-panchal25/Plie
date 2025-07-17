import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './type';

const initialState = {
  loginData: '',
  error: {},
  isLoading: false,
  isLoggedIn: false,
  loaderMessage: 'Loading...',
};

const AuthReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        loaderMessage: 'Please wait...',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loginData: action.payload,
        isLoading: false,
        loaderMessage: 'Please wait...',
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginData: '',
        isLoggedIn: false,
        isLoading: false,
        loaderMessage: 'Please wait...',
      };
    }
    default:
      return state;
  }
};
export default AuthReducer;
