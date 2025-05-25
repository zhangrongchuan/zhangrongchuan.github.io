<template>
  <h1 class="text-3xl font-bold text-blue-600 text-center mt-10">
    Tailwind CSS is working!
  </h1>
</template>


<script setup>
// 没有逻辑部分暂时为空
</script>

<style>
@keyframes fadein {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadein {
  animation: fadein 0.8s ease-out;
}
</style>
