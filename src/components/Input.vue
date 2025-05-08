<template>
  <div>
    <!-- 使用 v-bind 和 v-on 替代 v-model -->
    <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        required
        class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-200"
        @input="updateValue"
    />
    <p class="text-sm text-gray-500 mt-1">{{ props.helpText }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  helpText: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emits('update:modelValue', event.target.value);
};
</script>

<style scoped>

</style>