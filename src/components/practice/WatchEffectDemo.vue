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
<!-- 不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。
 watchEffect有点像computed： - 但computed注重的计算出来的值（回调函数的返回值），
 所以必须要写返回值。 - 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。 -->
