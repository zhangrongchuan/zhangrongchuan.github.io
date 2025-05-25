import { createApp } from 'vue'
import App from './App.vue'

// FontAwesome 引入
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

// 把要用的图标加入库
library.add(faHome, faUser, faEnvelope, faFile)

const app = createApp(App)

// 在全局注册 <font-awesome-icon> 组件
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
