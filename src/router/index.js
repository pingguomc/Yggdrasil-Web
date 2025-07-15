import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from "../views/register.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { showSidebar: false }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { showSidebar: true }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { showSidebar: false }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { showSidebar: true }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('accessToken');

    // 如果路由需要认证但用户未登录
    if (to.meta.requiresAuth && !token) {
        // 重定向到登录页面，并保存原始路径
        next('/login');
    }
    else {
        next(); // 继续导航
    }
});

export default router;