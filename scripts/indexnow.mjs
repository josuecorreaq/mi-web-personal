import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Avisa a Bing y a los demás buscadores de IndexNow de las URL del sitemap. Se ejecuta después de
// desplegar: el buscador valida la clave contra el archivo ya publicado en la raíz del sitio.
const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const sitemapPath = join(projectRoot, 'dist', 'sitemap.xml');
const host = 'josuecorreaq.com';
// La clave de IndexNow es pública por diseño; su archivo vive en public/<clave>.txt.
const key = 'b4f29673c9a645af85f3d53b52fcef33';
const keyLocation = `https://${host}/${key}.txt`;

const publishedKey = await fetch(keyLocation).then((response) => (response.ok ? response.text() : ''));

if (publishedKey.trim() !== key) {
	throw new Error(`${keyLocation} no publica la clave. Despliega antes de avisar a IndexNow.`);
}

const sitemap = await readFile(sitemapPath, 'utf8');
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);

if (urlList.length === 0) {
	throw new Error('dist/sitemap.xml no tiene URL. Ejecuta npm run build primero.');
}

const response = await fetch('https://api.indexnow.org/indexnow', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host, key, keyLocation, urlList }),
});

if (!response.ok) {
	throw new Error(`IndexNow respondió ${response.status}: ${await response.text()}`);
}

console.log(`IndexNow recibió ${urlList.length} URL (HTTP ${response.status}).`);
