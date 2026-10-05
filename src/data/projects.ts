import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/translations';

/** First publication of the case-study pages; stays fixed across content updates. */
export const PROJECT_PUBLISHED = '2026-08-28';
export const PROJECT_LAST_MODIFIED = '2026-10-05';

export interface ArchitectureLayer {
	readonly name: string;
	readonly detail?: string;
	/** What the layer owns, shown when a visitor inspects it in the diagram. */
	readonly rule: string;
	/** Indexes of the layers this one depends on. */
	readonly dependsOn: readonly number[];
}

interface ProjectTranslation {
	readonly name: string;
	readonly year: string;
	readonly client: string;
	readonly coreLayer: number;
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
	readonly samples?: readonly {
		readonly label: string;
		readonly caption: string;
		readonly rows: readonly string[];
	}[];
	readonly architecture: {
		readonly version: string;
		readonly layers: readonly ArchitectureLayer[];
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
			es: 'Sistema de desembolsos en Laravel y React | Josué Correa',
			en: 'Laravel Disbursement Management System | Josue Correa',
		},
		seoDescription: {
			es: 'Caso de estudio de un sistema financiero con 147 endpoints REST, 21 suites automatizadas y 50 % menos pasos manuales al validar pagos.',
			en: 'Case study of a financial system with 147 REST endpoints, 21 automated suites, and 50% fewer manual steps in payment validation.',
		},
		stack: {
			es: ['Laravel', 'PHP', 'React', 'MySQL', 'APIs REST'],
			en: ['Laravel', 'PHP', 'React', 'MySQL', 'REST APIs'],
		},
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
			es: 'Plataforma crediticia modular en Laravel | Josué Correa',
			en: 'Modular Credit Platform in Laravel | Josue Correa',
		},
		seoDescription: {
			es: 'Caso de estudio de una plataforma crediticia modular con nueve dominios, autorización por tres alcances, contrato de rutas y 110 tests de arquitectura.',
			en: 'Case study of a modular credit platform with nine domains, three authorization scopes, a route contract, and 110 architecture tests.',
		},
		stack: {
			es: ['Laravel', 'PHP', 'React', 'MySQL', 'Monolito modular'],
			en: ['Laravel', 'PHP', 'React', 'MySQL', 'Modular monolith'],
		},
	},
] as const;

export const projectPageCopy = {
	es: {
		back: 'Volver a proyectos',
		role: 'Rol',
		stack: 'Tecnologías',
		context: 'Contexto operativo',
		solution: 'Solución construida',
		architecture: 'Arquitectura del sistema',
		architectureCopy: 'El flujo muestra cómo se separan las responsabilidades desde la entrada HTTP hasta la persistencia. En amarillo, la capa que concentra las reglas del negocio.',
		evidence: 'Evidencia verificable',
		result: 'Resultado',
		resultCopy: 'El valor del proyecto está en convertir reglas operativas dispersas en un sistema trazable, probado y mantenible.',
		sample: 'Del repositorio',
		next: 'Siguiente proyecto',
		contact: '¿Necesitas resolver un proceso similar?',
		contactCopy: 'Conversemos sobre el flujo, las reglas y la arquitectura que necesita tu sistema.',
		contactAction: 'Contáctame',
	},
	en: {
		back: 'Back to projects',
		role: 'Role',
		stack: 'Technologies',
		context: 'Operational context',
		solution: 'Solution delivered',
		architecture: 'System architecture',
		architectureCopy: 'The flow shows how responsibilities are separated from the HTTP entry point through persistence. The yellow layer holds the business rules.',
		evidence: 'Verifiable evidence',
		result: 'Outcome',
		resultCopy: 'The project turns scattered operational rules into a traceable, tested, and maintainable system.',
		sample: 'From the repository',
		next: 'Next project',
		contact: 'Need to solve a similar process?',
		contactCopy: 'Let’s discuss the workflow, rules, and architecture your system needs.',
		contactAction: 'Get in touch',
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
		stack: definition.stack[locale],
		datePublished: PROJECT_PUBLISHED,
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