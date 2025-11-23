// 登录接口需要携带的参数ts类型
export interface loginForm {
  username: string;
  password: string;
}

interface dataType {
  token: string;
}

// 登录接口返回的数据ts类型
export interface loginResponseData {
  code: number;
  data: dataType;
}

interface userInfo {
  userId: string;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
// 获取用户信息接口返回的数据ts类型
interface user {
  checkUser: userInfo;
}
export interface userResponseData {
  code: number;
  data: user;
}
