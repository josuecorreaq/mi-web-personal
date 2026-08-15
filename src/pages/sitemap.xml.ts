import type { APIRoute } from 'astro';
import { getLocalePath, languages, type Locale } from '../i18n/config';

const locales = Object.keys(languages) as Locale[];
const lastmod = new Date().toISOString().slice(0, 10);

export const GET: APIRoute = ({ site }) => {
	const origin = site ?? new URL('https://josuecorreaq.com');
	const alternates = [
		...locales.map(
			(locale) =>
				`\t\t<xhtml:link rel="alternate" hreflang="${locale}" href="${new URL(getLocalePath(locale), origin)}" />`,
		),
		`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${new URL('/', origin)}" />`,
	].join('\n');

	const urls = locales
		.map(
			(locale) => `\t<url>
\t\t<loc>${new URL(getLocalePath(locale), origin)}</loc>
\t\t<lastmod>${lastmod}</lastmod>
${alternates}
\t</url>`,
		)
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
\txmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
\txmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
