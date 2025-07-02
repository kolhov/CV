<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Icon} from "@iconify/vue";
import {Button} from "@/components/ui/button";
import {computed} from "vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import {Language} from "@/lib/locale.types.ts";

const localeStore = useLocaleStore();
const {currLang} = storeToRefs(localeStore);
const lang = computed(() => {
  return currLang.value.toUpperCase();
})
</script>

<template>
  <DropdownMenu :modal="false">
    <DropdownMenuTrigger as-child>
      <Button class="justify-start w-30 mb-4" variant="outline">
        <Icon :icon="`circle-flags:${currLang}`" /> {{lang}}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-30">
      <DropdownMenuLabel>Language</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem @click="localeStore.changeLanguage(Language.RU)">
          <Icon icon="circle-flags:ru" class="mr-2 h-4 w-4" />
          <span>RU</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="localeStore.changeLanguage(Language.EN)">
          <Icon icon="circle-flags:en" class="mr-2 h-4 w-4" />
          <span>EN</span>
        </DropdownMenuItem>
        <DropdownMenuItem @click="localeStore.changeLanguage(Language.CZ)">
          <Icon icon="circle-flags:cz" class="mr-2 h-4 w-4" />
          <span>CZ</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped>

</style>
