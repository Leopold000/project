// 创建用户相关的小仓库
import { defineStore } from 'pinia';
import type { loginForm } from '@/api/user/type';
import { reqLogin } from '@/api/user';
import type { loginResponseData } from '@/api/user/type';
import type { UserState } from './types/types';
import { GET_TOKEN, SET_TOKEN } from '../../utils/token';
// 创建用户小仓库
const useUserStore = defineStore('user', {
  // 仓库存储的数据
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 初始化仓库数据的时候从本地存储获取token
    };
  },
  // 异步逻辑的地方
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      // 登录请求 成功
      if (result.code === 200) {
        this.token = (result.data.token as string) || '';
        // 持久化存储token
        SET_TOKEN(this.token);

        return 'ok';
      } else {
        // 处理登录失败的情况
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  // 类似计算属性
  getters: {},
});

// 导出用户小仓库
export default useUserStore;
