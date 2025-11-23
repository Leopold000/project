// 对外暴露配置路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 路由名称
  },
  {
    // 登录成功后展示数据的路由
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
  },
  {
    // 404页面路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    // 匹配任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
  },
];
