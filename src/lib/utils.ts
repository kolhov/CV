import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce(func: Function, waitMS: number) {
  let timeout: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func(...args);
    }, waitMS);
  };
}
