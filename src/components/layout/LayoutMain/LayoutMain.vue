<script setup lang="ts">
import {Card} from "@/components/ui/card";
import NavigationBar from "@/components/layout/NavigationBar/NavigationBar.vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import {Accordion, AccordionTrigger, AccordionItem, AccordionContent} from "@/components/ui/accordion";
import {Icon} from "@iconify/vue";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard.vue";

const {locale} = storeToRefs(useLocaleStore());

</script>

<template>
  <main class="flex sm:flex-row flex-col mt-8 m-x-5">
    <NavigationBar class="m-2 p-2"/>
    <div class="flex flex-col m-2 p-2" v-if="locale">
      <section id="intro" class="mb-8 pt-8">
        <h1 class="justify-self-center">{{locale.name}}</h1>
      </section>
      <section id="work" class="mb-16">
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
      <section id="education" class="mb-16 max-w-148">
        <h2>{{locale.page.education}}</h2>
        <div class="flex p-2">
          <div class="flex flex-col">
            <span>{{locale.uni.name}}</span>
            <span class="text-xs text-muted-foreground">{{locale.uni.year}}</span>
            <span class="text-sm text-muted-foreground">{{locale.uni.program}}</span>
            <span class="text-sm text-muted-foreground">{{locale.uni.specialization}}</span>
          </div>
        </div>
        <div>
          <Accordion type="single" class="w-full" collapsible>
            <AccordionItem :value="locale.page.courses">
              <AccordionTrigger class="p-2 hover:bg-muted hover:cursor-pointer"><h3>{{locale.page.courses}}</h3></AccordionTrigger>
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
      <section id="projects" class="mb-54 max-w-148">
        <h2 class="mb-4">{{locale.page.projects}}</h2>
        <div class="grid grid-cols-5 grid-rows-3 gap-4 h-90">
          <ProjectCard class="row-span-3 col-span-3"
                       :project="locale.projects[0]"
                       img-placeholder="/cloud1.png"
                       gif-on-hover="/cloud2.gif"
          />
          <ProjectCard class="border rounded-md col-span-2 row-span-2"
                       :project="locale.projects[1]"
                       img-placeholder="/poe1.png"
                       gif-on-hover="/poe2.gif"
          />
          <ProjectCard class="border rounded-md col-span-2"
                       :project="locale.projects[2]"
          />
        </div>
      </section>
      <section id="end" class="m">

      </section>
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>

<style scoped>

</style>
