import type {Profile} from "@/lib/locale.types.ts";

export const strings: Profile = {
  "name": "Oleg Ozherelev",
  "email": "kolhovv@gmail.com",
  "github": "https://github.com/kolhov",
  "uni": {
    "name": "Slezská univerzita v Opavě",
    "year": "2022 – 2025",
    "program": "Bakalářský studijní program: Moderní informatika",
    "specialization": "Specializace: Informační a komunikační technologie"
  },
  "courses": [
    "2022 Kurz českého jazyka, GoStudy Brno",
    "[Udemy] Kompletní vývojář C# Unity her 2D",
    "[ITVDN] C# pro profesionály",
    "[ITVDN] .NET vývojář",
    "Quinten Joran - Tvorba webových aplikací ve Vue.js – 2023",
    "Vue.js Master Class 2024"
  ],
  "jobs": [
    {
      "company": "ECHOpix s.r.o.",
      "position": "Stáž jako vývojář",
      "year": "Listopad 2023 – Duben 2024 (6 měsíců)",
      "achievements": [
        "Rozparsoval jsem všechna data z WordPress webu klienta pomocí Pythonu pro migraci do naší databáze."
      ],
      "stack": [
        "Python", "TypeScript", "GraphQL"
      ]
    },
    {
      "company": "ECHOpix s.r.o.",
      "position": "Junior fullstack vývojář – DPČ",
      "year": "Duben 2024 – 2025 (9 měsíců)",
      "achievements": [
        "Práce na API, SPA CMS a webových stránkách. Přidávání nových funkcí, ladění.",
        "Aktivní účast na vývoji generátoru webových stránek s různými šablonami.",
        "Vývoj PWA aplikace pro více kiosků po celé České republice.",
        "Pomoc s dockerizací projektů."
      ],
      "stack": [
        "TypeScript", "Angular", "Tailwind", "Electron", "ExpressJs", "MongoDB", "GraphQL",
        "Vitest", "Docker"
      ]
    }
  ],
  "projects": [
    {
      "name": "Cloudové úložiště",
      "github": "https://github.com/kolhov/cloud-storage",
      "description": "Plně funkční fullstack monorepozitář. Supabase je použito pro autentizaci a databázi, soubory jsou ukládány na server s Express.js API, frontend je Vue 3 SPA.",
      "features": [
        "Objektové úložiště",
        "Strom složek generovaný pomocí memoizace s časovou složitostí O(n)",
        "Přímé stažení souboru pomocí jednorázových tokenů",
        "Možnost sdílet soubory prostřednictvím odkazu",
        "Rekurzivní nahrávání složek se zachováním hierarchie",
        "Reaktivní vyhledávání mezi soubory a složkami",
        "Globální nahrávání souborů s ukazatelem průběhu",
        "Kompletní správa souborů přes dropdown menu",
        "Nahrávání pomocí přetažení (drag and drop)"
      ],
      "stack": [
        "TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind", "Axios", "Node.js", "Express.js", "Supabase",
        "PostgreSQL"
      ]
    },
    {
      "name": "Poe discord notify",
      "github": "https://github.com/kolhov/poe-discord-notify",
      "description": "Tento web-worker sleduje pozitivní ekonomické změny ve hře Path of Exile (PoE) pomocí veřejných API z poe.ninja. Při zjištění pozitivní změny automaticky odesílá aktualizace do specifikovaného Discord kanálu.",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    },
    {
      "name": "Interpreter",
      "github": "https://github.com/kolhov/Interpreter",
      "description": "Školní projekt. Interpret napsaný v TypeScriptu pro překlad Lua do JavaScriptu pomocí konečného stavového automatu",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    }
  ]
}
