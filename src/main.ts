import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import 'normalize.css'
import '@/styles/common.less'
import {
    // create naive ui
    create,
    // component
    NButton
  } from 'naive-ui'
  
  const naive = create({
    components: [NButton]
  })

createApp(App).use(naive).mount('#app')
