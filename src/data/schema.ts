import { social, socialProfileUrls } from './social';
import { PROJECT_LAST_MODIFIED } from './projects';
import type { Note } from './notes';
import type { Locale } from '../i18n/config';

export type SchemaNode = Record<string, unknown>;

interface ProfileSchemaOptions {
	locale: Locale;
	siteUrl: URL;
	pageUrl: URL;
	title: string;
	description?: string;
	socialImage: URL;
	socialImageAlt: string;
}

interface ProjectSchemaOptions extends ProfileSchemaOptions {
	projectName: string;
	projectId: string;
	stack: readonly string[];
	datePublished: string;
	dateModified: string;
}

const personDescription = {
	es: 'Desarrollador de software en Piura, Perú, especializado en aplicaciones web, sistemas empresariales, APIs y arquitectura backend.',
	en: 'Software developer based in Piura, Peru, specializing in web applications, business systems, APIs, and backend architecture.',
} as const;

// The CV lives in a noindex partial, so education reaches search engines and AI assistants only here.
const university: SchemaNode = {
	'@type': 'CollegeOrUniversity',
	name: 'Universidad César Vallejo',
	url: 'https://www.ucv.edu.pe/',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Piura',
		addressCountry: 'PE',
	},
};

const degreeName = {
	es: 'Título profesional de Ingeniero de Sistemas',
	en: 'Professional degree in Systems Engineering',
} as const;

// Google reads datePublished/dateModified as DateTime and flags bare dates, so they carry Lima's offset.
export const toSchemaDateTime = (date: string): string => `${date}T00:00:00-05:00`;

const createPersonNode = (locale: Locale, siteUrl: URL, profileImage: URL): SchemaNode => ({
	'@type': 'Person',
	'@id': new URL('/#person', siteUrl).toString(),
	name: 'Josué Correa Quispe',
	alternateName: ['Josué Correa', 'Josue Correa'],
	givenName: 'Josué',
	familyName: 'Correa Quispe',
	description: personDescription[locale],
	jobTitle: locale === 'es' ? 'Desarrollador Backend' : 'Backend Developer',
	url: new URL('/', siteUrl).toString(),
	email: `mailto:${social.email}`,
	image: profileImage.toString(),
	homeLocation: {
		'@type': 'Place',
		name: locale === 'es' ? 'Piura, Perú' : 'Piura, Peru',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Piura',
			addressCountry: 'PE',
		},
	},
	sameAs: socialProfileUrls,
	alumniOf: university,
	hasCredential: {
		'@type': 'EducationalOccupationalCredential',
		credentialCategory: 'degree',
		name: degreeName[locale],
		dateCreated: '2026-05',
		recognizedBy: university,
	},
	hasOccupation: {
		'@type': 'Occupation',
		name: locale === 'es' ? 'Desarrollador Backend' : 'Backend Developer',
		occupationLocation: {
			'@type': 'City',
			name: 'Piura',
		},
		skills: 'Laravel, PHP, MySQL, React, REST APIs',
	},
	knowsLanguage: ['es', 'en'],
	knowsAbout: [
		'Laravel',
		'PHP',
		'MySQL',
		'React',
		'REST APIs',
		'Backend architecture',
		'Business process automation',
	],
});

const createWebsiteNode = (siteUrl: URL): SchemaNode => ({
	'@type': 'WebSite',
	'@id': new URL('/#website', siteUrl).toString(),
	url: new URL('/', siteUrl).toString(),
	name: 'Josué Correa',
	inLanguage: ['es', 'en'],
	author: { '@id': new URL('/#person', siteUrl).toString() },
});

export const createProfileSchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	description,
	socialImage,
	socialImageAlt,
}: ProfileSchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const profileImage = new URL('/images/profile.webp', siteUrl);

	return [
		createPersonNode(locale, siteUrl, profileImage),
		{
			'@type': 'ProfilePage',
			'@id': new URL(`${pageUrl.pathname}#profile`, siteUrl).toString(),
			url: pageUrl.toString(),
			name: title,
			description,
			inLanguage: locale,
			dateModified: toSchemaDateTime(PROJECT_LAST_MODIFIED),
			about: { '@id': personId },
			mainEntity: { '@id': personId },
			primaryImageOfPage: {
				'@type': 'ImageObject',
				url: socialImage.toString(),
				width: 1200,
				height: 630,
				caption: socialImageAlt,
			},
		},
		createWebsiteNode(siteUrl),
	];
};

