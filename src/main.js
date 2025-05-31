import { createApp } from 'vue'
import App from './App.vue'
import router from './router'    // <- 新增

// 导入全局样式
import './assets/styles/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 一次性导入所有在 Sidebar.vue 中使用的图标
import {
  faHome,
  faInfoCircle,
  faFileAlt,
  faCode,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

// 注册到图标库
library.add(faHome, faInfoCircle, faFileAlt, faCode, faHeart)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
