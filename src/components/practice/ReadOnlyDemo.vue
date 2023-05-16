<template>
  <div class="demo-tile">
    <el-button type="primary">ReadOnlyDemo练习场</el-button>
  </div>
  <!-- readonly -->
  <div>
    <div>{{ viewSate }}</div>
    <button @click="func1">按钮</button>
  </div>
  <!-- shallowReadonly 浅只读 -->
  <div>
    <div>{{ viewSate1 }}</div>
    <button @click="func2">按钮</button>
  </div>
</template>
<script setup lang="ts">
let state = reactive({
  name: '张三',
  age: 20,
  sex: '男'
})
// viewSate这个数据只能够读取
// 是一个深度只读，不能够修改
let viewSate = readonly(state)
function func1() {
  viewSate.name = '李四'
}

let state1 = reactive({
  name: '张三',
  age: 20,
  info: {
    h: 1.9,
    w: '64kg'
  }
})
// shallowReadonly 浅只读
// shallowReadonly中放了一个对象，对象中的直接属性是不可以修改的；
// 如果对象下的属性下还有对象。那么这个对象下的属性就可以修改的
let viewSate1 = shallowReadonly(state1)
function func2() {
  // 修改失败
  // viewSate.name="李四"

  // 修改成功
  viewSate1.info.w = '128斤'
}

// 加载完成
onMounted(() => {
  console.log('ReadOnlyDemo模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
<!-- 被readonly包裹的数据只能够读取。
是一个深度只读，不能够修改。
我们看一下面的代码。
我们想修改值,但是修改后视图无响应。
并且控制台警告目标为只读
readonly深度只读的应用场景：
比如我们登录后用户信息不会发生改变了。 -->
