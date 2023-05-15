<template>
  <div class="demo-tile">
    <el-button type="primary">shallow练习场</el-button>
  </div>
  <div>
    <h1>姓名：{{ person.name }}</h1>
    <h2>年龄：{{ person.age }}</h2>
    <h3>喜欢的水果：{{ person.likeFood.fruits.apple }}</h3>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.likeFood.fruits.apple += '！'">修改水果</button>
  </div>
  <div>
    <h1>count：{{ sum }}</h1>
    <button @click="sum++">点击+</button>
  </div>
  <div>
    <h1>count：{{ sum1.n }}</h1>
    <button @click="sum1.n++">点击+</button>
  </div>
</template>
<script setup lang="ts">
// 定义了一段数据
let person = shallowReactive({
  // 只将第一层数据做了响应式处理
  name: '张三',
  age: 18,
  likeFood: {
    fruits: {
      apple: '苹果' // 深层次的数据将会是一个普通的对象
    }
  }
})
// 定义了一段数据
let sum = shallowRef(0)

// 不是响应式
let sum1 = shallowRef({
  // sum1将不在是一个响应式对象
  n: 0
})
// 加载完成
onMounted(() => {
  console.log('shallow模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>

<!-- shallowReactive 与 shallowRef
shallowReactive：只处理对象最外层属性的响应式（浅响应式）。

shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

什么时候使用?

如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。

如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。 -->
