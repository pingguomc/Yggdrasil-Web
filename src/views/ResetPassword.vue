<template>
  <div class="flex flex-col items-center justify-center min-h-100px">
    <h2 class="text-4xl font-bold mb-5 text-gray-900">重置密码</h2>
    <form @submit.prevent="reset" class="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <div>
        <input v-model="oldPassword" type="password" placeholder="请输入旧密码" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-200">
        <p class="text-sm text-gray-500 mt-1">请输入当前使用的密码</p>
      </div>
      <div>
        <input v-model="newPassword" type="password" placeholder="请输入新密码" required class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-200">
        <p class="text-sm text-gray-500 mt-1">密码需包含大小写字母和数字，长度8-20位</p>
      </div>
      <button
          type="submit"
          class="w-full p-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >重置密码</button>
    </form>
    <p v-if="errorMessage" class="text-red-500 font-bold mt-8 text-xl"> {{ errorMessage }} </p>
    <div v-if="successMessage" class="text-green-500 font-bold mt-8 text-xl">{{ successMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { resetPassword } from '../api.js';

const oldPassword = ref('');
const newPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const reset = async () => {
  const userData = {
    oldPassword: oldPassword.value,
    newPassword: newPassword.value
  };

  try {
    const response = await resetPassword(userData);
    successMessage.value = '密码重置成功';
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = '密码重置失败，请重试';
    successMessage.value = '';
  }
};
</script>

<style scoped>

</style>