<template>
  练习场
  <div>mouse position is {{ x }} {{ y }}</div>
  {{ countNumber }}
  <RefDemo ref="refDemo" :msg="refStr" @clickButton="getCount"></RefDemo>
  <RouterUse></RouterUse>
  <AxiosDemo></AxiosDemo>
</template>
<script setup lang="ts">
import { useMouse } from '@/hooks/practice/useMouse'
import RefDemo from '@/components/practice/RefDemo.vue'
import RouterUse from '@/components/practice/RouterUse.vue'
import AxiosDemo from '@/components/practice/AxiosDemo.vue'

// 获取depose 变量 函数
const refDemo = ref()
// function changeDepose() {
//   console.log(depose.value.deposeName, 4444)
// }

// ref传参
const refStr = ref('ref demo 的参数')

// 获取 emit 传递出来的事件
const countNumber = ref(0)
function getCount(e: number) {
  console.log(4, e)
  countNumber.value++
}
// 获取鼠标点位置
const { x, y } = useMouse()
// useMouse 示例
// const x = ref(0)
// const y = ref(0)
// function update(event: MouseEvent) {
//   x.value = event.pageX
//   y.value = event.pageY
// }
// onMounted(() => window.addEventListener('mousemove', update))
// onUnmounted(() => {
//   window.removeEventListener('mousemove', update)
// })
// 加载完成
onMounted(() => {
  console.log(refDemo.value.deposeName, '获取子组件 deposeName')
})
</script>
<style scoped lang="scss"></style>
