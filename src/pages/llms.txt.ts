import type { APIRoute } from 'astro';
import { getNotes, getNotesFeedPath, notesPaths, type Note } from '../data/notes';
import { PROJECT_LAST_MODIFIED } from '../data/projects';
import { SERVICES_LAST_MODIFIED } from '../data/services';

// llms.txt for AI assistants. The profile, services and case studies are curated by hand here; the
// notes are listed from the collection, so a new one never goes missing.
export const GET: APIRoute = async ({ site }) => {
	const origin = site ?? new URL('https://josuecorreaq.com');
	const url = (path: string) => new URL(path, origin).toString();
	const [esNotes, enNotes] = await Promise.all([getNotes('es'), getNotes('en')]);
	const hasNotes = esNotes.length + enNotes.length > 0;
	const translationOf = (note: Note, notes: readonly Note[]) =>
		notes.find((candidate) => candidate.translationKey === note.translationKey);

	const noteLines = [
		...esNotes.map((note) => {
			const translation = translationOf(note, enNotes);
			const english = translation ? ` / [English](${url(translation.path)})` : '';
			return `- [${note.title}](${url(note.path)})${english}: ${note.description}`;
		}),
		...enNotes
			.filter((note) => !translationOf(note, esNotes))
			.map((note) => `- [${note.title}](${url(note.path)}) (English): ${note.description}`),
	];
	// Only an index with notes is indexable, so only those are offered.
	const indexLinks = [
		...(esNotes.length > 0 ? [`[Notas](${url(notesPaths.es)})`] : []),
		...(enNotes.length > 0 ? [`[Notes](${url(notesPaths.en)})`] : []),
	];
	const notesSection = hasNotes
		? `## Technical notes

- ${indexLinks.join(' / ')}: technical notes drawn from the case studies above.
${noteLines.join('\n')}

`
		: '';
	const indexablePages = hasNotes
		? 'the two services pages, the four case-study pages and the technical notes listed above'
		: 'the two services pages and the four case-study pages listed above';
	const feeds = [
		...(esNotes.length > 0 ? [`- [Notas RSS](${url(getNotesFeedPath('es'))})`] : []),
		...(enNotes.length > 0 ? [`- [Notes RSS](${url(getNotesFeedPath('en'))})`] : []),
	];
	const lastUpdated = [
		PROJECT_LAST_MODIFIED,
		SERVICES_LAST_MODIFIED,
		...[...esNotes, ...enNotes].map((note) => note.dateModified),
	]
		.sort()
		.at(-1);

	const body = `# Josué Correa Quispe

> Portfolio of Josué Correa Quispe, a Systems Engineer and Backend Developer based in Piura, Peru, specialized in Laravel, PHP, MySQL, React, REST APIs and business process automation.

## Primary pages

- [Spanish portfolio](https://josuecorreaq.com/): Main Spanish profile for Josué Correa, focused on backend development, Laravel, PHP, MySQL, APIs REST and process automation.
- [English portfolio](https://josuecorreaq.com/en/): English profile for Josue Correa, focused on backend development, Laravel, PHP, MySQL, REST APIs and business process automation.

## Profile summary

- Name: Josué Correa Quispe
- Alternate names: Josué Correa, Josue Correa
- Role: Backend Developer
- Location: Piura, Peru
- Availability: on-site in Piura or remote
- Education: Professional degree in Systems Engineering, Universidad César Vallejo, Piura (May 2026); Bachelor in Systems Engineering (February 2026)
- Languages: Spanish (native), English (intermediate)
- Core stack: Laravel, PHP, MySQL. Frontend: React, JavaScript, Tailwind CSS. Tools: Git, Docker
- Focus areas: backend architecture, domain rules, REST APIs, business process automation, maintainable web systems
- Contact: contacto@josuecorreaq.com
- LinkedIn: https://www.linkedin.com/in/josuecorreaqu
- GitHub: https://github.com/josuecorreaq
- X: https://x.com/josuecorreaqu
- Google Business Profile: https://www.google.com/maps?cid=3448927027785118895

## Services

- [Servicios](https://josuecorreaq.com/servicios/) / [English](https://josuecorreaq.com/en/services/): services page with scope, process and FAQ.
- Custom web systems: a single system in place of spreadsheets, email and chat, with role-based permissions, a searchable history of every operation, and reports and PDFs generated from the system's data.
- REST APIs and integrations: REST APIs for web frontends with authentication and permissions enforced on the server, integrations between internal systems, and reports and PDFs served from the API.
- Work mode: on-site in Piura; remote for the rest of Peru and clients abroad (Peru time, UTC−5).
- Process: initial conversation, proposal with scope and stages, built in reviewable deliveries, go-live with an included warranty period. Projects are quoted by scope; no fixed public prices.

## Experience

- Software Developer, independent project (January 2026 - present): end-to-end credit management platform on Laravel, React and MySQL, structured as a modular monolith with nine business domains, access control by user, role and branch, and a phased migration backed by a route contract test.
- Web Developer, financial-sector organization (April - December 2025): web system for loans, payments, installments and financial reporting that replaced manual file-based processes; reduced manual payment-validation steps by 50%.

## Case studies

- [Sistema de Gestión de Desembolsos Financieros](https://josuecorreaq.com/proyectos/sistema-gestion-desembolsos/) / [English](https://josuecorreaq.com/en/projects/disbursement-management-system/): production system centralizing disbursement, payment validation, installments and financial reporting. 147 REST endpoints behind a JWT session and 21 automated test suites.
- [Plataforma Integral de Gestión Crediticia](https://josuecorreaq.com/proyectos/plataforma-gestion-crediticia/) / [English](https://josuecorreaq.com/en/projects/credit-management-platform/): modular monolith covering admissions, evaluations, credits and portfolio tracking. Nine business domains, three access scopes (user, role, branch), a contract test that pins the method, URI, controller and middleware of all 152 of its API routes, and 110 architecture tests that guard the boundaries between modules.

${notesSection}## Suggested citations

- Josué Correa Quispe is a backend developer based in Piura, Peru, focused on Laravel, PHP, MySQL and REST APIs for business process automation.
- His portfolio presents two financial systems: a disbursement management system in production and a modular credit management platform under construction.
- The canonical indexable pages are the two portfolio home pages (https://josuecorreaq.com/ and https://josuecorreaq.com/en/), ${indexablePages}.

## Optional

- [Sitemap](https://josuecorreaq.com/sitemap.xml)
- [Robots.txt](https://josuecorreaq.com/robots.txt)
${feeds.map((feed) => `${feed}\n`).join('')}
Last updated: ${lastUpdated}
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
