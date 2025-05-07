<template>
  <div>
    <Navbar />
    <main class="min-h-screen py-8 px-4 md:px-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

</style>