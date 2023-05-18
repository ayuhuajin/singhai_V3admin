<template>
  <div class="demo-tile">
    <el-button type="primary">directive练习场</el-button>
  </div>
  <div>
    <input style="width: '200px'" v-focus v-model="hello" />
    <div v-reserve:hello="hello"></div>
  </div>
</template>
<script setup lang="ts">
let hello = ref(' ')
// 加载完成
onMounted(() => {
  console.log('directive模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
