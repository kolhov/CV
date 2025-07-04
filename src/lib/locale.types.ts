export interface Locale {
  name: string;
  email: string;
  github: string;
  uni: University;
  courses: string[];
  jobs: Job[];
  projects: Project[];
  page: Page;
}

export interface Page {
  intro: string;
  work: string;
  education: string;
  projects: string;
  courses: string;
  contacts: string;
  pdf: string;
}

export interface University {
  name: string;
  year: string;
  program: string;
  specialization: string;
}

export interface Job {
  company: string;
  position: string;
  year: string;
  months: string;
  achievements: string[];
  stack: string[];
}

export interface Project {
  name: string;
  github: string;
  description: string;
  features: string[];
  stack: string[];
}

export enum Language {
  EN = 'en',
  RU = 'ru',
  CZ = 'cz'
}
