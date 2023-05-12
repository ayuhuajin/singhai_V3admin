<template>练习</template>
<script setup lang="ts">
import { getName } from '@/api/common'
let name = await getName()
console.log(name, '获取名称')

// 加载完成
onMounted(() => {
  console.log('模板')
})
</script>
<style scoped lang="scss"></style>
