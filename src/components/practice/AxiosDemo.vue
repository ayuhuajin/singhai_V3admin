<template>
  <div class="demo-tile">
    <el-button type="primary">AxiosDemo 练习场</el-button>
  </div>
</template>
<script setup lang="ts">
import { getName } from '@/api/common'
let name = await getName()
console.log(name, '获取名称')

// 加载完成
onMounted(() => {
  console.log('模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
