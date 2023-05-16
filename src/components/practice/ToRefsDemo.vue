<template>
  <div class="demo-tile">
    <el-button type="primary">ToRefsDemo练习场</el-button>
  </div>
  <div>
    {{ data.name }}
    {{ nameRef }}
    <el-button @click="changeName">更改name</el-button>
    <el-button @click="changeRefName">更改nameRef</el-button>
  </div>
  <div>
    {{ name }}
    {{ age }}
    <el-button @click="changeToRefsName1">更改1</el-button>
    <el-button @click="changeToRefsName2">更改2</el-button>
  </div>
</template>
<script setup lang="ts">
const data = reactive({
  name: '测试torefs',
  age: 1
})
const nameRef = toRef(data, 'name')
function changeName() {
  data.name = '444'
}
function changeRefName() {
  nameRef.value = '555'
}

// 对一个响应式对象直接解构时解构后的数据将不再有响应式，而使用toRefs可以方便解决这一问题
// const { name, age } = data    //不具有响应性
// 使用了解构赋值语法创建了变量 name, age,
const { name, age } = toRefs(data)
function changeToRefsName1() {
  name.value = 'zhang'
  age.value = 333
}
function changeToRefsName2() {
  data.name = 'lisi'
  data.age = 999
}
// 加载完成
onMounted(() => {
  console.log('ToRefsDemo模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
