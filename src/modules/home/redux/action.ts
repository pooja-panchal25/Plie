import {EVENT_DATA_REQUEST} from './type';

export const getEventData = (navigation: any) => ({
  type: EVENT_DATA_REQUEST,
  payload: {
    nav: navigation,
  },
});
