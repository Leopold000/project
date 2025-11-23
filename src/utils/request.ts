// 进行Axios的二次封装,使用拦截器统一处理请求和响应
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 第一步：利用axios对象的create方法，创建axios实例（其他的配置：基础路径、超时的时间）
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径，发请求的时候，路径当中会出现api
  timeout: 5000, //超时时间5秒
});

// 第二步：request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config,配置对象，headers属性请求头，经常给服务器端携带公共参数
  // 返回配置对象
  return config;
});

// 第三步：响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功回调：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
    // 例如：可以简化数据
    return response.data;
  },
  (error) => {
    // 响应失败的回调,处理http网络错误的状态码
    // 定义一个变量，存储网络错误信息
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'token过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求错误,未找到该资源';
        break;
      case 500:
        message = '服务器错误,请联系管理员';
        break;
      default:
        message = '网络错误';
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

// 第四步：导出request
export default request;
