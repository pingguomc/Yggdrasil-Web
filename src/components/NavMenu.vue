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
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>