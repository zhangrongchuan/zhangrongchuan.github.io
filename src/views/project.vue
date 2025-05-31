<!-- 在你的 ProjectSection.vue 或其它地方： -->
<template>
  <section class="project-section">
    <h2 class="section-title">我的精选项目</h2>
    <div class="projects-grid">
      <a
        v-for="project in projects"
        :key="project.title"
        :href="project.link"
        target="_blank"
        class="project-card"
      >
        <div class="card-header">
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
        <p class="project-desc">{{ project.description }}</p>
        <div class="card-footer">
          <span class="project-link">查看详情 <span class="arrow">→</span></span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    title: 'AI 自动化攻略生成器',
    description: '基于深度学习与自然语言处理的模型，自动为游戏或应用生成详细攻略和操作指南。用户只需输入游戏名称或关卡信息，系统即可输出完整的攻略文本，支持个性化风格定制。',
    link: 'https://github.com/your-username/ai-guide-generator'
  },
  {
    title: 'Gazebo 仿真环境开发',
    description: '基于 ROS 与 Gazebo 的机器人仿真项目，用于测试自主导航、避障和感知算法。在虚拟环境中快速验证算法性能，并可与真实硬件无缝切换。',
    link: 'https://github.com/your-username/gazebo-simulation'
  }
])
</script>

<style scoped>
/* 让 project-section 本身不再使用其它颜色，而是“透明”，露出 body 的 #0d0d0d */
.project-section {
  background-color: transparent;
  padding: 3rem 1rem;
}

/* 如果你想让 project-section 直接套一个相同背景，也可以写：
.project-section {
  background-color:rgb(0, 0, 0);
  padding: 3rem 1rem;
}
*/

/* 区块标题 */
.section-title {
  font-size: 2.2rem;
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

/* 网格布局：自适应列数 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 卡片背景用稍浅的深灰（比 #0d0d0d 稍亮） */
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background:rgb(66, 66, 66);            /* 较深但比全局底色稍浅，让卡片能够凸显 */
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 1.8rem;
  text-decoration: none;
  color: inherit;                 /* 继承浅色文字 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

/* 卡片标题 */
.card-header {
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
.project-title {
  font-size: 1.5rem;
  color: #e0e0e0;
  margin: 0;
}

/* 卡片描述 */
.project-desc {
  flex-grow: 1;
  font-size: 1rem;
  color: #c0c0c0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* “查看详情” 链接 */
.card-footer {
  display: flex;
  align-items: center;
  font-weight: 500;
}
.project-link {
  font-size: 1rem;
  color: #74c0fc;
}
.project-link .arrow {
  margin-left: 0.4rem;
  transition: margin-left 0.2s ease;
}
.project-card:hover .project-link .arrow {
  margin-left: 0.8rem;
}

/* 确保点击卡片任意位置都能跳转 */
.project-card * {
  pointer-events: none;
}
</style>
