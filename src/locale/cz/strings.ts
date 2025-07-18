import type {Locale} from "@/lib/locale.types.ts";

export const strings: Locale = {
  "page": {
    intro: "Intro",
    work: "Pracovní zkušenosti",
    education: "Vzdělání",
    courses: "Dodatečné vzdělání",
    projects: "Projekty",
    contacts: "Kontakty",
    pdf: "Stáhnout PDF"
  },
  "name": "Oleg Ozherelev",
  "email": "o.ozherelev.ict@gmail.com",
  "github": "https://github.com/kolhov",
  "location": "Tolyatti, Rusko. Pouze home office.",
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
      "company": "ECHOpix, Krnov",
      "position": "Stáž jako vývojář",
      "year": "11/2023 – 4/2024",
      "months": "(6 měsíců)",
      "achievements": [
        "Rozparsoval jsem všechna data z WordPress webu klienta pro migraci do databáze (Python, GraphQL)",
        "Podílel jsem se na vývoji komunikačního modulu pro kiosky instalované v různých městech České republiky (TypeScript, Node.js)"
      ],
      "stack": [
        "Python", "TypeScript", "GraphQL", "Node.js"
      ]
    },
    {
      "company": "ECHOpix, Krnov",
      "position": "Junior fullstack vývojář",
      "year": "4/2024 – 1/2025",
      "months": "(9 měsíců)",
      "achievements": [
        "Cross-platformový webový vývoj (MEAN)"
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
      "name": "Portfolio",
      "github": "https://github.com/kolhov/CV",
      "description": "",
      "features": [],
      "stack": [
        "TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind"
      ]
    }
  ]
}