export const createProjectSchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	description,
	socialImage,
	socialImageAlt,
	projectName,
	projectId,
	stack,
	datePublished,
	dateModified,
}: ProjectSchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const websiteId = new URL('/#website', siteUrl).toString();
	const articleId = new URL(`${pageUrl.pathname}#case-study`, siteUrl).toString();
	const pageId = new URL(`${pageUrl.pathname}#webpage`, siteUrl).toString();
	const breadcrumbId = new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString();

	return [
		createPersonNode(locale, siteUrl, new URL('/images/profile.webp', siteUrl)),
		createWebsiteNode(siteUrl),
		{
			'@type': 'WebPage',
			'@id': pageId,
			url: pageUrl.toString(),
			name: title,
			description,
			inLanguage: locale,
			isPartOf: { '@id': websiteId },
			breadcrumb: { '@id': breadcrumbId },
			mainEntity: { '@id': articleId },
			primaryImageOfPage: {
				'@type': 'ImageObject',
				url: socialImage.toString(),
				width: 1200,
				height: 630,
				caption: socialImageAlt,
			},
		},
		{
			'@type': 'TechArticle',
			'@id': articleId,
			headline: projectName,
			description,
			url: pageUrl.toString(),
			inLanguage: locale,
			identifier: projectId,
			keywords: stack,
			datePublished: toSchemaDateTime(datePublished),
			dateModified: toSchemaDateTime(dateModified),
			author: { '@id': personId },
			mainEntityOfPage: { '@id': pageId },
			image: socialImage.toString(),
		},
		{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: locale === 'es' ? 'Inicio' : 'Home',
					item: new URL(locale === 'es' ? '/' : '/en/', siteUrl).toString(),
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: projectName,
					item: pageUrl.toString(),
				},
			],
		},
	];
};

interface ServicesSchemaOptions {
	locale: Locale;
	siteUrl: URL;
	pageUrl: URL;
	title: string;
	description: string;
	label: string;
	services: readonly { name: string; description: string }[];
	faq: readonly { question: string; answer: string }[];
	datePublished: string;
	dateModified: string;
}

export const createServicesSchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	description,
	label,
	services,
	faq,
	datePublished,
	dateModified,
}: ServicesSchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const websiteId = new URL('/#website', siteUrl).toString();
	const pageId = new URL(`${pageUrl.pathname}#webpage`, siteUrl).toString();
	const breadcrumbId = new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString();
	const country = { '@type': 'Country', name: locale === 'es' ? 'Perú' : 'Peru' };
	const areaServed = [{ '@type': 'City', name: 'Piura', containedInPlace: country }, country];

	return [
		createPersonNode(locale, siteUrl, new URL('/images/profile.webp', siteUrl)),
		createWebsiteNode(siteUrl),
		{
			// The FAQ is visible on the page, so the page itself is the FAQPage.
			'@type': ['WebPage', 'FAQPage'],
			'@id': pageId,
			url: pageUrl.toString(),
			name: title,
			description,
			inLanguage: locale,
			datePublished: toSchemaDateTime(datePublished),
			dateModified: toSchemaDateTime(dateModified),
			isPartOf: { '@id': websiteId },
			about: { '@id': personId },
			breadcrumb: { '@id': breadcrumbId },
			mainEntity: faq.map((item) => ({
				'@type': 'Question',
				name: item.question,
				acceptedAnswer: { '@type': 'Answer', text: item.answer },
			})),
		},
		...services.map((service, index) => ({
			'@type': 'Service',
			'@id': new URL(`${pageUrl.pathname}#service-${index + 1}`, siteUrl).toString(),
			name: service.name,
			serviceType: service.name,
			description: service.description,
			url: pageUrl.toString(),
			provider: { '@id': personId },
			areaServed,
		})),
		{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: locale === 'es' ? 'Inicio' : 'Home',
					item: new URL(locale === 'es' ? '/' : '/en/', siteUrl).toString(),
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: label,
					item: pageUrl.toString(),
				},
			],
		},
	];
};

interface PrivacySchemaOptions {
	locale: Locale;
	siteUrl: URL;
	pageUrl: URL;
	title: string;
	description: string;
	label: string;
	datePublished: string;
	dateModified: string;
}

export const createPrivacySchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	description,
	label,
	datePublished,
	dateModified,
}: PrivacySchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const websiteId = new URL('/#website', siteUrl).toString();
	const breadcrumbId = new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString();

	return [
		createPersonNode(locale, siteUrl, new URL('/images/profile.webp', siteUrl)),
		createWebsiteNode(siteUrl),
		{
			'@type': 'WebPage',
			'@id': new URL(`${pageUrl.pathname}#webpage`, siteUrl).toString(),
			url: pageUrl.toString(),
			name: title,
			description,
			inLanguage: locale,
			datePublished: toSchemaDateTime(datePublished),
			dateModified: toSchemaDateTime(dateModified),
			isPartOf: { '@id': websiteId },
			publisher: { '@id': personId },
			breadcrumb: { '@id': breadcrumbId },
		},
		{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: locale === 'es' ? 'Inicio' : 'Home',
					item: new URL(locale === 'es' ? '/' : '/en/', siteUrl).toString(),
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: label,
					item: pageUrl.toString(),
				},
			],
		},
	];
};

interface NotesIndexSchemaOptions {
	locale: Locale;
	siteUrl: URL;
	pageUrl: URL;
	title: string;
	description: string;
	label: string;
	notes: readonly Note[];
}

