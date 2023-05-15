<template>
  <div class="demo-tile">
    <el-button type="primary">keep-alive练习场</el-button>
  </div>
  <div>
    <div @click="compChange">改变组件</div>
    <KeepAlive include="WatchDemo,ComputedDemo"> <component :is="currentComp" /></KeepAlive>
  </div>
</template>
<script setup lang="ts">
import WatchDemo from '@/components/practice/WatchDemo.vue'
import ComputedDemo from '@/components/practice/computedDemo.vue'

// 使用setup语法糖，这时候的is如果使用字符串会加载不出来，得使用组件实例
let currentComp = shallowRef(WatchDemo)

// 切换组件
const compChange = () => {
  if (currentComp.value == WatchDemo) {
    currentComp.value = ComputedDemo
  } else {
    currentComp.value = WatchDemo
  }
}

// 加载完成
onMounted(() => {
  console.log('keepalive模板')
})
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
