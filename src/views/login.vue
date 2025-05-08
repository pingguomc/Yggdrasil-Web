<template>
  <div class="flex flex-col items-center justify-center min-h-100px">
    <h2 class="text-4xl font-bold mb-5 text-gray-900">登 录</h2>
    <form @submit.prevent="login" class="flex flex-col gap-4 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <InputComponent
          v-model="email"
          type="email"
          placeholder="请输入注册邮箱"
          helpText="请输入注册时使用的有效邮箱地址"
      />
      <InputComponent
          v-model="password"
          type="password"
          placeholder="请输入登录密码"
          helpText="密码需包含大小写字母和数字，长度8-20位"
      />
      <ButtonComponent
          type="submit"
          label="登录账户"
          @click="login"
      />
    </form>
    <p v-if="errorMessage" class="text-red-500 font-bold mt-8 text-xl"> {{ errorMessage }} </p>
    <div v-if="successMessage" class="text-red-500 font-bold mt-8 text-xl">{{ successMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { performLogin } from '../api.js';
import InputComponent from '../components/Input.vue';
import ButtonComponent from '../components/Button.vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const login = async () => {
  const userData = {
    email: email.value,
    password: password.value
  };

  const result = await performLogin(userData);

  if (result.success) {
    successMessage.value = '登录成功';
    errorMessage.value = '';
  } else {
    errorMessage.value = result.errorMessage;
    successMessage.value = '';
  }
};
</script>


<style scoped>

</style>