/**
 *  作者： wcl
*/
import axios from 'axios';
// import { notification, message } from 'antd';
import { message } from 'antd';
import { getEnv, getCookie } from './tools';

import 'mock/index';

// 返回数据状态信息
const shuiheCodeMessage = {
  2000: '服务器成功返回请求的数据',
  4000: '程序异常',
  4001: '参数验证错误',
  4002: '未登陆',
};
// ajax返回信息
const ajaxStatusMessage = {
  200: '服务器成功返回请求的数据',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
};

// 用于检测 ajax请求的的返回状态
const checkAjaxStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  const errortext = ajaxStatusMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

// 用于检查后台系统的服务， 这些状态和后台保持一致，暂时先这样写
const checkStatus = (response) => {
  if (response.code === 2000) {
    return response.body;
  }
  let errortext = shuiheCodeMessage[response.code] || response.message;
  if (response.code === 4000) {
    errortext = response.message || shuiheCodeMessage[response.code];
  } else if (response.code === 4002) {
    message.warning('登录已失效，请重新登录');
    // const domain = document.domain.split('.').slice(-2).join('.');
    // document.cookie = `${'xnName' + '=' + '' + ';domain='}${domain};path=/`;
    // document.cookie = `${'xnToken' + '=' + '' + ';domain='}${domain};path=/`;
    // window.location.href = `${window.location.origin}/login.html`;
    // return;
  } else if (response.code === 4001) { // 后续需要修改解析
    // if (response.message !== null && response.message !== '' && response.message.startsWith('[{')) {
    //   const mess = JSON.parse(response.message);
    //   let m = '';
    //   for (const o of mess) {
    //     m += `${o.value} \r\n `;
    //   }
    //   errortext = m;
    // }
    errortext = response.message || shuiheCodeMessage[response.code];
  }
  const error = new Error(errortext);
  error.name = response.code;
  error.response = response;
  throw error;
};


/**
* url 请求路径
* data 请求的参数
* newOptions 请求type
* isMock 是否启用mock,当传如这个参数时候就获取mock数据
*/
const shepAjax = (url, data, newOptions, isMock = false) => {
  const defaultOptions = { method: 'POST', withCredentials: true };
  const accessToken = getCookie('xnToken'); // 这里是预留登陆信息
  console.log(accessToken);
  // 配置不同环境的前缀
  const objPrefix = {
    development: 'http://10.100.2.30:31009/api',
    production: `${window.location.origin}/api`,
  };
  const prefix = objPrefix[`${getEnv()}`]; // 如果需要改变请求前缀。只需修改  prefix
  const mockSign = !!((process.env.NODE_ENV === 'development' && isMock)); //  增加mock配置, 同时屏蔽生产环境
  const mockprefix = 'http://localhost:3000'; // mock 时的地址，端口号可以根据package.json里的配置改变

  url = mockSign ? `${mockprefix}${url}` : `${prefix}${url}`;

  // get请求拼接参数到url上
  if (newOptions && newOptions.method === 'GET') {
    url = `${url}?m=p`;// 拼接一个固定的值，方便参数拼接
    for (const o of Object.keys(data)) {
      url = `${url}&${o}=${data[o]}`;
    }
  }
  const options = { ...defaultOptions, ...newOptions, url };
  if (data) { options.data = data; } // 如果传入了请求的参数，那么设置进去

  if (options.method === 'POST' || options.method === 'GET') {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    };
    // if (accessToken != null) {
    //   Object.assign(options.headers, { Authorization: `Bearer ${accessToken}` });
    // }
    if (options.data) { options.data = JSON.stringify(options.data); }
  }
  // mock
  // if (getEnv() === 'mock') {
  //   options.withCredentials = false;
  // }

  return axios(options)
    .then((response) => {
      return checkAjaxStatus(response);
    })
    .then((response) => {
      return checkStatus(response);
    })
    .catch((error) => {
      console.log(error.massage);
      // try {
      //   notification.error({
      //     message: '错误提示',
      //     description: error.message,
      //     style: {
      //       width: 800,
      //       marginLeft: '25%',
      //     },
      //   });
      // } catch (e) {
      //   console.log(e);
      // }
    });
};


export default shepAjax;
