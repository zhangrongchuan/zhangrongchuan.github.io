<template>
  <section class="hobby-section">
    <h2>Hobbies</h2>
    <ul class="hobby-list">
      <li v-for="hobby in hobbies" :key="hobby.name">
        <font-awesome-icon :icon="hobby.icon" />
        <span>{{ hobby.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { faGamepad, faMusic, faCamera, faBook } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faGamepad, faMusic, faCamera, faBook)

const hobbies = ref([
  { name: 'Photography', icon: ['fas', 'camera'] },
  { name: 'Diving', icon: ['fas', 'swimmer'] },
  { name: 'Reading', icon: ['fas', 'book'] }
])
</script>

<style scoped>
.hobby-section {
  padding: 2rem;
  color: #eee;
}
.hobby-section h2 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 1rem;
}
.hobby-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.hobby-list li {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #222;
  border-radius: 8px;
}
.hobby-list span {
  margin-left: 0.5rem;
  color: #ccc;
}
</style>
