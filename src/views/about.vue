<template>
  <section id="about" class="about-section">
    <h2>About Me</h2>

    <!-- 1. 简短个人简介 -->
    <p class="intro">
      Hello! I’m <strong>Zhang Rongchuan</strong>, currently pursuing my Master’s in Computer Science at the University of Stuttgart.  
      I’m passionate about leveraging AI and software engineering to build intelligent systems that bridge cutting-edge algorithms with real-world applications.
    </p>

    <hr class="divider" />

    <!-- 2. 成长与职业故事 -->
    <h3>Background & Motivation</h3>
    <p class="background">
      My journey in AI and software engineering began during my undergraduate studies, when I built my first deep learning model for handwritten digit classification.  
      That initial spark drove me to explore a variety of computer vision tasks—ranging from object detection to semantic segmentation and knowledge graph embeddings.  
      In 2022, I designed and deployed a Flask-based object detection system, optimizing models and crafting custom data-augmentation strategies specifically for tiny object detection.  
      As a research assistant at the CAIT Lab (UKM), I further developed a hierarchical constrained CNN to improve semantic segmentation of small objects.  
      Now at the University of Stuttgart, I’m working on temporal knowledge graph embeddings—fine-tuning pre-trained models and analyzing evaluation metrics—to push the boundaries of what autonomous agents can learn from temporal data.
    </p>

    <hr class="divider" />

    <!-- 3. 核心技能与专长领域 -->
    <h3>Skills & Expertise</h3>
    <ul class="skills-list">
      <li>
        <strong>Programming & Frameworks:</strong>  
        Proficient in Python, NumPy, Pandas, and scikit-learn. Experienced in developing Flask-based APIs to serve trained ML models in production.
      </li>
      <li>
        <strong>Computer Vision & Deep Learning:</strong>  
        Built and optimized object detection pipelines (e.g., YOLO, Faster R-CNN). Designed hierarchical CNN architectures to improve small-object segmentation accuracy.
      </li>
      <li>
        <strong>Knowledge Graphs & NLP:</strong>  
        Worked on temporal knowledge graph embeddings—fine-tuning Transformer-based architectures and diffusion models to enhance cross-modal perception and decision-making in autonomous agents.
      </li>
      <li>
        <strong>Autonomous Driving Simulation:</strong>  
        Developed ROS & Gazebo environments, crafting realistic traffic scenarios and sensor models to validate perception, planning, and control stacks.
      </li>
      <li>
        <strong>Databases & Collaboration:</strong>  
        Experienced with PostgreSQL and SQLite for data storage and retrieval. Comfortable using Git for version control and collaborating in multi-disciplinary teams.
      </li>
    </ul>

    <hr class="divider" />

    <!-- 4. 个人兴趣与爱好 -->
    <h3>Personal Interests</h3>
    <ul class="interests-list">
      <li>
        <strong>Autonomous Robotics & Simulation:</strong>  
        I love diving into ROS-based workflows and custom Gazebo worlds—seeing a virtual agent learn to “drive” safely through complex scenarios never gets old.
      </li>
      <li>
        <strong>Data Visualization & Storytelling:</strong>  
        Outside of research, I enjoy crafting interactive visualizations to communicate complex data insights. I often combine Python scripts with web-based libraries (D3.js, Plotly) to build intuitive dashboards.
      </li>
      <li>
        <strong>Open Source & Community:</strong>  
        I contribute regularly to GitHub projects—especially in education and data-visualization domains. Sharing code and documentation is how I give back to the community.
      </li>
      <li>
        <strong>Hiking & Photography:</strong>  
        On weekends, you’ll find me exploring trails across Baden-Württemberg. I document every hike through photography and later transform those images into interactive photo journals on my blog.
      </li>
    </ul>

    <hr class="divider" />

    <!-- 5. 价值观与工作态度 -->
    <h3>Values & Work Ethic</h3>
    <ul class="values-list">
      <li>
        <strong>User-Centered Design:</strong>  
        I believe every AI system exists to solve real human problems. I iterate quickly, gather feedback, and keep the end-user experience at the core of my workflow.
      </li>
      <li>
        <strong>Continuous Learning & Sharing:</strong>  
        The AI landscape evolves rapidly—so I dedicate time each week to reading research papers, attending seminars, and writing technical blog posts to share my findings.
      </li>
      <li>
        <strong>Collaboration & Communication:</strong>  
        In cross-functional teams, I serve as a bridge between researchers, engineers, and stakeholders. I value transparent communication, well-documented code, and peer reviews.
      </li>
      <li>
        <strong>Robustness & Scalability:</strong>  
        Whether I’m training a CNN for object detection or architecting a microservice to serve ML models, I ensure code quality, testing, and CI/CD best practices are in place for production-ready solutions.
      </li>
    </ul>

    <hr class="divider" />

    <!-- 7. 愿景与未来规划 -->
    <h3>Vision & Future Goals</h3>
    <p class="future">
      My immediate goal is to transition into a PhD program focused on the intersection of large-scale learning models and robotic systems.  
      I aim to develop autonomy stacks that can thrive in complex, unpredictable environments—combining robust perception, scalable inference, and real-time control.  
      Ultimately, I want to contribute open-source frameworks that accelerate research in autonomous driving and intelligent robotics.
    </p>

    <hr class="divider" />

    <!-- 联系方式 -->
    <h3>Let’s Connect</h3>
    <ul class="contact-list">
      <li>✉️ <a href="mailto:st191486@stud.uni-stuttgart.de">st191486@stud.uni-stuttgart.de</a></li>
      <li>💻 <a href="https://github.com/zhangrongchuan" target="_blank">github.com/zhangrongchuan</a></li>
      <li>🔗 <a href="https://www.linkedin.com/in/rongchuanzhang0913" target="_blank">linkedin.com/in/rongchuanzhang0913</a></li>
    </ul>
  </section>
