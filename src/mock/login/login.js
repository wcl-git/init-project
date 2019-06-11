/**
 * json-server npm包不支持 es6 的 import 和 export  export default
*/
module.exports = {
  code: '2000',
  message: '成功',
  data: {
    id: '@id',
    userId: '@id',
    userName: '@cname',
    password: '',
    sessionId: '@id',
  },
};
