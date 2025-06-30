import type {Locale} from "@/lib/locale.types.ts";

export const strings: Locale = {
  "name": "Oleg Ozherelev",
  "email": "kolhovv@gmail.com",
  "github": "https://github.com/kolhov",
  "uni": {
    "name": "Silesian University in Opava",
    "year": "2022 – 2025",
    "program": "Bachelor's degree program: Modern Informatics",
    "specialization": "Specialization: Information and Communication Technologies"
  },
  "courses": [
    "2022 Czech language course, GoStudy Brno",
    "[Udemy] Complete C# Unity Game Developer 2D",
    "[ITVDN] C# for professional",
    "[ITVDN] .NET Developer",
    "Quinten Joran - Building Real-World Web Applications with Vue.js – 2023",
    "Vue.js Master Class 2024"
  ],
  "jobs": [
    {
      "company": "ECHOpix s.r.o.",
      "position": "Developer internship",
      "year": "November 2023 – April 2024 (6 month)",
      "achievements": [
        "I parsed all the data from the client's WordPress site with python for migration to our database."
      ],
      "stack": [
        "Python", "TypeScript", "GraphQL"
      ]
    },
    {
      "company": "ECHOpix s.r.o.",
      "position": "Junior fullstack developer contract",
      "year": "April 2024 – 2025 (9 month)",
      "achievements": [
        "Working on APIs, SPA CMS, and websites. Adding new functionalities, debugging.",
        "Actively participated in developing a website generator with various themes.",
        "Working on PWA application for multiple kiosks across the Czech Republic.",
        "Assistance with project dockerization."
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
      "description": "A fully functional fullstack monorepo. Supabase is used for authentication and the database, files are stored on an Express.js API server, and the frontend is a Vue 3 SPA.",
      "features": [
        "Object storage",
        "A folder tree generated using memoization with O(n) complexity",
        "Direct file download using one-time download tokens",
        "Ability to share files with access via link",
        "Recursive folder upload with full preservation of file hierarchy",
        "Reactive search through files and folders",
        "Global file upload with a progress bar",
        "Full file management functionality supported via a dropdown menu",
        "Drag and drop upload"
      ],
      "stack": [
        "TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind", "Axios", "Node.js", "Express.js", "Supabase",
        "PostgreSQL"
      ]
    },
    {
      "name": "Poe discord notify",
      "github": "https://github.com/kolhov/poe-discord-notify",
      "description": "This web-worker tracks positive economic changes in the Path of Exile (PoE) game using open APIs from poe.ninja. When a positive change is detected, the utility automatically posts updates in a specified Discord channel.",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    },
    {
      "name": "Interpreter",
      "github": "https://github.com/kolhov/Interpreter",
      "description": "School project. An interpreter written in TypeScript for translating Lua to JavaScript using finite-state machine",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    }
  ]
}