</template>

<script setup>
// 这个 <script> 块暂时不需要任何逻辑，留空即可
</script>

<style scoped>
.about-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color:rgb(41, 41, 41);  /* 整体深色背景 */
  color: #e0e0eb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.about-section h2 {
  font-size: 2.75rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
}

.about-section h3 {
  font-size: 1.75rem;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  color: #ffd966;
  border-bottom: 2px solid #444665;
  padding-bottom: 0.25rem;
}

/* 段落文本 */
.intro,
.background,
.future {
  font-size: 1rem;
  line-height: 1.75;
  margin-top: 1rem;
}

/* 分隔线：渐变效果 */
.divider {
  border: none;
  height: 1px;
  margin: 2rem 0;
  background: linear-gradient(to right, transparent, #444665, transparent);
}

/* 统一去掉 li 的深色卡片背景 */
.skills-list,
.interests-list,
.values-list,
.contact-list {
  list-style: none;
  padding-left: 0;
  margin: 0;  /* 确保外边距便于布局 */
}

.skills-list li,
.interests-list li,
.values-list li {
  background-color: transparent !important;  /* 取消深色卡片背景 */
  border-radius: 0;
  padding: 0;
  margin-bottom: 1rem;  /* 保留垂直间距 */
  line-height: 1.6;
}

/* 强调小标题文字 */
.skills-list li strong,
.interests-list li strong,
.values-list li strong {
  color: #ffffff;
}

/* 联系方式列表 */
.contact-list li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

/* 链接样式 */
.about-section a {
  color: #4db6ac;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.about-section a:hover {
  color: #81c784;
  text-decoration: underline;
}

/* 响应式支持 */
@media (max-width: 768px) {
  .about-section {
    padding: 3rem 1.5rem;
  }
  .about-section h2 {
    font-size: 2.25rem;
  }
  .about-section h3 {
    font-size: 1.5rem;
  }
}
</style>
