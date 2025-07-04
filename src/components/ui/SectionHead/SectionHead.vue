<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="relative flex py-10 items-center">
    <div class="flex-grow border-t border-gray-600"></div>
    <h1 class="flex-shrink section-head">{{title}}</h1>
    <div class="flex-grow border-t border-gray-600"></div>
  </div>
</template>

<style scoped>

</style>
