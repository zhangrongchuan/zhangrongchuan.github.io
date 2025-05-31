<template>
  <section class="resume-section">
    <h2 class="main-title">Résumé</h2>

    <!-- 遍历各个区块 -->
    <div v-for="(block, idx) in blocks" :key="idx" class="block-section">
      <!-- 模块标题 -->
      <h3 class="block-title">{{ block.title }}</h3>
      <ul class="block-list">
        <li v-for="(item, i) in block.data" :key="i" class="block-item">
          <!-- 教育模块 -->
          <template v-if="block.type === 'education'">
            <!-- 默认可见部分：时间 + 学校、学位 -->
            <div class="visible-line">
              <span class="period">{{ item.period }}</span><br />
              <span class="headline">{{ item.school }}, {{ item.degree }}</span>
            </div>
            <!-- 悬停才显示的部分 -->
            <div class="hidden-details">
              <span class="gpa">GPA: {{ item.gpa }}</span>
            </div>
          </template>

          <!-- 工作模块 -->
          <template v-else-if="block.type === 'work'">
            <!-- 默认可见部分：时间 + 职位、公司 -->
            <div class="visible-line">
              <span class="period">{{ item.period }}</span><br />
              <span class="headline">{{ item.title }}, {{ item.company }}</span>
            </div>
            <!-- 悬停才显示的部分 -->
            <div class="hidden-details">
              <div class="details" v-html="item.details"></div>
            </div>
          </template>

          <!-- 出版物模块 -->
          <template v-else-if="block.type === 'publication'">
            <!-- 默认可见部分：标题 -->
            <div class="visible-line">
              <span class="headline">{{ item.title }}</span>
            </div>
            <!-- 悬停才显示的部分：上下文 -->
            <div class="hidden-details">
              <em class="context">{{ item.context }}</em>
            </div>
          </template>

          <!-- 项目模块 -->
          <template v-else-if="block.type === 'project'">
            <!-- 默认可见部分：项目名称 -->
            <div class="visible-line">
              <span class="headline">{{ item.title }}</span>
            </div>
            <!-- 悬停才显示的部分：描述 -->
            <div class="hidden-details">
              <span class="description">{{ item.description }}</span>
            </div>
          </template>

          <!-- 技能模块 -->
          <template v-else-if="block.type === 'skill'">
            <!-- 技能条一般较短，直接显示 -->
            <div class="visible-line">
              <strong>{{ item.label }}:</strong> {{ item.items }}
            </div>
          </template>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const blocks = ref([
  {
    type: 'education',
    title: 'Education',
    data: [
      {
        school: 'National University of Malaysia',
        degree: 'B.Sc. in Computer Science with honors',
        period: 'Sep 2019 – Oct 2023',
        gpa: '3.46/4.0 (German equivalent: 1.5)',
      },
      {
        school: 'University of Stuttgart',
        degree: 'M.Sc. in Computer Science',
        period: 'Apr 2024 – Present',
        gpa: 'Current GPA: 2.3',
      },
    ],
  },
  {
    type: 'work',
    title: 'Work Experiences',
    data: [
      {
        title: 'Research Assistant',
        company: 'UKM – CAIT LAB',
        period: 'Oct 2022 – Mar 2023',
        details:
          'Focus Areas: Semantic Segmentation, Computer Vision<br>• Experimented with FCNN integration for semantic segmentation and optimized performance.<br>• Authored paper on Tiny Object Segmentation using Hierarchical Constrained-CNN.',
      },
      {
        title: 'Studentischen Hilfskraft',
        company: 'Uni Stuttgart – Institute for KI',
        period: 'Jun 2024 – Mar 2025',
        details:
          'Focus Areas: Knowledge Graph, NLP<br>• Trained and fine-tuned temporal knowledge graph embedding models.<br>• Developed improved evaluation metrics for temporal KG embeddings.',
      },
      {
        title: 'R&D Intern',
        company: 'Shining3D - R&D Germany',
        period: 'Apr 2025 – Sep 2025',
        details:
          'Focus Areas: Knowledge Graph, NLP<br>• Built intelligent control interface integrating MCP protocol with LLM for 3D scanners.<br>• Automated scanning workflows using path planning techniques.',
      },
    ],
  },
  {
    type: 'publication',
    title: 'Publications',
    data: [
      {
        title: 'Photometric and Geometric Data Augmentations for Small Object Detection',
        context: "Bachelor's Thesis, National University of Malaysia, Sep 2022",
      },
      {
        title: 'Towards Foundation Model on Temporal Knowledge Graph Reasoning',
        context: 'Conference Paper, Sep 2025',
      },
    ],
  },
  {
    type: 'project',
    title: 'Projects',
    data: [
      {
        title: 'Hierarchical Constrained CNN for Tiny Object Segmentation',
        description:
          'Developed a CNN-based model with novel hierarchical feature mapping to detect tiny objects in UAVid and golf datasets.',
      },
    ],
  },
  {
    type: 'skill',
    title: 'Skills',
    data: [
      { label: 'Languages', items: 'Java, Python, C++, SQL, SPARQL' },
      { label: 'Frameworks', items: 'TensorFlow, PyTorch, Lightning, Keras' },
      { label: 'Libraries', items: 'NumPy, Pandas, Matplotlib' },
      { label: 'Tools', items: 'ROS, Gazebo, Docker, Linux, Git, LaTeX' },
      { label: 'Linguistic', items: 'English (Proficient), German (Beginner), Chinese (Native)' },
    ],
  },
])
</script>

