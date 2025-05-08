<template>
  <div class="flex flex-col items-center justify-center min-h-100px">
    <h2 class="text-4xl font-bold mb-5">注 册</h2>
    <form @submit.prevent="handleRegister" class="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
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
        <Input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            required
            helpText="密码必须包含至少一个大写字母、一个小写字母和一个数字，且长度至少为 8 位"
        />
      </div>
      <div>
        <Input
            v-model="confirmPassword"
            type="password"
            placeholder="请重复输入密码"
            required
            helpText="两次输入的密码需保持一致"
        />
      </div>
      <Button type="submit" label="注册" :disabled="isLoading">
        {{ isLoading ? '注册中...' : '注册' }}
      </Button>
    </form>
    <p v-if="errorMessage" class="text-red-500 font-bold mt-10 text-2xl"> {{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '../api.js';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

const emailPrefix = ref('');
const emailSuffix = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

const handleRegister = async () => {
  errorMessage.value = '';
  const email = emailPrefix.value + emailSuffix.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errorMessage.value = '请输入有效的邮箱地址';
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMessage.value = '两次输入的密码不一致，请重新输入';
    return;
  }

  const userData = {
    username: email.valueOf(),
    password: password.value
  };

  isLoading.value = true;

  try {
    const response = await register(userData);
    isLoading.value = false;
    console.log('注册成功:', response);
    emailPrefix.value = '';
    emailSuffix.value = '';
    password.value = '';
    confirmPassword.value = '';
    errorMessage.value = '注册成功！请登录。';
  } catch (error) {
    isLoading.value = false;
    errorMessage.value = error.message || '注册失败，请重试';
    console.error('注册失败:', error);
  }
};
</script>

<style scoped>
/* 添加一些样式以提高表单的美观度 */
input, select {
  appearance: none;
  -webkit-appearance: none;
}
</style>