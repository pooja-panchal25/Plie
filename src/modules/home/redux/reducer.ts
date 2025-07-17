import {
  EVENT_DATA_REQUEST,
  EVENT_DATA_SUCCESS,
  EVENT_DATA_FAILURE,
} from './type';

const initialState = {
  eventData: '',
  isLoading: false,
  isLoggedIn: false,
  loaderMessage: 'Loading...',
};

const HomeReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case EVENT_DATA_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
        loaderMessage: 'Please wait...',
      };
    }
    case EVENT_DATA_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        eventData: action.payload,
        isLoading: false,
        loaderMessage: 'Please wait...',
      };
    }
    case EVENT_DATA_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        eventData: action,
        loaderMessage: 'Please wait...',
      };
    }
    default:
      return state;
  }
};
export default HomeReducer;
