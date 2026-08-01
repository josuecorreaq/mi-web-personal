export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = 'es';

export const getLocalePath = (locale: Locale) => (locale === 'es' ? '/' : '/en/');

export const getAlternatePath = (locale: Locale) =>
	getLocalePath(locale === 'es' ? 'en' : 'es');