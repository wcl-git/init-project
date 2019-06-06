import axios from 'axios';
import baseURL from './config/configUrl';
import { codeSuccess, codeCreateUpdateSuccess, codeAsyn, codeDelete } from './config/configCode';

import 'mock/index';

// // 请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.error(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 请求完成后的拦截器
axios.interceptors.response.use(
  (response) => {
    console.error(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const request = (opts, isMock = false) => {
  // http默认配置
  const httpDefaultOpts = {
    ...opts,
    baseURL: opts.baseURL || baseURL,
    url: `${opts.url}${process.env.NODE_ENV === 'development' && isMock ? '.mock' : ''}`,
  };
  const promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then((response) => {
        const { data: res } = response;
        const code = res.code;
        switch (code) {
          case codeSuccess:
            resolve(res);
            break;
          case codeCreateUpdateSuccess:
            resolve(res);
            break;
          case codeAsyn:
            resolve(res);
            break;
          case codeDelete:
            resolve(res);
            break;
          default:
            reject(res);
            break;
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
  return promise;
};

export default request;
