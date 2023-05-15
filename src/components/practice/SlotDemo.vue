<template>
  <div class="demo-tile">
    <el-button type="primary">slot练习场</el-button>
  </div>
  <!-- 显示默认内容 -->
  <SlotSub> </SlotSub>
  <!-- 显示 填充内容 -->
  <SlotSub>
    <div>这是填充插槽</div>
  </SlotSub>
  <!-- 具名插槽 -->
  <SlotSub>
    <template v-slot:header> 这是头部 </template>
    <template v-slot:footer> 这是尾部 </template>
  </SlotSub>
  <!-- 作用域插槽 -->
  <SlotSub>
    <template #item="list"> {{ list.name }} </template>
  </SlotSub>
</template>
<script setup lang="ts">
import SlotSub from '@/components/practice/SlotSub.vue'
import type { listenerCount } from 'process'

// 加载完成
onMounted(() => {
  console.log('slot模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
