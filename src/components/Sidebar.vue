<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.name">
          <router-link :to="item.link" class="nav-link">
            <font-awesome-icon :icon="item.icon" />
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const navItems = [
  { name: 'home',   icon: ['fas','home'],        link: '/'       },
  { name: 'about',  icon: ['fas','info-circle'], link: '/about'  },
  { name: 'resume', icon: ['fas','file-alt'],    link: '/resume' },
  { name: 'project',icon: ['fas','code'],        link: '/project'},
  { name: 'hobby',  icon: ['fas','heart'],       link: '/hobby'  }
]
</script>

<style scoped>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar li + li {
  margin-top: 1.5rem;
}
.nav-link {
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.nav-link.router-link-active {
  color: #ffd700;
}
</style>
