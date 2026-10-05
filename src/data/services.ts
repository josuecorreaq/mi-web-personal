import type { Locale } from '../i18n/config';

/** First publication of the services page; stays fixed across content updates. */
export const SERVICES_PUBLISHED = '2026-10-05';
export const SERVICES_LAST_MODIFIED = '2026-10-05';

export const servicesPaths: Record<Locale, string> = {
	es: '/servicios/',
	en: '/en/services/',
};

export const servicesRoutePair = {
	es: servicesPaths.es,
	en: servicesPaths.en,
	lastmod: SERVICES_LAST_MODIFIED,
};
