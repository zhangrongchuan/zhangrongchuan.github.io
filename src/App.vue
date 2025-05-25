<template>
  <div id="app">
    <!-- Sidebar -->
    <aside class="sidebar">
      <nav>
        <ul>
          <li v-for="item in navItems" :key="item.name">
            <a :href="item.link">
              <font-awesome-icon :icon="item.icon" />
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- 文本区，占 1/2 宽度，垂直居中 -->
      <div class="text-block">
        <p class="greeting">👋 Hello, My name is</p>
        <h1 class="name">Zhang Rongchuan</h1>
        <p class="role">I'm a master student in Universität Stuttgart</p>
        <p class="description">
          I design and develop user-friendly web applications with modern technologies
          and scalable architectures.
        </p>
        <button class="btn-cv" @click="downloadCV">Download CV</button>
      </div>

      <!-- 图片区，占 1/2 宽度，紧贴 main-content 右边 -->
      <div class="image-block">
        <img src="/avatar.png" alt="Profile" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faInfoCircle,
  faFileAlt,
  faCode,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// 注册 FontAwesome 图标组件
library.add(faHome, faInfoCircle, faFileAlt, faCode, faHeart)

// 导航菜单项
const navItems = [
  { name: 'home', icon: ['fas', 'home'], link: '#home' },
  { name: 'about', icon: ['fas', 'info-circle'], link: '#about' },
  { name: 'resume', icon: ['fas', 'file-alt'], link: '#resume' },
  { name: 'project', icon: ['fas', 'code'], link: '#project' },
  { name: 'hobby', icon: ['fas', 'heart'], link: '#hobby' }
]

// 下载 CV 方法
function downloadCV() {
  const link = document.createElement('a')
  link.href = '/cv.pdf'
  link.download = 'Zhang_Rongchuan_CV.pdf'
  link.click()
}
</script>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 可展开/收起侧边栏，始终垂直居中图标 */
.sidebar {
  width: 50px;
  background: #111;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.sidebar:hover {
  width: 80px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sidebar li + li {
  margin-top: 1.5rem;
}
.sidebar a {
  color: #fff;
  font-size: 1.5rem;
}

.main-content {
  flex: 1;
  display: flex;
  background: #1a1a1a;
}

.text-block {
  /* 左侧占 1/2，垂直居中 */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: #eee;
}

.text-block .role {
  font-size: 1.5rem;
  margin: 0;
  color: #ccc;
}
/* 在这里插入 */
.text-block .description {
  margin: 1.5rem 0;
  line-height: 1.6;
  color: #9e9e9e; /* 高级灰色 */
}

.image-block {
  /* 右侧占 1/2 */
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.image-block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
