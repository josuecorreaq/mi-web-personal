import type { APIRoute } from 'astro';
import { createNotesFeed } from '../../../data/notes';

export const GET: APIRoute = async ({ site }) =>
	new Response(await createNotesFeed('en', site ?? new URL('https://josuecorreaq.com')), {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
	});
