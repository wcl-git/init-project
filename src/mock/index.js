/**
 * json-server npm包不支持 es6 的 import 和 export  export default
*/
const Mock = require('mockjs');
const login = require('./login/login.js'); // 用户信息 mock
const auth = require('./auth/auth.js'); // 权限mock 包含 menu && 菜单

const func = function () {
  return {
    login: Mock.mock(login),
    auth: Mock.mock(auth),
  };
};
module.exports = func;
