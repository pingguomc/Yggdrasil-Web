<script>

import { defineComponent } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NavMenu from "@/components/NavMenu.vue";
import { useRoute } from 'vue-router';

export default defineComponent({
  components: { DefaultLayout , NavMenu },
  data() {
    return {
      showSidebar: true
    };
  },
  created() {
    this.updateShowSidebar();
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
    updateShowSidebar() {
      const route = useRoute();
      this.showSidebar = route.meta.showSidebar;
    }
  }
})

</script>

<template>
  <DefaultLayout>
    <NavMenu v-if="showSidebar" @navigate="navigate" />
    <router-view />
  </DefaultLayout>
</template>

<style scoped>


</style>
