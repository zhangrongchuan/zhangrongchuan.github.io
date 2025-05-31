import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Resume from '../views/resume.vue'
import Project from '../views/project.vue'
import Hobby from '../views/hobby.vue'

const routes = [
  { path: '/',       name: 'Home',    component: Home },
  { path: '/about',  name: 'About',   component: About },
  { path: '/resume', name: 'Resume',  component: Resume },
  { path: '/project',name: 'Project', component: Project },
  { path: '/hobby',  name: 'Hobby',   component: Hobby },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
