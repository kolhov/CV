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
  <div class="min-w-40 lg:min-w-50 block">
  <div class="flex flex-col fixed top-20 lg:min-w-50" v-if="locale">
    <a href="#intro" class="link">Intro</a>
    <a href="#work" class="link">{{locale.page.work}}</a>
    <a href="#education" class="link">{{locale.page.education}}</a>
    <a href="#projects" class="link">{{locale.page.projects}}</a>
    <br>
    <a :href="`mailto:${locale.email}`" class="contact">{{locale.email}}</a>
    <a href="https://github.com/kolhov" target="_blank" class="contact">github.com/kolhov</a>
  </div>
  </div>
</template>


