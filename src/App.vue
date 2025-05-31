<template>
  <div id="app">
    <!-- 全局侧边栏 -->
    <Sidebar />

    <!-- 路由出口，展示各页面 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// 引入全局侧边栏
import Sidebar from './components/Sidebar.vue'
</script>

<style>
#app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.main-content {
  flex: 1;
  background: #1a1a1a;
  overflow-y: auto;
}
</style>
