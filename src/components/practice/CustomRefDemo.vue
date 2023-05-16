<template>
  <div class="demo-tile">
    <el-button type="primary">CustomRefDemo练习场</el-button>
  </div>
  <div>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
  </div>
</template>
<script setup lang="ts">
//自定义一个ref——名为：myRef
function myRef(value: string, delay: number) {
  let timer: number
  return customRef((track, trigger) => {
    return {
      get() {
        console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`)
        track() //通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
        return value
      },
      set(newValue) {
        console.log(`有人把myRef这个容器中数据改为了：${newValue}`)
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newValue
          trigger() //通知Vue去重新解析模板
        }, delay)
      }
    }
  })
}

// let keyWord = ref('hello') //使用Vue提供的ref
let keyWord = myRef('hello', 1000) //使用程序员自定义的ref
// 加载完成
onMounted(() => {
  console.log('CustomRefDemo模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
