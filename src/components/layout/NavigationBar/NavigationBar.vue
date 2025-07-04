<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import LangButton from "@/components/layout/NavigationBar/LangButton.vue";
import {debounce} from "@/lib/utils.ts";

const {locale} = storeToRefs(useLocaleStore());

function scrollCalc() {
  let mainNavLinks = document.querySelectorAll('.xx a');
  let offsetPx = 24;

  mainNavLinks.forEach((link) => {
    const anchor = link as HTMLAnchorElement;
    if (anchor.hash == '') return;

    let section = document.querySelector(anchor.hash);
    if (section == null) return;

    let el = (section as HTMLElement).getBoundingClientRect();
    if (
      el.top <= window.innerHeight &&
      el.bottom > offsetPx
    ) {
      anchor.classList.add('current');
      let allCurrents = document.querySelectorAll('.current');
      let allFirsts = document.querySelector('.first');
      if (allFirsts != null) {
        allFirsts.classList.remove('first');
      }
      allCurrents[0].classList.add('first');
    } else {
      anchor.classList.remove('current');
    }
  });
}

window.addEventListener('load', () => {
  window.onscroll = debounce(scrollCalc, 5);
  scrollCalc();
  // Smooth navigation links
  let anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
      let hashVal = item.getAttribute('href');
      let target = document.querySelector(hashVal!);
      if (target) target.scrollIntoView({
        behavior: 'smooth',
      });
      history.pushState(null, '', hashVal);
      e.preventDefault();
    });
  }
});
</script>

<template>
  <div class="min-w-48">
    <div class="flex flex-col gap-1 sm:fixed inset-x-0 sm:left-auto sm:right-auto sm:top-20 xx items-center sm:items-start" v-if="locale" role="navigation">
      <LangButton />
      <a href="#intro" class="link">{{locale.page.intro}}</a>
      <a href="#work" class="link">{{locale.page.work}}</a>
      <a href="#education" class="link">{{locale.page.education}}</a>
      <a href="#projects" class="link">{{locale.page.projects}}</a>
      <br>
      <a :href="`mailto:${locale.email}`" class="contact">{{locale.email}}</a>
      <a href="https://github.com/kolhov" target="_blank" class="contact">github.com/kolhov</a>
    </div>
  </div>
</template>

<style scoped>
.xx {
  a {
    transition: min-width 0.3s, border 0.3s, padding 0.3s, box-shadow 0.3s,
    background 0.15s;
  }
}

.first {
  color: black;
  transform-origin: left;
  animation: pop 0.25s ease-out;
}
@keyframes pop {
  35% {
    transform: scale(1.05);
  }
  75% {
    transform: scale(0.96);
  }
  100% {
    transform: scale(1);
  }
}
</style>
