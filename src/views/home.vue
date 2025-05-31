<template>
  <section id="home" class="home-section">
    <div class="text-block">
      <p class="greeting">👋 Hello, My name is</p>
      <h1 class="name">Zhang Rongchuan</h1>
      <p class="role">I'm a Master's student in Computer Science at the University of Stuttgart</p>
      <p class="description">
        I design and develop user-friendly web applications with modern technologies
        and scalable architectures.
      </p>
      <button class="btn-cv" @click="downloadCV">Download CV</button>
    </div>
    <div class="image-block">
      <img src="/avatar.png" alt="Zhang Rongchuan" />
    </div>
  </section>
</template>

<script setup>
// 下载 CV 方法
function downloadCV() {
  const link = document.createElement('a')
  link.href = '/cv.pdf'
  link.download = 'Zhang_Rongchuan_CV.pdf'
  link.click()
}
</script>

<style scoped>
.home-section {
  display: flex;
  height: 100%;
  background: #1a1a1a;
}

.text-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: #eee;
}
.text-block .greeting {
  color: #fff;
  font-weight: 300;
  margin: 0;
}
.text-block .name {
  font-size: 4rem;
  margin: 0.5rem 0;
  color: #fff;
}
.text-block .role {
  font-size: 1.5rem;
  margin: 0;
  color: #ccc;
}
.text-block .description {
  margin: 1.5rem 0;
  line-height: 1.6;
  color: #9e9e9e;
}

.image-block {
  flex: 1;
  overflow: hidden;
}
.image-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>