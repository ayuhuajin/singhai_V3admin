import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from "element-plus"
import locale from "element-plus/lib/locale/lang/zh-cn" // 中文语言
import 'element-plus/dist/index.css'

import * as echarts from 'echarts'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 全局方法挂载
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.useDict = '444'

app.use(createPinia())
app.use(router)
// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: "default",
})
// 自定义指令  自动聚焦
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
})
//自定义指令, 给输入的值进行反转
app.directive('reserve', {
  beforeUpdate(el, binding) {
    console.log(binding)
    el.innerText = binding.value ? binding.value.split('').reverse().join('') : ''
  }
})
app.mount('#app')
