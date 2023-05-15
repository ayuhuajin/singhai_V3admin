<template>
  <div class="demo-tile">
    <el-button type="primary"> watch练习+</el-button>
  </div>
  <div>1.侦听单个数据源及停止侦听</div>
  name:{{ person.name }} age:{{ ageRef }}
  <el-button @click="changeAge">改变年龄</el-button>

  <div>2.监听多个数据源</div>
  name:{{ name }} age:{{ age }}
  <el-button @click="change1">同时改变年龄和名字，触发一次</el-button>
  <el-button @click="change2">同时改变年龄和名字，利用nextstick触发两次</el-button>

  <div>3.侦听引用对象（数组Array或对象Object）</div>
  <div>
    <div>ref定义数组：{{ arrayRef }}</div>
    <div>reactive定义数组：{{ arrayReactive }}</div>
  </div>
  <div>
    <button @click="changeArrayRef">改变ref定义数组第一项</button>
    <button @click="changeArrayReactive">改变reactive定义数组第一项</button>
  </div>
</template>
<script setup lang="ts">
// section one
// 侦听一个 getter
const person = reactive({ name: '小松菜奈' })
watch(
  () => person.name,
  (value, oldValue) => {
    console.log(value, oldValue)
  },
  { immediate: true }
)
person.name = '有村架纯'

// 直接侦听ref
const ageRef = ref(16)
const stopAgeWatcher = watch(ageRef, (value, oldValue) => {
  console.log(value, oldValue)
  if (value > 18) {
    stopAgeWatcher() // 当ageRef大于18，停止侦听
  }
})

const changeAge = () => {
  ageRef.value += 1
}

// 2.section 2
// 监听多个数据源
const name = ref('小松菜奈')
const age = ref(25)

watch([name, age], ([name, age], [prevName, prevAge]) => {
  console.log('newName', name, 'oldName', prevName)
  console.log('newAge', age, 'oldAge', prevAge)
})

// 如果你在同一个函数里同时改变这些被侦听的来源，侦听器只会执行一次
const change1 = () => {
  name.value = '有村架纯'
  age.value += 2
}

// 用 nextTick 等待侦听器在下一步改变之前运行,侦听器执行了两次
const change2 = async () => {
  name.value = '新垣结衣'
  await nextTick()
  age.value += 2
}
// 3.section 3

const arrayRef = ref([1, 2, 3, 4])
const arrayReactive = reactive([1, 2, 3, 4])

// ref not deep, 不能深度侦听
const arrayRefWatch = watch(arrayRef, (newValue, oldValue) => {
  console.log('newArrayRefWatch', newValue, 'oldArrayRefWatch', oldValue)
})

// ref deep， 深度侦听，新旧值一样
const arrayRefDeepWatch = watch(
  arrayRef,
  (newValue, oldValue) => {
    console.log('newArrayRefDeepWatch', newValue, 'oldArrayRefDeepWatch', oldValue)
  },
  { deep: true }
)

// ref deep, getter形式 ， 新旧值不一样
const arrayRefDeepGetterWatch = watch(
  () => [...arrayRef.value],
  (newValue, oldValue) => {
    console.log('newArrayRefDeepGetterWatch', newValue, 'oldArrayRefDeepGetterWatch', oldValue)
  }
)

// reactive，默认深度监听，可以不设置deep:true, 新旧值一样
const arrayReactiveWatch = watch(arrayReactive, (newValue, oldValue) => {
  console.log('newArrayReactiveWatch', newValue, 'oldArrayReactiveWatch', oldValue)
})

// reactive，getter形式 ， 新旧值不一样
const arrayReactiveGetterWatch = watch(
  () => [...arrayReactive],
  (newValue, oldValue) => {
    console.log('newArrayReactiveFuncWatch', newValue, 'oldArrayReactiveFuncWatch', oldValue)
  }
)

const changeArrayRef = () => {
  arrayRef.value[0] = 3
}
const changeArrayReactive = () => {
  arrayReactive[0] = 6
}

// 加载完成
onMounted(() => {
  console.log('watch模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
