import axios from 'axios';
import Logger from '../public/util/logger.js';

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

// 错误处理函数
const handleAxiosError = (error) => {
    Logger.error('请求失败:', error);
    let userFriendlyError;

    if (error.response) {
        const statusCode = error.response.status;
        const data = error.response.data;

        switch (statusCode) {
            case 400:
                userFriendlyError = '请求参数错误，请检查输入信息是否正确。';
                if (data.message) {
                    userFriendlyError += ` 详细信息: ${data.message}`;
                }
                break;
            case 401:
                userFriendlyError = '未授权访问，请登录或检查权限。';
                break;
            case 403:
                userFriendlyError = '禁止访问，您没有足够的权限。';
                break;
            case 404:
                userFriendlyError = '请求的资源不存在，请检查 API 路由是否正确。';
                break;
            case 405:
                userFriendlyError = '请求方法不被允许，请检查请求方法是否正确。';
                break;
            case 500:
                userFriendlyError = '服务器内部错误，请稍后再试或联系管理员。';
                break;
            default:
                userFriendlyError = `服务器返回错误状态码: ${statusCode}。`;
                if (data.message) {
                    userFriendlyError += ` 详细信息: ${data.message}`;
                }
        }
    } else if (error.request) {
        userFriendlyError = '请求超时或网络连接失败，请检查您的网络连接并重试。';
    } else {
        userFriendlyError = '请求配置错误，请检查请求参数或联系开发人员。';
        if (error.message) {
            userFriendlyError += ` 详细信息: ${error.message}`;
        }
    }
    throw new Error(userFriendlyError);
};

// 注册 API
export const register = async (userData) => {
    try {
        const response = await api.post('/extern/register/user', userData);
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

// 登录 API
export const loginAPI = async (userData) => {
    try {
        const response = await api.post('/login', userData);
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

// 验证令牌 API
export const validateToken = async (token) => {
    try {
        const response = await api.post('/validate-token', { token });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

// 刷新令牌 API
export const refreshToken = async (refreshToken) => {
    try {
        const response = await api.post('/refresh-token', { refreshToken });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

// 登出 API
export const logout = async () => {
    try {
        const response = await api.post('/logout');
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};