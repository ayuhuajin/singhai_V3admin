<template>
  <div class="demo-tile">
    <el-button type="primary">练习ref</el-button>
  </div>
  <el-button @click="count++"> {{ count }} </el-button>
  <div @click="clickThis">点击这里传递emit 事件出去{{ msg }}</div>
</template>
<script setup lang="ts">
// ref 与Ref 区别？？
const year = ref<string | number>(2022)
const el = ref<HTMLInputElement | null>(null)
const year1: Ref<string | number> = ref('2020')
console.log(year, year1, el)

const count = ref(0)
const props = defineProps({
  msg: String
})
// defineProps<{
//   // 采用ts专有声明，无默认值
//   msg: string
//   num?: number
// }>()
// // 采用ts专有声明，有默认值
// interface Props {
//   msg?: string
//   labels?: string[]
// }
// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })

console.log(props.msg, 5678)
const emit = defineEmits(['clickButton'])
const clickThis = () => {
  emit('clickButton', 1)
}

// 定义depose 变量
const deposeName = ref('deposeName')

function deposeFn() {
  return '这是一个deposeFn'
}

defineExpose({
  deposeName,
  deposeFn
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
