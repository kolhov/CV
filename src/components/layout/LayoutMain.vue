<script setup lang="ts">
import {Card} from "@/components/ui/card";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar.vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";

const {locale} = storeToRefs(useLocaleStore());
</script>

<template>
  <main class="flex flex-row mt-8 m-x-5">
    <NavigationBar class="m-2 p-2"/>
    <div class="flex flex-col m-2 p-2" v-if="locale">
      <section id="intro"></section>
      <section id="work">
        <h2>{{locale.page.work}}</h2>
        <div class="flex p-2" v-for="job in locale.jobs">
          <div class="flex flex-col mr-2 min-w-28">
            <span class="text-xs text-muted-foreground pt-1">{{job.year}}</span>
            <span class="text-xs text-muted-foreground">{{job.months}}</span>
          </div>
          <div class="flex flex-col max-w-120">
            <span>{{job.position}}</span>
            <span class="text-muted-foreground">{{job.company}}</span>
            <ul class="pl-4 pt-2">
              <li class="text-sm text-muted-foreground list-disc" v-for="x in job.achievements">{{x}}</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education">
        <h2>{{locale.page.education}}</h2>
        <div class="flex p-2">
          <div class="flex flex-col max-w-180">
            <span>{{locale.uni.name}}</span>
            <span class="text-muted-foreground">{{locale.uni.year}}</span>
            <span class="text-muted-foreground">{{locale.uni.program}}</span>
            <span class="text-muted-foreground">{{locale.uni.specialization}}</span>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>

<style scoped>

</style>
