<script setup lang="ts">
import {Card} from "@/components/ui/card";
import NavigationBar from "@/components/layout/NavigationBar/NavigationBar.vue";
import {storeToRefs} from "pinia";
import {useLocaleStore} from "@/stores/locale-store.ts";
import {Accordion, AccordionTrigger, AccordionItem, AccordionContent} from "@/components/ui/accordion";
import {Icon} from "@iconify/vue";
import ProjectCard from "@/components/ui/ProjectCard/ProjectCard.vue";
import SectionHead from "@/components/ui/SectionHead/SectionHead.vue";

const {locale} = storeToRefs(useLocaleStore());

</script>

<template>
  <main class="flex sm:flex-row flex-col mt-8 m-x-5">
    <NavigationBar class="m-2 p-2"/>
    <div class="flex flex-col m-2 p-2" v-if="locale">
      <section id="intro" class="mb-8 pt-8">
        <h1 class="justify-self-center text-xl">{{locale.name}}</h1>
      </section>
      <section id="work" class="mb-12 max-w-148">
        <SectionHead :title="locale.page.work" />
        <div class="flex max-w-150 w-full pb-6" v-for="job in locale.jobs">
          <div class="flex flex-col w-1/4 min-w-28">
            <span class="text-sm text-muted-foreground pt-1 tracking-wide">{{job.year}}</span>
            <span class="text-sm text-muted-foreground">{{job.months}}</span>
          </div>
          <div class="w-10" />
          <div class="flex flex-col w-3/4">
            <span class="text-lg">{{job.position}}</span>
            <span class="text-muted-foreground">{{job.company}}</span>
            <ul v-if="job.achievements.length > 1">
              <li class="flex flex-row py-0.5 text-sm text-muted-foreground " v-for="x in job.achievements">
                <Icon class="mt-1 min-w-4 max-w-4" icon="lucide:chevron-right" /> {{x}}
              </li>
            </ul>
            <span v-else class="py-0.5 text-sm text-muted-foreground ">
              {{job.achievements[0]}}
            </span>
          </div>
        </div>
      </section>
      <section id="education" class="mb-14 max-w-148">
        <SectionHead :title="locale.page.education" />
        <div class="flex">
          <div class="flex flex-col relative w-full gap-1">
            <img src="/logo_web_fpf.png" alt="Logo FPF SLU" class="w-[25%] absolute top-0 right-0">
            <span>{{locale.uni.name}}</span>
            <span class="text-sm text-muted-foreground mt-2">{{locale.uni.year}}</span>
            <span class="text-md text-muted-foreground">{{locale.uni.program}}</span>
            <span class="text-md text-muted-foreground">{{locale.uni.specialization}}</span>
          </div>
        </div>
        <div>
          <Accordion type="single" class="w-full mt-4" collapsible default-value="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger class="py-2 cursor-pointer"><h3>{{locale.page.courses}}</h3></AccordionTrigger>
              <AccordionContent class="pl-2">
                <ul>
                  <li class="flex flex-row py-0.5 text-sm text-muted-foreground" v-for="x in locale.courses">
                    <Icon class="m-1" icon="lucide:check-check"/>{{x}}
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section id="projects" class="mb-18 max-w-148">
        <SectionHead :title="locale.page.projects" />
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
      <section id="contacts" class="mb-54">
        <SectionHead :title="locale.page.contacts" />
      </section>
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>

<style scoped>

</style>
