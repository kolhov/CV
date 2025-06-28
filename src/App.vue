<script setup lang="ts">
import LayoutMain from "@/components/layout/LayoutMain.vue";
import {useLocaleStore} from "@/stores/locale-store.ts";

const langStore = useLocaleStore();
langStore.initStore();

</script>

<template>
  <div class="flex justify-center items-center w-full h-full">
    <LayoutMain />
  </div>
</template>

<style scoped>
</style>
