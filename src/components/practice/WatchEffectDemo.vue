<template>
  <div class="demo-tile">
    <el-button type="primary">watcheffect模板练习场</el-button>
  </div>
  {{ userID }}
  <div @click="userID++">点击uerId</div>
</template>
<script setup lang="ts">
const userID = ref(0)
watchEffect(() => console.log('Value: ' + userID.value))

setTimeout(() => {
  userID.value = 1
}, 1000)
// 加载完成
onMounted(() => {
  console.log('watcheffect模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
