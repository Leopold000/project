<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷臻选</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                            show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登
                            录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';

import { getTime } from '@/utils/times';
import useUserStore from '@/store/modules/user';
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router';

// 获取el-form组件实例
const loginFormRef = ref();

const userStore = useUserStore();
const $router = useRouter();
//收集账号信息
const loading = ref(false);
let loginForm = reactive({
    username: 'admin',
    password: '111111'
});

//登录方法
const login = async () => {
    // 保证表单校验通过以后才发送登录请求
    await loginFormRef.value.validate();

    loading.value = true;
    // 点击登录按钮以后干什么？
    // 1.收集账号密码并校验
    // 2.通知仓库发登录请求
    // 3.登录成功以后，跳转到首页
    // 4.登录失败，提示错误信息

    try {
        await userStore.userLogin(loginForm);
        $router.push('/home');
        //登录成功，跳转首页
        ElNotification({
            title: `HI,${getTime()}`,
            message: '欢迎回来',
            type: 'success',
        });

        loading.value = false;
    } catch (error: any) {
        ElNotification({
            title: '错误',
            message: error.message || '登录失败，请稍后重试',
            type: 'error',
        });
        loading.value = false;
    }
};

// 自定义校验规则函数
const validateUserName = (rule: any, value: string, callback: any) => {
    // rule: 当前规则对象
    // value: 当前校验的值
    // callback: 校验结果回调函数
    // 函数，如果符合校验要求，调用callback()，否则调用callback(new Error('错误提示信息'))
    if (!value) {
        callback(new Error('请输入用户名'));
    } else if (value.length < 3 || value.length > 8) {
        callback(new Error('用户名长度在3-8个字符之间'));
    } else {
        callback();
    }
};

const validatePassword = (rule: any, value: string, callback: any) => {
    if (!value) {
        callback(new Error('请输入密码'));
    } else if (value.length < 6 || value.length > 16) {
        callback(new Error('密码长度在6-16个字符之间'));
    } else {
        callback();
    }
};

//表单校验规则
const rules = {
    // 规则对象属性：
    // 1. required: 是否必填
    // 2. message: 错误提示信息
    // 3. trigger: 触发校验的时机 blur(失去焦点) change(内容改变)
    // 4. min/max: 字符长度
    username: [
        {
            validator: validateUserName,
            trigger: 'blur',
        }
    ],
    password: [
        {
            validator: validatePassword,
            trigger: 'blur',
        }
    ],
}

</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0px;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>