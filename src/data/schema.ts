import { social, socialProfileUrls } from './social';
import { PROJECT_LAST_MODIFIED } from './projects';
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
			dateModified: PROJECT_LAST_MODIFIED,
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
			datePublished,
			dateModified,
			author: { '@id': personId },
			mainEntityOfPage: { '@id': pageId },
			image: socialImage.toString(),
		},
		{
			'@type': 'BreadcrumbList',
			'@id': new URL(`${pageUrl.pathname}#breadcrumbs`, siteUrl).toString(),
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
