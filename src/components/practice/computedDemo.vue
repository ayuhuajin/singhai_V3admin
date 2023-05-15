<template>
  <div class="demo-tile">
    <el-button type="primary">computed练习</el-button>
  </div>
  <h1>{{ msg }}</h1>
  <h1>{{ reverseMsg }}</h1>
  <hr />
  <el-button type="primary" @click="handleName">修改</el-button>
  <div>计算和</div>
  <div>{{ getSum }}</div>
  <el-button type="primary" @click="handSum1">修改sum1</el-button>
  <el-button type="primary" @click="handSum2">修改sum2</el-button>
</template>
<script setup lang="ts">
const msg = ref('hello vue3-computed')
const reverseMsg = computed(() => {
  return msg.value.split('').reverse().join('')
})
const num1 = ref(1)
const num2 = ref(2)

const getSum = computed(() => {
  return num1.value + num2.value
})
function handleName() {
  msg.value = reverseMsg.value
}
function handSum1() {
  num1.value = num1.value + 2
}
function handSum2() {
  num2.value = num2.value + 4
}
// 加载完成
onMounted(() => {
  console.log('computed模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
