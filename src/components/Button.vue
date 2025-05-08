<template>
  <button
      :type="type"
      @click="handleClick"
      class="w-full p-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  label: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['click']);

const handleClick = (event) => {
  emits('click', event);
};
</script>

<style scoped>

</style>