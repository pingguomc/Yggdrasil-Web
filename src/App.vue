<script>

import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default defineComponent({
  components: { DefaultLayout }
})
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style scoped>


</style>
