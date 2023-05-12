<template>练习reactive</template>
<script setup lang="ts">
interface User {
  name: string
  age?: number
}

const zhangsan: User = reactive({
  name: 'zhangsan',
  age: 4
})
console.log(zhangsan, '输出')

// 加载完成
onMounted(() => {
  console.log('reactive模板')
})
</script>
<style scoped lang="scss"></style>