const homeCrumb = (locale: Locale, siteUrl: URL): SchemaNode => ({
	'@type': 'ListItem',
	position: 1,
	name: locale === 'es' ? 'Inicio' : 'Home',
	item: new URL(locale === 'es' ? '/' : '/en/', siteUrl).toString(),
});

export const createNotesIndexSchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	description,
	label,
	notes,
}: NotesIndexSchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const websiteId = new URL('/#website', siteUrl).toString();
	const pageId = new URL(`${pageUrl.pathname}#webpage`, siteUrl).toString();
	const blogId = new URL(`${pageUrl.pathname}#blog`, siteUrl).toString();
	const breadcrumbId = new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString();

	return [
		createPersonNode(locale, siteUrl, new URL('/images/profile.webp', siteUrl)),
		createWebsiteNode(siteUrl),
		{
			'@type': 'CollectionPage',
			'@id': pageId,
			url: pageUrl.toString(),
			name: title,
			description,
			inLanguage: locale,
			isPartOf: { '@id': websiteId },
			about: { '@id': personId },
			breadcrumb: { '@id': breadcrumbId },
			mainEntity: { '@id': blogId },
		},
		{
			'@type': 'Blog',
			'@id': blogId,
			url: pageUrl.toString(),
			name: label,
			description,
			inLanguage: locale,
			author: { '@id': personId },
			publisher: { '@id': personId },
			blogPost: notes.map((note) => {
				const noteUrl = new URL(note.path, siteUrl);

				return {
					'@type': 'BlogPosting',
					'@id': new URL(`${noteUrl.pathname}#note`, siteUrl).toString(),
					headline: note.title,
					url: noteUrl.toString(),
					datePublished: toSchemaDateTime(note.datePublished),
					dateModified: toSchemaDateTime(note.dateModified),
					author: { '@id': personId },
				};
			}),
		},
		{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: [
				homeCrumb(locale, siteUrl),
				{
					'@type': 'ListItem',
					position: 2,
					name: label,
					item: pageUrl.toString(),
				},
			],
		},
	];
};

interface NoteSchemaOptions {
	locale: Locale;
	siteUrl: URL;
	pageUrl: URL;
	title: string;
	note: Note;
	/** The notes index: its path and its name in the breadcrumbs. */
	indexPath: string;
	indexLabel: string;
	/** The case study the note comes from. */
	projectPath?: string;
	socialImage: URL;
	socialImageAlt: string;
}

export const createNoteSchema = ({
	locale,
	siteUrl,
	pageUrl,
	title,
	note,
	indexPath,
	indexLabel,
	projectPath,
	socialImage,
	socialImageAlt,
}: NoteSchemaOptions): SchemaNode[] => {
	const personId = new URL('/#person', siteUrl).toString();
	const websiteId = new URL('/#website', siteUrl).toString();
	const pageId = new URL(`${pageUrl.pathname}#webpage`, siteUrl).toString();
	const noteId = new URL(`${pageUrl.pathname}#note`, siteUrl).toString();
	const breadcrumbId = new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString();
	const indexUrl = new URL(indexPath, siteUrl);

	return [
		createPersonNode(locale, siteUrl, new URL('/images/profile.webp', siteUrl)),
		createWebsiteNode(siteUrl),
		{
			'@type': 'WebPage',
			'@id': pageId,
			url: pageUrl.toString(),
			name: title,
			description: note.description,
			inLanguage: locale,
			isPartOf: { '@id': websiteId },
			breadcrumb: { '@id': breadcrumbId },
			mainEntity: { '@id': noteId },
			primaryImageOfPage: {
				'@type': 'ImageObject',
				url: socialImage.toString(),
				width: 1200,
				height: 630,
				caption: socialImageAlt,
			},
		},
		{
			'@type': 'BlogPosting',
			'@id': noteId,
			headline: note.title,
			description: note.description,
			url: pageUrl.toString(),
			inLanguage: locale,
			datePublished: toSchemaDateTime(note.datePublished),
			dateModified: toSchemaDateTime(note.dateModified),
			author: { '@id': personId },
			publisher: { '@id': personId },
			mainEntityOfPage: { '@id': pageId },
			isPartOf: { '@id': new URL(`${indexUrl.pathname}#blog`, siteUrl).toString() },
			...(note.tags.length > 0 && { keywords: note.tags }),
			// The case study the note is drawn from, by the @id its own page gives it.
			...(projectPath && {
				isBasedOn: { '@id': new URL(`${projectPath}#case-study`, siteUrl).toString() },
			}),
			wordCount: note.wordCount,
			image: socialImage.toString(),
		},
		{
			'@type': 'BreadcrumbList',
			'@id': breadcrumbId,
			itemListElement: [
				homeCrumb(locale, siteUrl),
				{
					'@type': 'ListItem',
					position: 2,
					name: indexLabel,
					item: indexUrl.toString(),
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: note.title,
					item: pageUrl.toString(),
				},
			],
		},
	];
};
