<template>
  路由 练习场
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <el-button @click="routerPushByParams">路由跳转params</el-button>
  <el-button @click="routerPushByQuery">路由跳转query</el-button>
</template>
<script setup lang="ts" name="routeruse">
import { RouterLink } from 'vue-router'
const router = useRouter()
const { proxy } = getCurrentInstance() as any
console.log(router, proxy, 7897)

function deposeFn() {
  return '这是一个deposeFn'
}
function routerPushByParams() {
  router.push({
    path: '/about',
    params: {
      info: 'test'
    }
  })
}
function routerPushByQuery() {
  router.push({
    path: '/about',
    query: {
      info: 'test'
    }
  })
}
// 加载完成
onMounted(() => {
  // console.log(router, proxy)
})
</script>
<style scoped lang="scss"></style>
