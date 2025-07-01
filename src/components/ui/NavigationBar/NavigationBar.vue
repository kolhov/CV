<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/vue";
import {computed} from "vue";

const {locale, currLang} = storeToRefs(useLocaleStore());

window.addEventListener('load', () => {
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
});

const lang = computed(() => {
  return currLang.value.toUpperCase();
})
</script>

<template>
  <div class="min-w-40 lg:min-w-50 block" />
  <div class="flex flex-col fixed top-20 lg:min-w-50" v-if="locale">
    <DropdownMenu :modal="false">
      <DropdownMenuTrigger as-child>
        <Button class="justify-start w-30" variant="outline">
          <Icon :icon="`circle-flags:${currLang}`" /> {{lang}}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-30">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icon icon="circle-flags:ru" class="mr-2 h-4 w-4" />
            <span>RU</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="circle-flags:en" class="mr-2 h-4 w-4" />
            <span>EN</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="circle-flags:cz" class="mr-2 h-4 w-4" />
            <span>CZ</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <a href="#intro" class="link">Intro</a>
    <a href="#work" class="link">{{locale.page.work}}</a>
    <a href="#education" class="link">{{locale.page.education}}</a>
    <a href="#projects" class="link">{{locale.page.projects}}</a>
    <br>
    <a :href="`mailto:${locale.email}`" class="contact">{{locale.email}}</a>
    <a href="https://github.com/kolhov" target="_blank" class="contact">github.com/kolhov</a>
  </div>
</template>


