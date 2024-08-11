export const i18n = {
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  locales:
    process.env.NEXT_PUBLIC_LOCALES?.split(",").map((locale) =>
      locale.trim()
    ) || [],
  localeDetection: false,
} as const;

export type Locale = (typeof i18n)["locales"][number];
