import ru from "../i18n/ru.json";
import en from "../i18n/en.json";

export type Language = "ru" | "en";
export type TranslationKeys = typeof ru;

export const translations = { ru, en };

// Helper to get nested translation value by dot notation string (e.g., "nav.about")
export function getTranslation(lang: Language, path: string): string {
  const keys = path.split(".");
  let current: any = translations[lang];
  
  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = current[key];
    } else {
      return path; // Fallback to path if key not found
    }
  }
  
  return typeof current === "string" ? current : path;
}
