<script setup lang="ts">
import {onMounted} from "vue";

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
<a href="#intro">Intro</a>
<a href="#intro">работа</a>
<a href="#intro">образование</a>
<a href="#intro">проекты</a>
<a href="mailto:kolhovv@gmail.com">kolhovv@gmail.com</a>
<a href="https://github.com/kolhov" target="_blank">github.com/kolhov</a>
</template>

<style scoped>

</style>
