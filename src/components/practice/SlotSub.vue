<template>
  <div class="demo-tile">
    <header>
      <slot name="header"></slot>
    </header>
    <slot>这是默认内容</slot>
    <footer>
      <slot name="footer"></slot>
    </footer>

    <div>
      <slot name="list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <slot name="item" v-bind="item"></slot>
          </li>
        </ul>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const list = reactive([
  { name: '张三', age: 12 },
  { name: '李四', age: 13 },
  { name: '王五', age: 14 }
])
// 加载完成
onMounted(() => {
  console.log('slot模板')
})
</script>
<style scoped lang="scss">
@import '@/assets/common.scss';
</style>
