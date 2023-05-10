<template>
  练习场
  {{ count }}
  {{ doubled }}

  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'

const count = ref(22277777)
const doubled = computed(() => count.value * 2)
</script>
<style scoped lang="scss"></style>
