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
        <button class="btn-cv">Download CV</button>
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
import { faHome, faUser, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

// 注册 FontAwesome 图标组件
library.add(faHome, faUser, faEnvelope, faFile)

// 导航菜单项
const navItems = [
  { name: 'home', icon: 'home', link: '#home' },
  { name: 'about', icon: 'user', link: '#about' },
  { name: 'contact', icon: 'envelope', link: '#contact' },
  { name: 'cv', icon: 'file', link: '/resume.pdf' }
]
</script>

<!-- 全局样式：重置浏览器默认 margin，设置背景 -->
<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #1a1a1a;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 可展开/收起侧边栏 */
.sidebar {
  width: 50px;               /* 默认收起宽度 */
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s;
  overflow: hidden;
}
.sidebar:hover {
  width: 80px;               /* 悬停时展开 */
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li + li {
  margin-top: 2rem;
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
  color: #aaa;
}
.text-block .btn-cv {
  padding: 0.8rem 2rem;
  background: #777;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.text-block .btn-cv:hover {
  background: #fff;
  color: #777;
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

/* 响应式：手机及小屏幕 */
@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    padding: 1rem 0;
  }
  .sidebar:hover {
    width: 100%;
  }
  .main-content {
    flex-direction: column;
  }
  .text-block, .image-block {
    flex: none;
    width: 100%;
    height: auto;
    padding: 2rem;
  }
  .image-block img {
    max-height: 300px;
  }
}
</style>