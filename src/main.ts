import { createApp } from 'vue';
// 引入模板的全局样式
import '@/styles/index.scss';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import App from './App.vue';

import 'virtual:svg-icons-register';

// 引入pinia
import pinia from './store';

// 引入自定义插件对象：注册整个项目全局组件
import globalComponents from '@/components';

import router from './router';

const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

app.use(globalComponents);
app.use(router);
app.use(pinia);

app.mount('#app');
