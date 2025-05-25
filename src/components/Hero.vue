<template>
  <section class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8">
    <!-- 文本部分 -->
    <div>
      <p class="text-sm text-yellow-400 mb-2">👋 Hello, My name is</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Zhang Rongchuan</h1>
      <p class="text-lg text-gray-300 mb-6 leading-relaxed">
        I'm a Computer Science master's student specializing in algorithms, deep learning, and autonomous systems.
        Passionate about creating elegant technical solutions and expressive digital experiences.
      </p>
      <a
        href="/cv.pdf"
        class="inline-block bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition font-semibold"
        download
      >
        Download CV
      </a>
    </div>

    <!-- 图片部分 -->
    <div class="flex justify-center">
      <img
        src="/avatar.png"
        alt="Portrait"
        class="w-72 h-72 object-cover rounded-xl shadow-lg border-2 border-yellow-500"
      />
    </div>
  </section>
</template>

<script setup>
// 这里目前无逻辑，可加入动画或响应后续增强
</script>
