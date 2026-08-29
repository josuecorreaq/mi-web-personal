import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/translations';

export const PROJECT_LAST_MODIFIED = '2026-08-28';

interface ProjectTranslation {
	readonly name: string;
	readonly objective: string;
	readonly context: string;
	readonly solution: string;
	readonly role: string;
	readonly decision: string;
	readonly metrics: readonly {
		readonly value: string;
		readonly label: string;
	}[];
	readonly evidence: readonly string[];
	readonly apiSample?: {
		readonly label: string;
		readonly caption: string;
		readonly rows: readonly string[];
	};
	readonly architecture: {
		readonly version: string;
		readonly layers: readonly string[];
	};
}

export interface Project extends ProjectTranslation {
	readonly id: 'financial-disbursement-management' | 'credit-management-platform';
	readonly slug: string;
	readonly path: string;
	readonly alternatePath: string;
	readonly seoTitle: string;
	readonly seoDescription: string;
	readonly stack: readonly string[];
	readonly datePublished: string;
	readonly dateModified: string;
}

const projectDefinitions = [
	{
		id: 'financial-disbursement-management',
		slugs: {
			es: 'sistema-gestion-desembolsos',
			en: 'disbursement-management-system',
		},
		paths: {
			es: '/proyectos/sistema-gestion-desembolsos/',
			en: '/en/projects/disbursement-management-system/',
		},
		seoTitle: {
			es: 'Sistema de Desembolsos | Josué Correa',
			en: 'Disbursement Management System | Josue Correa',
		},
		seoDescription: {
			es: 'Caso de estudio de un sistema financiero con 153 endpoints REST, 21 suites automatizadas y 50 % menos pasos manuales al validar pagos.',
			en: 'Case study of a financial system with 153 REST endpoints, 21 automated suites, and 50% fewer manual steps in payment validation.',
		},
		stack: ['Laravel', 'PHP', 'React', 'MySQL', 'REST APIs'],
	},
	{
		id: 'credit-management-platform',
		slugs: {
			es: 'plataforma-gestion-crediticia',
			en: 'credit-management-platform',
		},
		paths: {
			es: '/proyectos/plataforma-gestion-crediticia/',
			en: '/en/projects/credit-management-platform/',
		},
		seoTitle: {
			es: 'Plataforma de Gestión Crediticia | Josué Correa',
			en: 'Credit Management Platform | Josue Correa',
		},
		seoDescription: {
			es: 'Caso de estudio de una plataforma crediticia modular con nueve dominios, autorización por tres alcances y contratos para toda la API.',
			en: 'Case study of a modular credit platform with nine domains, three authorization scopes, and contract coverage for the entire API.',
		},
		stack: ['Laravel', 'PHP', 'React', 'MySQL', 'Modular monolith'],
	},
] as const;

export const projectPageCopy = {
	es: {
		kicker: 'Caso de estudio',
		back: 'Volver a proyectos',
		status: 'Estado',
		role: 'Rol',
		stack: 'Tecnologías',
		context: 'Contexto operativo',
		solution: 'Solución construida',
		decision: 'Decisión de arquitectura',
		architecture: 'Arquitectura del sistema',
		architectureCopy: 'El flujo muestra cómo se separan las responsabilidades desde la entrada HTTP hasta la persistencia.',
		evidence: 'Evidencia verificable',
		result: 'Resultado',
		resultCopy: 'El valor del proyecto está en convertir reglas operativas dispersas en un sistema trazable, probado y mantenible.',
		api: 'Contrato técnico',
		next: 'Siguiente proyecto',
		contact: '¿Necesitas resolver un proceso similar?',
		contactCopy: 'Conversemos sobre el flujo, las reglas y la arquitectura que necesita tu sistema.',
		contactAction: 'Contáctame',
		caseStudyAction: 'Ver caso completo',
	},
	en: {
		kicker: 'Case study',
		back: 'Back to projects',
		status: 'Status',
		role: 'Role',
		stack: 'Technologies',
		context: 'Operational context',
		solution: 'Solution delivered',
		decision: 'Architecture decision',
		architecture: 'System architecture',
		architectureCopy: 'The flow shows how responsibilities are separated from the HTTP entry point through persistence.',
		evidence: 'Verifiable evidence',
		result: 'Outcome',
		resultCopy: 'The project turns scattered operational rules into a traceable, tested, and maintainable system.',
		api: 'Technical contract',
		next: 'Next project',
		contact: 'Need to solve a similar process?',
		contactCopy: 'Let’s discuss the workflow, rules, and architecture your system needs.',
		contactAction: 'Contact me',
		caseStudyAction: 'View full case study',
	},
} as const;

export const getProjects = (locale: Locale): Project[] => {
	const translatedProjects = useTranslations(locale).projects.items;

	return projectDefinitions.map((definition, index) => ({
		...(translatedProjects[index] as ProjectTranslation),
		id: definition.id,
		slug: definition.slugs[locale],
		path: definition.paths[locale],
		alternatePath: definition.paths[locale === 'es' ? 'en' : 'es'],
		seoTitle: definition.seoTitle[locale],
		seoDescription: definition.seoDescription[locale],
		stack: definition.stack,
		datePublished: PROJECT_LAST_MODIFIED,
		dateModified: PROJECT_LAST_MODIFIED,
	}));
};

export const getProjectBySlug = (locale: Locale, slug: string) =>
	getProjects(locale).find((project) => project.slug === slug);

export const getProjectById = (locale: Locale, id: Project['id']) =>
	getProjects(locale).find((project) => project.id === id);

export const getNextProject = (locale: Locale, id: Project['id']) => {
	const projects = getProjects(locale);
	const currentIndex = projects.findIndex((project) => project.id === id);

	return projects[(currentIndex + 1) % projects.length]!;
};

export const getProjectStaticPaths = (locale: Locale) =>
	getProjects(locale).map((project) => ({
		params: { slug: project.slug },
		props: { project },
	}));

export const projectRoutePairs = projectDefinitions.map((project) => ({
	es: project.paths.es,
	en: project.paths.en,
	lastmod: PROJECT_LAST_MODIFIED,
}));