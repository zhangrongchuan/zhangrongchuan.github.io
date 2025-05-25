<template>
  <div class="flex h-screen bg-[#0f0f0f] text-white font-sans">
    <Sidebar />
    <main class="flex-1 flex items-center justify-center">
      <Hero />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Hero from './components/Hero.vue'
</script>
