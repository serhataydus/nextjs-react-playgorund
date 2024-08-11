import "server-only";
import type { Locale } from "@/i18n.config";

export const getLocalizations = async (locale: Locale) => {
  const dictionary = await import(`@/localizations/${locale}.json`);

  return dictionary.default;
};
