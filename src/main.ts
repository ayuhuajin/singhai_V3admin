import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from "element-plus"
import locale from "element-plus/lib/locale/lang/zh-cn" // 中文语言
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 全局方法挂载
app.config.globalProperties.useDict = '444'

app.use(createPinia())
app.use(router)
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: "default",
})

app.mount('#app')
