import type {Locale} from "@/lib/locale.types.ts";

export const strings: Locale = {
  "page": {
    intro: "Intro",
    work: "Work Experience",
    education: "Education",
    courses: "Additional Education",
    projects: "Projects",
    contacts: "Contacts",
    pdf: "Download PDF"
  },
  "name": "Oleg Ozherelev",
  "email": "kolhovv@gmail.com",
  "github": "https://github.com/kolhov",
  "uni": {
    "name": "Silesian University in Opava",
    "year": "2022 – 2025",
    "program": "Bachelor’s Program: Modern Informatics",
    "specialization": "Specialization: Information and Communication Technologies"
  },
  "courses": [
    "[Udemy] Complete C# Unity 2D Game Developer Course",
    "[ITVDN] C# for Professionals",
    "[ITVDN] .NET Developer",
    "Quinten Joran - Building Real Web Apps with Vue.js – 2023",
    "Vue.js Master Class 2024"
  ],
  "jobs": [
    {
      "company": "ECHOpix, Krnov",
      "position": "Intern Developer",
      "year": "11/2023 – 4/2024",
      "months": "(6 months)",
      "achievements": [
        "Parsed all data from a client’s WordPress site for migration to database (Python, GraphQL)",
        "Participated in the development of a communication module for kiosks installed in various cities across the Czech Republic (TypeScript, Node.js)"
      ],
      "stack": [
        "Python", "TypeScript", "GraphQL", "Node.js"
      ]
    },
    {
      "company": "ECHOpix, Krnov",
      "position": "Junior Fullstack Developer",
      "year": "4/2024 – 1/2025",
      "months": "(9 months)",
      "achievements": [
        "Cross-platform web development (MEAN)"
      ],
      "stack": [
        "TypeScript", "Angular", "Tailwind", "Electron", "ExpressJs", "MongoDB", "GraphQL",
        "Vitest", "Docker"
      ]
    }
  ],
  "projects": [
    {
      "name": "Cloud Storage",
      "github": "https://github.com/kolhov/cloud-storage",
      "description": "Fully functional fullstack monorepo. Supabase is used for authentication and database, files are stored on an Express.js API server, frontend is a Vue 3 SPA.",
      "features": [
        "Object storage",
        "Folder tree built using memoization with O(n) time complexity",
        "Direct file downloads using one-time tokens",
        "Ability to share files via link",
        "Recursive folder uploads with hierarchy preservation",
        "Reactive search through files and folders",
        "Global file uploads with progress indicator",
        "Full file management via dropdown menu",
        "Drag and drop uploads"
      ],
      "stack": [
        "TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind", "Axios", "Node.js", "Express.js", "Supabase",
        "PostgreSQL"
      ]
    },
    {
      "name": "Poe Discord Notify",
      "github": "https://github.com/kolhov/poe-discord-notify",
      "description": "A web worker monitors positive economic changes in the game Path of Exile (PoE) using public APIs from poe.ninja. Upon detecting favorable changes, it automatically posts updates to a designated Discord channel.",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    },
    {
      "name": "Interpreter",
      "github": "https://github.com/kolhov/Interpreter",
      "description": "University project. An interpreter written in TypeScript to translate Lua to JavaScript using a finite state machine.",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    }
  ]
}
