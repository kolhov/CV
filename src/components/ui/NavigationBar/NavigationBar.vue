<script setup lang="ts">
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";

const {locale} = storeToRefs(useLocaleStore());

onMounted(() => {
  // Smooth navigation links
  let anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
      let hashVal = item.getAttribute('href');
      let target = document.querySelector(hashVal!);
      if (target) target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      history.pushState(null, '', hashVal);
      e.preventDefault();
    });
  }
})
</script>

<template>
  <div class="flex flex-col" v-if="locale">
    <a href="#intro">Intro</a>
    <a href="#work">{{locale.page.work}}</a>
    <a href="#education">{{locale.page.education}}</a>
    <a href="#projects">{{locale.page.projects}}</a>
    <a :href="`mailto:${locale.email}`" class="text-muted-foreground">{{locale.email}}</a>
    <a href="https://github.com/kolhov" target="_blank" class="text-muted-foreground">github.com/kolhov</a>
  </div>
</template>

<style scoped>

</style>