<style scoped>
/* =============== 整体布局 & 背景 =============== */
.resume-section {
  /* 宽度占页面的 80% */
  width: 50%;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #c9d1d9;     /* 浅灰白 */
  background: rgb(41, 41, 41); /* 极深夜蓝/近黑 */
  min-height: 100vh;
}

/* =============== 主标题 =============== */
.main-title {
  font-size: 2.75rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color:rgb(255, 255, 255);   /* 柔和金黄 */
  text-shadow: 0 0 8px rgba(245, 197, 24, 0.6);
}

/* =============== 模块标题 =============== */
.block-section {
  margin-bottom: 2.5rem;
}

/* 将原先的电光蓝 (#58a6ff) 改成与主标题相同的金黄色 (#f5c518) */
.block-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd966;   /* 与主标题保持一致的柔和金黄 */
  border-bottom: 2px solid #444665;
  display: inline-block;
  padding-bottom: 0.2rem;
}

/* =============== 列表样式 =============== */
.block-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.block-item {
  margin-bottom: 1rem;
  background: #161b22;               /* 深夜灰 */
  border-radius: 6px;
  padding: 1rem 1.2rem;
  transition: background 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
}

/* 鼠标悬停整行高亮 & 微微抬升 */
.block-item:hover {
  background: #21262d;               /* 悬停提亮 */
  transform: translateY(-2px);
}

/* =============== 可见部分 =============== */
.visible-line {
  font-size: 1.025rem;
  line-height: 1.5;
  color: #c9d1d9;
}

/* 时间样式 */
.period {
  display: block;
  font-style: italic;
  color: #8b949e;   /* 冷灰 */
  margin-bottom: 0.3rem;
}

/* 标题样式（学校/学位、职位/公司等） */
.headline {
  font-weight: 600;
  color: #c9d1d9;
}

/* =============== 隐藏/展开 =============== */
/* 默认隐藏的详细内容 */
.hidden-details {
  display: none;
  margin-top: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #8b949e;   /* 冷灰 */
}

/* 鼠标悬停时展开本条目下的详细内容 */
.block-item:hover .hidden-details {
  display: block;
}

/* 额外的详细文本样式 */
.gpa {
  color: #8b949e;
}

.details {
  color: #c9d1d9;
}

.context {
  font-style: italic;
  color: #8b949e;
}

.description {
  color: #c9d1d9;
}

/* =============== 响应式 =============== */
@media screen and (max-width: 600px) {
  .resume-section {
    width: 95%;
    padding: 1.5rem 0.8rem;
  }
  .block-item {
    padding: 0.8rem 1rem;
  }
}
</style>
