import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: true,
  },
) {
  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
}

export function formatDateOnly(date: Date) {
  return formatDate(date, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: undefined,
    minute: undefined,
    second: undefined,
    hour12: true,
  });
}
