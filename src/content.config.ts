import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectIds } from './data/projects';

// YAML reads an unquoted 2026-10-13 as a date at UTC midnight; either way it ends up as the bare
// YYYY-MM-DD the rest of the site works with.
const isoDate = z.union([
	z.date().transform((date) => date.toISOString().slice(0, 10)),
	z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Usa el formato YYYY-MM-DD.'),
]);

// One Markdown or MDX file per note and language: src/content/notes/<es|en>/<slug>.md(x). MDX is for
// notes that place figure components among the prose. The folder gives the
// language and the file name the URL, so the id stays `es/<slug>`.
const notes = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
	schema: z.object({
		title: z.string(),
		/** Meta description and lead; search engines cut it around 160 characters. */
		description: z.string().max(170),
		datePublished: isoDate,
		/** Bump with every change worth telling readers about; defaults to the publication date. */
		dateModified: isoDate.optional(),
		/** Shared by a note and its translation, so each can point to the other. */
		translationKey: z.string(),
		tags: z.array(z.string()).default([]),
		/** The case study the note comes from; both pages link to each other. */
		project: z.enum(projectIds).optional(),
		/** Drafts render in dev and stay out of the production build. */
		draft: z.boolean().default(false),
	}),
});

export const collections = { notes };
