/*
 * @Author: wdy
 * @Date:   2018-06-13 10:22:38
 * @Last Modified by: wdy
 * @Last Modified time: 2019-04-20 19:14:40
 */
import Mock from 'mockjs';
import baseURL from 'config/configUrl';
import { login } from './login/login';
import { auth } from './auth/auth';
/**
 * 用户信息 mock
 */
Mock.mock(`${baseURL}/login.mock`, login).setup({
  timeout: 1000,
});
/**
 * 权限mock 包含 menu && 菜单
 */
Mock.mock(`${baseURL}/auth.mock`, auth).setup({
  timeout: 1000,
});
