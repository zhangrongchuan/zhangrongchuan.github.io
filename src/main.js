import { createApp } from 'vue'
import App from './App.vue'

// 导入全局样式
import './assets/styles/global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faUser, faEnvelope, faFile)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
