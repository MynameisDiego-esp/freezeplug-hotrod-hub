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

export function translateCategory(category: string): string {
  const translations: Record<string, string> = {
    "Steel Metric Cup Plugs": "Tapones de Copa Métricos de Acero",
    "Pipe Plugs": "Tapones de Tubería",
    "Brass Metric Cup Plugs": "Tapones de Copa Métricos de Bronce",
    "Concave Cup Plugs": "Tapones de Copa Cóncavos",
    "Stainless Steel Cup Plugs": "Tapones de Copa de Acero Inoxidable",
    "Steel Cup Plugs": "Tapones de Copa de Acero",
    "Brass Cup Plugs": "Tapones de Copa de Bronce"
  };
  return translations[category] || category;
}
