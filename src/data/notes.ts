import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Locale } from '../i18n/config';
import { useTranslations } from '../i18n/translations';
import type { Project } from './projects';
import { toSchemaDateTime } from './schema';

export const notesPaths: Record<Locale, string> = {
	es: '/notas/',
	en: '/en/notes/',
};

export const getNotesFeedPath = (locale: Locale) => `${notesPaths[locale]}rss.xml`;

export interface Note {
	readonly entry: CollectionEntry<'notes'>;
	readonly locale: Locale;
	readonly slug: string;
	readonly path: string;
	readonly title: string;
	readonly description: string;
	readonly datePublished: string;
	readonly dateModified: string;
	readonly translationKey: string;
	readonly tags: readonly string[];
	readonly project?: Project['id'];
	readonly wordCount: number;
	readonly readingMinutes: number;
}

const wordsPerMinute = 200;

const isLocale = (value: string): value is Locale => value in languages;

const toNote = (entry: CollectionEntry<'notes'>): Note => {
	const [locale, slug, ...rest] = entry.id.split('/');

	if (!locale || !slug || rest.length > 0 || !isLocale(locale)) {
		throw new Error(`La nota ${entry.id} debe vivir en src/content/notes/<es|en>/<slug>.md(x).`);
	}

	const { data } = entry;
	// MDX imports and component tags are not prose, so they stay out of the reading time.
	const prose = entry.body?.replace(/^import .*$/gm, '').replace(/<[^>]*>/g, '') ?? '';
	const wordCount = prose.split(/\s+/).filter(Boolean).length;

	return {
		entry,
		locale,
		slug,
		path: `${notesPaths[locale]}${slug}/`,
		title: data.title,
		description: data.description,
		datePublished: data.datePublished,
		dateModified: data.dateModified ?? data.datePublished,
		translationKey: data.translationKey,
		tags: data.tags,
		project: data.project,
		wordCount,
		readingMinutes: Math.max(1, Math.round(wordCount / wordsPerMinute)),
	};
};

// Newest first; ISO dates compare correctly as strings.
const byNewest = (a: Note, b: Note) =>
	b.datePublished.localeCompare(a.datePublished) || a.title.localeCompare(b.title);

/** Every published note in both languages. Drafts only show up in dev. */
const loadNotes = async (): Promise<Note[]> => {
	const entries = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
	const notes = entries.map(toNote).sort(byNewest);
	const keys = new Set<string>();

	for (const note of notes) {
		const key = `${note.locale}:${note.translationKey}`;

		if (keys.has(key)) {
			throw new Error(`Hay dos notas en "${note.locale}" con translationKey "${note.translationKey}".`);
		}

		keys.add(key);
	}

	return notes;
};

export const getNotes = async (locale: Locale) =>
	(await loadNotes()).filter((note) => note.locale === locale);

export const hasNotes = async (locale: Locale) => (await getNotes(locale)).length > 0;

/** The same note in the other language, when it has been translated. */
export const getNoteTranslation = async (note: Note) =>
	(await loadNotes()).find(
		(candidate) => candidate.locale !== note.locale && candidate.translationKey === note.translationKey,
	);

export const getNotesForProject = async (locale: Locale, projectId: Project['id']) =>
	(await getNotes(locale)).filter((note) => note.project === projectId);

export const getNoteStaticPaths = async (locale: Locale) =>
	(await getNotes(locale)).map((note) => ({
		params: { slug: note.slug },
		props: { note },
	}));

/** Date of the latest change among a language's notes, for the index's lastmod. */
export const getNotesLastModified = async (locale: Locale) =>
	(await getNotes(locale))
		.map((note) => note.dateModified)
		.sort()
		.at(-1);

/** One entry per note, paired with its translation when there is one. */
export const getNoteRoutePairs = async () => {
	const pairs = new Map<string, { es?: string; en?: string; lastmod: string }>();

	for (const note of await loadNotes()) {
		const pair = pairs.get(note.translationKey) ?? { lastmod: note.dateModified };
		pair[note.locale] = note.path;
		if (note.dateModified > pair.lastmod) pair.lastmod = note.dateModified;
		pairs.set(note.translationKey, pair);
	}

	return [...pairs.values()];
};

// The date is a bare YYYY-MM-DD, so it is read and printed in UTC to keep the day from shifting.
export const formatNoteDate = (locale: Locale, date: string) =>
	new Intl.DateTimeFormat(locale === 'es' ? 'es-PE' : 'en-US', {
		dateStyle: 'long',
		timeZone: 'UTC',
	}).format(new Date(date));

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

const toRssDate = (date: string) => new Date(toSchemaDateTime(date)).toUTCString();

/** RSS 2.0 feed of a language's notes: title, summary and link, like the index lists them. */
export const createNotesFeed = async (locale: Locale, site: URL) => {
	const t = useTranslations(locale).notes;
	const notes = await getNotes(locale);
	const indexUrl = new URL(notesPaths[locale], site);
	const feedUrl = new URL(getNotesFeedPath(locale), site);
	const lastModified = await getNotesLastModified(locale);

	const items = notes
		.map((note) => {
			const url = new URL(note.path, site);
			const categories = note.tags.map((tag) => `\t\t\t<category>${escapeXml(tag)}</category>`);

			return [
				'\t\t<item>',
				`\t\t\t<title>${escapeXml(note.title)}</title>`,
				`\t\t\t<link>${url}</link>`,
				`\t\t\t<guid isPermaLink="true">${url}</guid>`,
				`\t\t\t<description>${escapeXml(note.description)}</description>`,
				`\t\t\t<pubDate>${toRssDate(note.datePublished)}</pubDate>`,
				...categories,
				'\t\t</item>',
			].join('\n');
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
\t<channel>
\t\t<title>${escapeXml(t.feedTitle)}</title>
\t\t<link>${indexUrl}</link>
\t\t<description>${escapeXml(t.meta.description)}</description>
\t\t<language>${locale === 'es' ? 'es-PE' : 'en-US'}</language>
${lastModified ? `\t\t<lastBuildDate>${toRssDate(lastModified)}</lastBuildDate>\n` : ''}\t\t<atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
${items ? `${items}\n` : ''}\t</channel>
</rss>
`;
};
