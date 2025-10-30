import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function translatePlugType(type: string): string {
  const translations: Record<string, string> = {
    "Cup Type": "Tipo Copa",
    "Pipe Plug": "Tapón de Tubería",
    "Concave Cup": "Copa Cóncava"
  };
  return translations[type] || type;
}
