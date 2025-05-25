<template>
  <section class="w-full flex justify-center px-4 py-12">
    <div class="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
      <!-- 文本区域 -->
      <div class="flex-1 text-center md:text-left">
        <p class="text-sm text-yellow-400 mb-2">👋 Hello, I'm</p>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Zhang Rongchuan</h1>
        <p class="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
          A Computer Science master's student focusing on algorithms, deep learning, and autonomous systems.
        </p>
        <a
          href="/cv.pdf"
          download
          class="inline-block bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition font-semibold"
        >
          Download CV
        </a>
      </div>

      <!-- 图片区域 -->
      <div class="flex-1 flex justify-center">
        <img
          src="/avatar.png"
          alt="Portrait"
          class="w-60 h-60 md:w-64 md:h-64 object-cover rounded-xl shadow-xl border-2 border-yellow-500"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// 无逻辑部分
</script>
