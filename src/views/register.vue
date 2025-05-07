<template>
  <div class="flex flex-col items-center justify-center min-h-100px">
    <h2 class="text-4xl font-bold mb-5">注 册</h2>
    <form @submit.prevent="handleRegister" class="flex flex-col gap-4 w-100">
      <div>
        <div class="flex">
          <input v-model="emailPrefix" type="text" placeholder="请输入邮箱前缀" required
                 class="p-3 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 w-full">
          <select v-model="emailSuffix"
                  class="p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:border-blue-500">
            <option value="@redstarmc.top">@redstarmc.top</option>
            <option value="@yahoo.com">@yahoo.com</option>
            <option value="@hotmail.com">@hotmail.com</option>
            <option value="@example.com">@example.com</option>
          </select>
        </div>
        <p class="text-sm text-gray-500 mt-1">请输入有效的邮箱地址</p>
      </div>
      <div>
        <input v-model="password" type="password" placeholder="请输入密码" required
               class="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-100">
        <p class="text-sm text-gray-500 mt-1">密码必须包含至少一个大写字母、一个小写字母和一个数字，且长度至少为 8 位</p>
      </div>
      <div>
        <input v-model="confirmPassword" type="password" placeholder="请重复输入密码" required
               class="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-100">
        <p class="text-sm text-gray-500 mt-1">两次输入的密码需保持一致</p>
      </div>
      <button type="submit"
              class="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">注册</button>
    </form>
    <p v-if="errorMessage" class="text-red-500 font-bold mt-10 text-2xl"> {{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '../api.js';

const emailPrefix = ref('');
const emailSuffix = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');

const handleRegister = async () => {

  const email = emailPrefix.value + emailSuffix.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errorMessage.value = '请输入有效的邮箱地址';
    return;
  }

  if (password.value!== confirmPassword.value) {
    errorMessage.value = '两次输入的密码不一致，请重新输入';
    return;
  }

  const userData = {
    email,
    password: password.value
  };

  try {
    const response = await register(userData);
    console.log('注册成功:', response);
    // 注册成功后可进行跳转等操作
  } catch (error) {
    errorMessage.value = '注册失败，请重试';
  }
};
</script>

<style scoped>

</style>