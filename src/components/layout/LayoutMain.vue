<script setup lang="ts">
import {Card} from "@/components/ui/card";
import NavigationBar from "@/components/ui/NavigationBar/NavigationBar.vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import {Accordion, AccordionTrigger, AccordionItem, AccordionContent} from "@/components/ui/accordion";
import {Icon} from "@iconify/vue";

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
            <ul>
              <li class="flex flex-row text-sm text-muted-foreground " v-for="x in job.achievements">
                <Icon class="mt-1 min-w-4 max-w-4" icon="lucide:chevron-right" /> {{x}}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education" class="mt-10 max-w-148">
        <h2>{{locale.page.education}}</h2>
        <div class="flex p-2">
          <div class="flex flex-col">
            <span>{{locale.uni.name}}</span>
            <span class="text-xs text-muted-foreground">{{locale.uni.year}}</span>
            <span class="text-sm text-muted-foreground">{{locale.uni.program}}</span>
            <span class="text-sm text-muted-foreground">{{locale.uni.specialization}}</span>
          </div>
        </div>
        <div class="">
          <Accordion type="single" class="w-full " collapsible>
            <AccordionItem :value="locale.page.courses">
              <AccordionTrigger><h3>{{locale.page.courses}}</h3></AccordionTrigger>
              <AccordionContent class="pl-2">
                <ul>
                  <li class="flex flex-row text-sm text-muted-foreground" v-for="x in locale.courses">
                    <Icon class="m-1" icon="lucide:check-check"/>{{x}}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section id="projects" class="mt-10">
        <h2>{{locale.page.projects}}</h2>
      </section>
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>

<style scoped>

</style>
