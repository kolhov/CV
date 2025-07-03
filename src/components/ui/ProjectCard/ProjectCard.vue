<script setup lang="ts">
import type {Project} from "@/lib/locale.types.ts";
import {computed, ref} from "vue";
import {Badge} from "@/components/ui/badge";

const hover = ref<boolean>(false);
const props = defineProps<{
  project: Project,
  imgPlaceholder?: string,
  gifOnHover?: string
}>();

const picture = computed(() => {
  return hover.value ? props.gifOnHover : props.imgPlaceholder;
})
</script>

<template>
  <div class="w-full h-full rounded-md border relative overflow-hidden"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
  >
    <div :style="{ backgroundImage: `url(${picture})`, backgroundSize: '100%' }"
         class="w-full h-full bg-cover md:bg-contain bg-no-repeat hover:mask-b-from-55% mask-b-from-40% mask-b-to-70%">
    </div>
    <div class="absolute bottom-4 left-4 flex flex-col max-w-full gap-1">
      <span>{{project.name}}</span>
      <div class="text-sm text-muted-foreground flex flex-wrap">
        <span v-for="x in project.stack">{{x}}&nbsp;&nbsp;</span>
      </div>
      <Badge class="mt-2"><a :href="project.github" target="_blank">Source</a></Badge>
    </div>
  </div>
</template>

<style scoped>

</style>
