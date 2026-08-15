import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const distDirectory = join(projectRoot, 'dist');
const sourceDirectory = join(projectRoot, 'src');
const htaccessPath = join(distDirectory, '.htaccess');
const cspMarker = '# CSP_HEADER_GENERATED_AT_BUILD';
const maximumHeaderBytes = 7_500;

const forbiddenHtmlPatterns = [
	{ label: 'atributo style inline', pattern: /\sstyle\s*=/i },
	{ label: 'manejador de evento inline', pattern: /\son[a-z][\w:-]*\s*=/i },
	{
		label: 'URL javascript:',
		pattern: /(?:href|src|action)\s*=\s*["']\s*javascript:/i,
	},
];
const forbiddenSourcePatterns = [
	{ label: 'mutación mediante element.style', pattern: /\.style(?:\s*\.|\s*\[|\s*=)/ },
	{ label: 'asignación mediante cssText', pattern: /\.cssText\s*=/ },
	{
		label: 'asignación mediante setAttribute("style")',
		pattern: /setAttribute\(\s*["']style["']\s*,/,
	},
];
const sourceExtensions = new Set(['.astro', '.js', '.jsx', '.mjs', '.ts', '.tsx']);

const walk = async (directory) => {
	const entries = await readdir(directory, { withFileTypes: true });
	const files = await Promise.all(
		entries.map(async (entry) => {
			const path = join(directory, entry.name);
			return entry.isDirectory() ? walk(path) : [path];
		}),
	);

	return files.flat();
};

const sha256Source = (content) => {
	const digest = createHash('sha256').update(content, 'utf8').digest('base64');
	return `'sha256-${digest}'`;
};

const collectInlineHashes = (html, filePath) => {
	for (const { label, pattern } of forbiddenHtmlPatterns) {
		if (pattern.test(html)) {
			throw new Error(`${relative(projectRoot, filePath)} contiene ${label}.`);
		}
	}

	const scriptHashes = [];
	const styleHashes = [];

	for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
		const [, attributes, content] = match;

		if (/(?:^|\s)src\s*=/i.test(attributes)) continue;
		scriptHashes.push(sha256Source(content));
	}

	for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
		styleHashes.push(sha256Source(match[1]));
	}

	return { scriptHashes, styleHashes };
};

const sourceFiles = (await walk(sourceDirectory)).filter((file) =>
	sourceExtensions.has(extname(file)),
);

for (const filePath of sourceFiles) {
	const source = await readFile(filePath, 'utf8');

	for (const { label, pattern } of forbiddenSourcePatterns) {
		if (pattern.test(source)) {
			throw new Error(`${relative(projectRoot, filePath)} contiene ${label}.`);
		}
	}
}

const htmlFiles = (await walk(distDirectory)).filter((file) => extname(file) === '.html');

if (htmlFiles.length === 0) {
	throw new Error('No se encontraron archivos HTML en dist. Ejecuta Astro antes del generador CSP.');
}

const scriptHashes = new Set();
const styleHashes = new Set();

for (const filePath of htmlFiles) {
	const html = await readFile(filePath, 'utf8');
	const hashes = collectInlineHashes(html, filePath);
	hashes.scriptHashes.forEach((hash) => scriptHashes.add(hash));
	hashes.styleHashes.forEach((hash) => styleHashes.add(hash));
}

const directives = [
	"default-src 'none'",
	`script-src 'self' ${[...scriptHashes].sort().join(' ')} https://challenges.cloudflare.com`,
	"script-src-attr 'none'",
	`style-src 'self' ${[...styleHashes].sort().join(' ')}`,
	"style-src-attr 'none'",
	"img-src 'self' data:",
	"font-src 'self'",
	"manifest-src 'self'",
	"connect-src 'self' https://api.josuecorreaq.com https://challenges.cloudflare.com",
	"frame-src https://challenges.cloudflare.com",
	"form-action 'self' https://api.josuecorreaq.com",
	"base-uri 'none'",
	"object-src 'none'",
	"frame-ancestors 'none'",
	'upgrade-insecure-requests',
];
const policy = directives.join('; ');
const header = `Header always set Content-Security-Policy "${policy}"`;

if (Buffer.byteLength(header, 'utf8') > maximumHeaderBytes) {
	throw new Error(`La cabecera CSP supera ${maximumHeaderBytes} bytes.`);
}

const htaccessTemplate = await readFile(htaccessPath, 'utf8');
const markerCount = htaccessTemplate.split(cspMarker).length - 1;

if (markerCount !== 1) {
	throw new Error(`dist/.htaccess debe contener exactamente un marcador: ${cspMarker}`);
}

const generatedHtaccess = htaccessTemplate.replace(cspMarker, header);
await writeFile(htaccessPath, generatedHtaccess, 'utf8');

console.log(
	`CSP generada para ${htmlFiles.length} HTML: ${scriptHashes.size} hashes de script y ${styleHashes.size} hashes de estilo.`,
);
