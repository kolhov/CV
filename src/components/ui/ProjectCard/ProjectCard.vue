<script setup lang="ts">
defineProps<{
  title: string,
  stack: string[],
  imgPlaceholder: string,
  gifOnHover: string
}>()
</script>

<template>
  <div class="w-full h-full rounded-md border relative overflow-hidden">
    <div :class="`bg-[url(${imgPlaceholder})]`"
         class="w-full h-full bg-cover md:bg-contain bg-no-repeat mask-b-from-40% mask-b-to-100%">
    </div>
    <div class="absolute bottom-4 left-4 flex flex-col max-w-full">
      <span>{{title}}</span>
      <div class="text-sm text-muted-foreground flex flex-wrap">
        <span v-for="x in stack">{{x}}&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
