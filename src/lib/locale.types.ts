export interface Profile {
  name: string;
  email: string;
  github: string;
  uni: University;
  courses: string[];
  jobs: Job[];
  projects: Project[];
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
