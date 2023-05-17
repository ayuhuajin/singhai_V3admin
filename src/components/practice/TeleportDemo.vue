<template>
  <div class="demo-tile">
    <el-button type="primary">teleport练习场</el-button>
  </div>
  <div>
    <el-button @click="dialogVisible = true">打开弹窗</el-button>
    <el-dialog v-model="dialogVisible" append-to-body title="我是弹窗" width="30%"> </el-dialog>
  </div>
  <!-- 被传送到和body 同级 -->
  <div>
    <Teleport to="body">
      <div>我是被 teleport 包裹的元素</div>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
// toast 的封装
const dialogVisible = ref(false)
// 加载完成
onMounted(() => {
  console.log('teleport模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
