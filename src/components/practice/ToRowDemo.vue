<template>
  <div class="demo-tile">
    <el-button type="primary">ToRowDemo练习场</el-button>
  </div>
  <div>
    <h2>{{ state }}</h2>
    <button @click="testToRaw">测试toRaw</button>
    <button @click="testMarkRaw">测试markRaw</button>
  </div>
</template>
<script setup lang="ts">
const state = reactive<any>({
  name: 'tom',
  age: 25
})

const testToRaw = () => {
  const user = toRaw(state)
  user.age++ // 界面不会更新
}

const testMarkRaw = () => {
  const likes = ['a', 'b']
  // state.likes = likes   // likes 是响应式的
  state.likes = markRaw(likes) // likes数组就不再是响应式的了
  setTimeout(() => {
    state.name = 'zhang'
    state.likes[0] += '--'
  }, 1000)
}
// 加载完成
onMounted(() => {
  console.log('ToRowDemo模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
<!-- toRaw的作用是什么？
将一个用reactive生成的响应式对象，变成非响应式的普通对象
然后赋值给新的变量
注意：不影响原来的对象 -->
