import { messageTypes } from 'element-plus';

// 对外暴露配置路由
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 路由名称
    meta: {
      title: '登录',
      hidden: true, // 当前路由是否在菜单中隐藏 true:隐藏 false:不隐藏
    },
  },
  {
    // 登录成功后展示数据的路由
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
      hidden: false, // 当前路由是否在菜单中隐藏 true:隐藏 false:不隐藏
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/test',
        component: () => import('@/views/home/index.vue'),
        name: 'test',
        meta: {
          title: '测试页面',
          hidden: true,
        },
      },
    ],
  },
  {
    // 404页面路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    // 匹配任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
];
