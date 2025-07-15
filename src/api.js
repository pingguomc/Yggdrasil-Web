import axios from "axios";
import logger from "../public/util/logger.js";
import router from "@/router/index.js";

// 后端 API 的基础 URL
const baseURL = '/api';

// 创建 axios 实例
const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    timeout: 5000
});

// 在请求拦截器中添加 Token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 在响应拦截器中处理 Token 过期等情况
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Token 过期或无效，清除 Token 并重定向到登录页面
            localStorage.removeItem('token');
            router.push('/login');
        }
        return Promise.reject(error);
    }
);


export const loginAPI = async (username, password) => {
    await api.post(
        '/authserver/authenticate',
        {
            username: username,
            password: password,
            requestUser: true
        }
    ).then((res) => {
        if (res.data.code === 200){
            localStorage.setItem("accessToken", res.data.accessToken);
        }
    });
};

// 注册 API
export const register = async (userData) => {
    try {
        const response = await api.post('/extern/register/user', userData);
        return response.data;
    } catch (error) {

    }
};
