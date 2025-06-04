import type {Profile} from "@/lib/locale.types.ts";

export const strings: Profile = {
  "name": "Олег Ожерельев",
  "email": "kolhovv@ya.ru",
  "github": "https://github.com/kolhov",
  "uni": {
    "name": "Силезский университет в Опаве",
    "year": "2022 – 2025",
    "program": "Бакалаврская программа: Современная информатика",
    "specialization": "Специализация: Информационные и коммуникационные технологии"
  },
  "courses": [
    "[Udemy] Полный курс разработчика игр на C# Unity 2D",
    "[ITVDN] C# для профессионалов",
    "[ITVDN] .NET разработчик",
    "Quinten Joran - Создание реальных веб-приложений с Vue.js – 2023",
    "Vue.js Master Class 2024"
  ],
  "jobs": [
    {
      "company": "ECHOpix s.r.o.",
      "position": "Стажёр-разработчик",
      "year": "Ноябрь 2023 – Апрель 2024 (6 месяцев)",
      "achievements": [
        "Спарсил все данные с WordPress сайта клиента с помощью Python для миграции в нашу базу данных."
      ],
      "stack": [
        "Python", "TypeScript", "GraphQL"
      ]
    },
    {
      "company": "ECHOpix s.r.o.",
      "position": "Младший fullstack разработчик по контракту",
      "year": "Апрель 2024 – 2025 (9 месяцев)",
      "achievements": [
        "Работа над API, SPA CMS и веб-сайтами. Добавление новых функций, отладка.",
        "Активное участие в разработке генератора сайтов с различными темами.",
        "Разработка PWA приложения для множества киосков по всей Чехии.",
        "Помощь с докеризацией проектов."
      ],
      "stack": [
        "TypeScript", "Angular", "Tailwind", "Electron", "ExpressJs", "MongoDB", "GraphQL",
        "Vitest", "Docker"
      ]
    }
  ],
  "projects": [
    {
      "name": "Облачное хранилище",
      "github": "https://github.com/kolhov/cloud-storage",
      "description": "Полностью функциональный fullstack монорепозиторий. Supabase используется для аутентификации и базы данных, файлы хранятся на сервере Express.js API, фронтенд — Vue 3 SPA.",
      "features": [
        "Объектное хранилище",
        "Дерево папок, созданное с использованием мемоизации с временной сложностью O(n)",
        "Прямое скачивание файлов с использованием одноразовых токенов",
        "Возможность делиться файлами по ссылке",
        "Рекурсивная загрузка папок с сохранением иерархии",
        "Реактивный поиск по файлам и папкам",
        "Глобальная загрузка файлов с индикатором прогресса",
        "Полное управление файлами через dropdown меню",
        "Загрузка методом drag and drop"
      ],
      "stack": [
        "TypeScript", "Vue", "Pinia", "Shadcn UI", "Tailwind", "Axios", "Node.js", "Express.js", "Supabase",
        "PostgreSQL"
      ]
    },
    {
      "name": "Poe discord notify",
      "github": "https://github.com/kolhov/poe-discord-notify",
      "description": "Веб-воркер отслеживает положительные экономические изменения в игре Path of Exile (PoE) с помощью открытых API poe.ninja. При обнаружении положительных изменений автоматически публикует обновления в заданном канале Discord.",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    },
    {
      "name": "Interpreter",
      "github": "https://github.com/kolhov/Interpreter",
      "description": "Проект от вуза. Интерпретатор, написанный на TypeScript для трансляции Lua в JavaScript с использованием конечного автомата",
      "features": [],
      "stack": [
        "TypeScript", "Node.js"
      ]
    }
  ]
}
