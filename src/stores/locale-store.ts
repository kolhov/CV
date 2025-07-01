import {defineStore} from "pinia";
import {ref} from "vue";
import {Language, type Locale} from "@/lib/locale.types.ts";

export const useLocaleStore = defineStore('locale-store', () => {
  const currLang = ref<Language>(Language.EN);
  const locale = ref<Locale | null>(null);

  function initStore(){
    const sysLang = navigator.language.split('-')[0];
    const isSupported = Object.values(Language).includes(sysLang as Language);

    if (isSupported) currLang.value = sysLang as Language;
    else currLang.value = Language.EN;

    getLocaleDict();
  }

  function changeLanguage(value: Language){
    currLang.value = value;
    getLocaleDict();
  }

  function getLocaleDict(){
    import(`@/locale/${currLang.value}/strings.ts`).then((module => {
      locale.value = module.strings;
    }))
  }

  return {
    locale,
    currLang,
    initStore,
    changeLanguage,
  }
})
