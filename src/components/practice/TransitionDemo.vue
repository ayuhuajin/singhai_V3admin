<template>
  <div class="demo-tile">
    <el-button type="primary">练习场</el-button>
  </div>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>
<script setup lang="ts">
const show = ref(true)
// 加载完成
onMounted(() => {
  console.log('模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
