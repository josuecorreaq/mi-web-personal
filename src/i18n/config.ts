export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'es';

export const getAlternatePath = (locale: Locale) => (locale === 'es' ? '/en/' : '/es/');
