import type { Locale } from '../i18n/config';
import type { IconName } from '../components/common/Icon.astro';

type Technology = {
	label: string;
	icon: IconName;
};

type TechnologyCategory = {
	name: string;
	items: Technology[];
};

const categories = {
	es: [
		{
			name: 'Backend',
			items: [
				{ label: 'Laravel', icon: 'laravel' },
				{ label: 'PHP', icon: 'php' },
			],
		},
		{
			name: 'Frontend',
			items: [
				{ label: 'React', icon: 'react' },
				{ label: 'JavaScript', icon: 'javascript' },
			],
		},
		{ name: 'Base de datos', items: [{ label: 'MySQL', icon: 'mysql' }] },
		{
			name: 'Herramientas',
			items: [
				{ label: 'Git', icon: 'git' },
				{ label: 'Docker', icon: 'docker' },
			],
		},
		{
			name: 'Buenas prácticas',
			items: [
				{ label: 'Clean Code', icon: 'clean-code' },
				{ label: 'Arquitectura modular', icon: 'modular-architecture' },
				{ label: 'Seguridad JWT', icon: 'jwt-security' },
			],
		},
	],
	en: [
		{
			name: 'Backend',
			items: [
				{ label: 'Laravel', icon: 'laravel' },
				{ label: 'PHP', icon: 'php' },
			],
		},
		{
			name: 'Frontend',
			items: [
				{ label: 'React', icon: 'react' },
				{ label: 'JavaScript', icon: 'javascript' },
			],
		},
		{ name: 'Database', items: [{ label: 'MySQL', icon: 'mysql' }] },
		{
			name: 'Tools',
			items: [
				{ label: 'Git', icon: 'git' },
				{ label: 'Docker', icon: 'docker' },
			],
		},
		{
			name: 'Practices',
			items: [
				{ label: 'Clean Code', icon: 'clean-code' },
				{ label: 'Modular architecture', icon: 'modular-architecture' },
				{ label: 'JWT security', icon: 'jwt-security' },
			],
		},
	],
} as const satisfies Record<Locale, TechnologyCategory[]>;

export const getTechnologies = (locale: Locale) => categories[locale];