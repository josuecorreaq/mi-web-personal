import type { APIRoute } from 'astro';
import { PROJECT_LAST_MODIFIED, projectRoutePairs } from '../data/projects';

interface LocalizedPage {
	es: string;
	en: string;
	lastmod: string;
	priority: string;
}

const pages: LocalizedPage[] = [
	{
		es: '/',
		en: '/en/',
		lastmod: PROJECT_LAST_MODIFIED,
		priority: '1.0',
	},
	...projectRoutePairs.map((project) => ({
		...project,
		priority: '0.8',
	})),
];

export const GET: APIRoute = ({ site }) => {
	const origin = site ?? new URL('https://josuecorreaq.com');
	const urls = pages
		.flatMap((page) =>
			(['es', 'en'] as const).map((locale) => {
				const alternates = `\t\t<xhtml:link rel="alternate" hreflang="es" href="${new URL(page.es, origin)}" />
\t\t<xhtml:link rel="alternate" hreflang="en" href="${new URL(page.en, origin)}" />
\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(page.es, origin)}" />`;

				return `\t<url>
\t\t<loc>${new URL(page[locale], origin)}</loc>
\t\t<lastmod>${page.lastmod}</lastmod>
\t\t<priority>${page.priority}</priority>
${alternates}
\t</url>`;
			}),
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
