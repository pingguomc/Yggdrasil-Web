import axios from 'axios';

// 后端 API 的基础 URL
const baseURL = 'http://your-backend-api-url';


const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

// 注册 API 请求
export const register = async (userData) => {
    try {
        const response = await api.post('/aaa/register', userData);
        return response.data;
    } catch (error) {
        console.error('注册失败:', error);
        throw error;
    }
};

// 登录 API 请求
const login = async (userData) => {
    try {
        return await api.post('/aaaa', userData);
    } catch (error) {
        console.error('登陆失败:', error)
        throw error;
    }
};

export const performLogin = async (userData) => {
    try {
        const response = await login(userData);
        if (response.status === 200) {
            return { success: true };
        } else {
            const errorData = response.data;
            return { success: false, errorMessage: `错误: ${errorData.errorMessage}` };
        }
    } catch (error) {
        if (error.response) {
            const errorData = error.response.data;
            return { success: false, errorMessage: `错误: ${errorData.errorMessage}` };
        }
        return { success: false, errorMessage: '网络错误，请稍后重试' };
    }
};
