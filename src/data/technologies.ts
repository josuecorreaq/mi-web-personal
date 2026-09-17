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
			name: 'Stack principal',
			items: [
				{ label: 'Laravel', icon: 'laravel' },
				{ label: 'PHP', icon: 'php' },
				{ label: 'MySQL', icon: 'mysql' },
			],
		},
		{
			name: 'Frontend',
			items: [
				{ label: 'React', icon: 'react' },
				{ label: 'JavaScript', icon: 'javascript' },
				{ label: 'Tailwind CSS', icon: 'tailwind' },
			],
		},
		{
			name: 'Herramientas',
			items: [
				{ label: 'Git', icon: 'git' },
				{ label: 'Docker', icon: 'docker' },
			],
		},
	],
	en: [
		{
			name: 'Core stack',
			items: [
				{ label: 'Laravel', icon: 'laravel' },
				{ label: 'PHP', icon: 'php' },
				{ label: 'MySQL', icon: 'mysql' },
			],
		},
		{
			name: 'Frontend',
			items: [
				{ label: 'React', icon: 'react' },
				{ label: 'JavaScript', icon: 'javascript' },
				{ label: 'Tailwind CSS', icon: 'tailwind' },
			],
		},
		{
			name: 'Tools',
			items: [
				{ label: 'Git', icon: 'git' },
				{ label: 'Docker', icon: 'docker' },
			],
		},
	],
} as const satisfies Record<Locale, TechnologyCategory[]>;

export const getTechnologies = (locale: Locale) => categories[locale];