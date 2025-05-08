<template>
  <div class="fixed left-0 top-0 w-64 h-full bg-white shadow-md p-4">
    <div class="flex items-center justify-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Yggdrasil</h1>
    </div>
    <ul class="space-y-2">
      <li>
        <router-link
            to="/dashboard"
            class="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-600"
            active-class="bg-blue-100 text-blue-600"
        >
          仪表盘
        </router-link>
      </li>
      <li>
        <router-link
            to="/profile"
            class="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-600"
            active-class="bg-blue-100 text-blue-600"
        >
          个人资料
        </router-link>
      </li>
      <li>
        <router-link
            to="/reset-password"
            class="block px-4 py-2 text-gray-700 rounded hover:bg-blue-100 hover:text-blue-600"
            active-class="bg-blue-100 text-blue-600"
        >
          重置密码
        </router-link>
      </li>
      <!-- 退出登录 -->
      <li>
        <button
            @click="handleLogout"
            class="w-full px-4 py-2 text-gray-700 rounded hover:bg-red-100 hover:text-red-600 focus:outline-none"
        >
          退出登录
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { logout } from '../api.js'; // 引入之前定义的退出登录函数

const router = useRouter();

const handleLogout = () => {
  logout(); // 清除Token并跳转登录页
  router.push('/login');
};
</script>