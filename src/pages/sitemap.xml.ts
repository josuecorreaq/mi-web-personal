import type { APIRoute } from 'astro';
import { PROJECT_LAST_MODIFIED, projectRoutePairs } from '../data/projects';
import { getNoteRoutePairs, getNotesLastModified, notesPaths } from '../data/notes';
import { privacyRoutePair } from '../data/privacy';
import { servicesRoutePair } from '../data/services';

// A page exists in one language or both; only a page with both lists them as hreflang alternates.
interface LocalizedPage {
	es?: string;
	en?: string;
	lastmod: string;
	priority: string;
}

const getNotesIndexPage = async (): Promise<LocalizedPage | undefined> => {
	const [esLastmod, enLastmod] = await Promise.all([
		getNotesLastModified('es'),
		getNotesLastModified('en'),
	]);
	const lastmod = [esLastmod, enLastmod].filter(Boolean).sort().at(-1);

	// An index with no notes is noindex, so it stays out.
	if (!lastmod) return undefined;

	return {
		es: esLastmod ? notesPaths.es : undefined,
		en: enLastmod ? notesPaths.en : undefined,
		lastmod,
		priority: '0.7',
	};
};

export const GET: APIRoute = async ({ site }) => {
	const origin = site ?? new URL('https://josuecorreaq.com');
	const notesIndex = await getNotesIndexPage();
	const pages: LocalizedPage[] = [
		{
			es: '/',
			en: '/en/',
			lastmod: PROJECT_LAST_MODIFIED,
			priority: '1.0',
		},
		{
			...servicesRoutePair,
			priority: '0.9',
		},
		...projectRoutePairs.map((project) => ({
			...project,
			priority: '0.8',
		})),
		...(notesIndex ? [notesIndex] : []),
		...(await getNoteRoutePairs()).map((note) => ({
			...note,
			priority: '0.7',
		})),
		{
			...privacyRoutePair,
			priority: '0.3',
		},
	];

	const urls = pages
		.flatMap((page) => {
			const alternates =
				page.es && page.en
					? `\n\t\t<xhtml:link rel="alternate" hreflang="es" href="${new URL(page.es, origin)}" />
\t\t<xhtml:link rel="alternate" hreflang="en" href="${new URL(page.en, origin)}" />
\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(page.es, origin)}" />`
					: '';

			return [page.es, page.en]
				.filter((path): path is string => path !== undefined)
				.map(
					(path) => `\t<url>
\t\t<loc>${new URL(path, origin)}</loc>
\t\t<lastmod>${page.lastmod}</lastmod>
\t\t<priority>${page.priority}</priority>${alternates}
\t</url>`,
				);
		})
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
