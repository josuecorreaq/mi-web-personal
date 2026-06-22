import type { Locale } from '../i18n/config';

const categories = {
	es: [
		{ name: 'Backend', items: ['Laravel', 'PHP'] },
		{ name: 'Frontend', items: ['React', 'JavaScript'] },
		{ name: 'Base de datos', items: ['MySQL'] },
		{ name: 'Herramientas', items: ['Git', 'Docker'] },
		{ name: 'Buenas prácticas', items: ['Clean Code', 'Arquitectura modular', 'Seguridad JWT'] },
	],
	en: [
		{ name: 'Backend', items: ['Laravel', 'PHP'] },
		{ name: 'Frontend', items: ['React', 'JavaScript'] },
		{ name: 'Database', items: ['MySQL'] },
		{ name: 'Tools', items: ['Git', 'Docker'] },
		{ name: 'Practices', items: ['Clean Code', 'Modular architecture', 'JWT security'] },
	],
} as const;

export const getTechnologies = (locale: Locale) => categories[locale];
