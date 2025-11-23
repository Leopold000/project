// 统一管理用户相关接口
import request from '@/utils/request';
import type { loginForm, loginResponseData, userResponseData } from './type';
// 统一管理接口
enum UserAPI {
  // 用户登录接口
  LOGIN_URL = '/user/login',
  // 获取用户信息接口
  USER_INFO_URL = '/user/info',
}

// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(UserAPI.LOGIN_URL, data);

// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, userResponseData>(UserAPI.USER_INFO_URL);
