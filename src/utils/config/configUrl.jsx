/*
 * @Author: wdy
 * @Date: 2019-04-02 17:33:37
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-06-06 15:01:13
 * @des url 配置
 */
// let baseURL = '';
// if (process.env.NODE_ENV === 'production') {
// baseURL = `${window.location.protocol}//${window.location.host}/api`;
// } else {
//   // baseURL = "http://cloud.elecsz.aseit.cn:31112/api";
//   baseURL = 'http://10.100.2.30:31009/api';
// }
const prefix = `${window.location.protocol}//${window.location.host}`;
const baseURL = process.env.NODE_ENV === 'production' ? `${prefix}/api` : 'http://10.100.2.30:31009/api';


export const localURL = 'http://192.168.2.142:3000/api';
export default baseURL;
