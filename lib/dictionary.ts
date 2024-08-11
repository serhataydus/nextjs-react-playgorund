import "server-only";
import type { Locale } from "@/i18n.config";

/**
 * Represents a collection of dictionaries.
 * Each dictionary is loaded asynchronously using dynamic import.
 * The dictionaries are identified by their language code.
 */
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  de: () => import("@/dictionaries/de.json").then((module) => module.default),
};

/**
 * Retrieves the dictionary for the specified locale.
 * 
 * @param locale - The locale for which to retrieve the dictionary.
 * @returns A promise that resolves to the dictionary for the specified locale.
 */
export const getDictionary = async (locale: Locale) => dictionaries[locale]();
