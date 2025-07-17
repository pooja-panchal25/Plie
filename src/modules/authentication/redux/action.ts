import {LOGIN_REQUEST} from './type';

export const loginUserRequest = (data: import("form-data"), navigation: any) => ({
  type: LOGIN_REQUEST,
  payload: {
    data: data,
    nav: navigation,
  },
});
