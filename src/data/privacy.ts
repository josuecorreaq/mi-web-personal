import type { Locale } from '../i18n/config';

/** First publication of the privacy policy; stays fixed across content updates. */
export const PRIVACY_PUBLISHED = '2026-10-06';
/** Bump with every change to the policy: the page shows it as the update date. */
export const PRIVACY_LAST_MODIFIED = '2026-10-06';

export const privacyPaths: Record<Locale, string> = {
	es: '/privacidad/',
	en: '/en/privacy/',
};

export const privacyRoutePair = {
	es: privacyPaths.es,
	en: privacyPaths.en,
	lastmod: PRIVACY_LAST_MODIFIED,
};
