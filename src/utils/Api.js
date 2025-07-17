import axios from 'axios';
import { BASE_URL } from '../config/BaseUrl';

function makeFormDataPostHeaders() {
  const accessToken = global.access_token === null ? '' : global.access_token;
  headerObj = {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
  return headerObj;
}

function makeGetHeaders() {
  let headerObj = {};
  const accessToken = global.access_token === null ? '' : global.access_token;
  headerObj = {
    Authorization: `Bearer ${accessToken}`,
  };
  return headerObj;
}
function makeRowDataHeaders() {
  let headerObj = {};
  const accessToken = global.access_token;
  headerObj = {
    Authorization: `Bearer ${accessToken}`,
  };
  return headerObj;
}

function makeAuthPostHeaders() {
  let headerObj = {};
  headerObj = {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
  return headerObj;
}

const axiosApi = axios.create({
  withCredentials: true,
  baseURL: `${BASE_URL}`,
});

axiosApi.interceptors.request.use(request => {
  if (request.method === 'get') {
    request.headers = makeGetHeaders();
  } else {
    if (request.url === 'login') {
      request.headers = makeAuthPostHeaders();
    }
  }
  return request;
});

const checkRespAndRedirect = response => {
  const { data } = response;
  console.log('i am in checkRespAndRedirect=>', data);
};

axiosApi.interceptors.response.use(
  response => {
    // console.log('i am inaxiosApi.interceptors.response==> ', response);
    checkRespAndRedirect(response);
    return response;
  },
  error => {
    console.log('cuyxbjhhjgjh', JSON.stringify(error));
    if (error.response.status === 401) {
      return Promise.reject(error.response);
    } else if (error.response.status === 402) {
      showMessage({
        message: error.response.data.error, //Message from Backend
        type: 'danger',
        icon: 'danger',
        duration: 4000,
      });
      AsyncStorage.clear();
    } else if (error.response.status === 500) {
      showMessage({
        message: 'Internal server error', //Message from Backend
        type: 'danger',
        icon: 'danger',
        duration: 100000,
      });
    }

    console.log('i am in axios get error', error);
    console.log('error.response.data', error.response.data);
    console.log('error.response.headers', error.response.headers);
    console.log('error.response.status', error.response.status);
    console.log('error.request', error.request);
    console.log('ErrorErrormsg', error.message);
    console.log('error.config', error.config);
    return Promise.reject(error.response);
  },
);

export default axiosApi;
