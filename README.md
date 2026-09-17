# Portafolio de Josué Correa

Portafolio de **Josué Correa**, Ingeniero de Sistemas y Desarrollador Backend especializado en Laravel, PHP, MySQL, APIs REST y sistemas web orientados a procesos de negocio.

Sitio en producción: [josuecorreaq.com](https://josuecorreaq.com)

## Características

- Contenido completo en español e inglés.
- Español en la ruta raíz e inglés en `/en/`.
- Casos de estudio de proyectos con ruta propia por idioma.
- Cambio manual de idioma con persistencia de la preferencia.
- Temas claro y oscuro con detección de la preferencia del sistema.
- Diseño responsive para escritorio y dispositivos móviles.
- Animaciones de texto y revelado con Web Animations API.
- Compatibilidad con `prefers-reduced-motion`.
- Navegación accesible por teclado y enlace para saltar al contenido.
- CV consultable en modal sin salir de la página.
- Formulario de contacto conectado a un endpoint configurable, con honeypot y Cloudflare Turnstile.
- Metadatos SEO, URL canónica, etiquetas `hreflang` y datos estructurados JSON-LD.
- `sitemap.xml` generado en compilación con alternates por idioma.
- `robots.txt` y `llms.txt` publicados.
- Página 404 localizada.
- Fuentes servidas localmente, sin dependencias de terceros en tiempo de ejecución.
- CSP basada en hashes generada automáticamente tras cada build.

## Stack

- [Astro 7](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/) en modo estricto
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) y [Simple Icons](https://simpleicons.org/) como iconografía
- HTML, CSS y JavaScript nativos
- Web Animations API

## Requisitos

- Node.js `22.19.0` o superior (declarado en `engines`)
- npm

Puedes verificar tu entorno con:

```bash
node --version
npm --version
```

## Instalación y desarrollo

```bash
git clone https://github.com/josuecorreaq/mi-web-personal.git
cd grateful-giant
npm install
npm run dev
```

El servidor de desarrollo estará disponible normalmente en `http://localhost:4321`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run check` | Valida los componentes Astro y los tipos de TypeScript. |
| `npm run build` | Genera el sitio estático en `dist/` y escribe la CSP con hashes. |
| `npm run preview` | Sirve localmente el contenido generado en `dist/`. |
| `npm run astro -- <comando>` | Ejecuta comandos adicionales del CLI de Astro. |

Antes de publicar cambios:

```bash
npm run check
npm run build
npm run preview
```

## Formulario de contacto

El formulario de contacto envía JSON al endpoint configurado en `PUBLIC_CONTACT_API_URL`.

Para desarrollo local:

```bash
PUBLIC_CONTACT_API_URL=http://127.0.0.1:8000/api/contact
PUBLIC_TURNSTILE_SITE_KEY=
```

Contrato esperado:

- `POST /api/contact`
- Campos: `name`, `email`, `message`, `website`, `turnstile_token`
- `website` funciona como honeypot y debe permanecer vacío
- `turnstile_token` sale del campo generado por Cloudflare `cf-turnstile-response`
- Respuesta pública exitosa: `202 Accepted` con `{"message":"Mensaje recibido."}`
- `422 Unprocessable Entity` indica validación o Turnstile inválido; el frontend resetea el widget

La implementación Laravel viva está en `C:\api-josuecorreaq`; su contrato completo está en `C:\api-josuecorreaq\docs\contact-backend-laravel.md`.

## Rutas

| Ruta | Función |
| --- | --- |
| `/` | Portafolio en español y URL canónica principal. |
| `/en/` | Portafolio en inglés. |
| `/proyectos/<slug>/` | Caso de estudio en español. |
| `/en/projects/<slug>/` | Caso de estudio en inglés. |
| `/sitemap.xml` | Sitemap generado con alternates `hreflang`. |
| `/robots.txt` | Directivas de rastreo y referencia al sitemap. |
| `/llms.txt` | Resumen del sitio para agentes y modelos. |
| `/404.html` | Página de error localizada según el idioma del usuario. |

Slugs publicados actualmente:

| Proyecto | Español | Inglés |
| --- | --- | --- |
| Sistema de Desembolsos | `/proyectos/sistema-gestion-desembolsos/` | `/en/projects/disbursement-management-system/` |
| Plataforma de Gestión Crediticia | `/proyectos/plataforma-gestion-crediticia/` | `/en/projects/credit-management-platform/` |

El selector de idioma enlaza directamente entre `/` y `/en/`. Los casos de estudio enlazan a su equivalente en el otro idioma mediante `hreflang`.

## Estructura del proyecto

```text
grateful-giant/
├── public/
│   ├── fonts/                 # Fuentes locales
│   ├── images/                # Imágenes estáticas
│   ├── og/                    # Imagen Open Graph
│   ├── .htaccess              # Plantilla de cabeceras con marcador de CSP
│   ├── llms.txt               # Resumen del sitio para agentes
│   ├── robots.txt             # Directivas de rastreo
│   └── logo.svg               # Logo y favicon
├── scripts/
│   └── generate-csp.mjs       # Calcula hashes y escribe dist/.htaccess
├── src/
│   ├── components/
│   │   ├── common/            # Botón, iconos, tema y animaciones
│   │   ├── cv/                # Documento y modal del CV
│   │   ├── errors/            # Presentación de errores
│   │   ├── layout/            # Header y footer
│   │   ├── projects/          # Tarjeta y caso de estudio
│   │   └── sections/          # Secciones principales del portafolio
│   ├── data/
│   │   ├── projects.ts        # Definición, slugs y rutas de los proyectos
│   │   ├── schema.ts          # Datos estructurados JSON-LD
│   │   ├── social.ts          # Enlaces de contacto y perfiles
│   │   └── technologies.ts    # Tecnologías por idioma
│   ├── i18n/
│   │   ├── config.ts          # Idiomas y rutas alternas
│   │   └── translations.ts    # Contenido localizado
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Documento, SEO y tema inicial
│   │   ├── MainLayout.astro    # Navegación y composición principal
│   │   └── ProjectLayout.astro # Envoltura de los casos de estudio
│   ├── pages/
│   │   ├── en/                # Rutas en inglés
│   │   ├── proyectos/         # Casos de estudio en español
│   │   ├── index.astro        # Portada en español
│   │   ├── 404.astro          # Error localizado
│   │   └── sitemap.xml.ts     # Generador del sitemap
│   ├── scripts/
│   │   ├── contact-form.ts    # Envío y validación del formulario
│   │   └── cv-modal.ts        # Control del modal del CV
│   └── styles/
│       └── global.css         # Tokens, temas y estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Mantenimiento del contenido

La mayor parte del contenido visible se administra desde:

- `src/i18n/translations.ts`: textos, metadatos SEO y etiquetas de interfaz.
- `src/data/projects.ts`: proyectos, slugs, rutas, stack y contenido del caso de estudio.
- `src/data/technologies.ts`: categorías y tecnologías.
- `src/data/social.ts`: correo y perfiles públicos; alimenta la UI y el schema `Person`.
- `public/logo.svg` y `public/og/`: identidad gráfica, favicon e imagen social.

Al modificar textos, conserva la paridad semántica entre español e inglés. Las claves de ambos idiomas deben mantener la misma estructura para evitar inconsistencias en compilación o renderizado.

Al añadir un proyecto, actualiza `projectDefinitions` en `src/data/projects.ts` con sus dos slugs y sus dos rutas. El sitemap, las rutas estáticas y los `hreflang` se derivan de ahí; no hay que registrarlo en otro sitio. Actualiza también `PROJECT_LAST_MODIFIED` para que el `lastmod` del sitemap refleje el cambio.

## SEO y dominio

El dominio de producción se configura en `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://josuecorreaq.com',
  trailingSlash: 'always',
});
```

Si el sitio se publica en otro dominio, actualiza `site` antes de compilar. Astro utiliza este valor para generar las URL canónicas y las referencias `hreflang`.

Las URL indexables son las dos portadas (`/` y `/en/`) y los cuatro casos de estudio. Todas publican canonical propio, `hreflang` recíproco y `x-default` apuntando a la versión en español.

Después de un despliegue que añada o renombre rutas:

1. Comprueba que `https://josuecorreaq.com/sitemap.xml` ya lista las URL nuevas.
2. Reenvía el sitemap en Google Search Console.
3. Usa Inspección de URLs y solicita indexación para cada ruta nueva.

## Despliegue

`npm run build` genera un sitio estático en `dist/`, por lo que puede desplegarse en cualquier proveedor de hosting estático, por ejemplo:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- Servidor web propio con Nginx o Apache

Configuración habitual:

```text
Build command: npm run build
Output directory: dist
Node version: 22.19.0 o superior
```

El hosting debe servir `404.html` como página de error personalizada y respetar las rutas con barra final.

### CSP en cPanel/LiteSpeed

`npm run build` compila Astro y después ejecuta `scripts/generate-csp.mjs`. El generador calcula hashes SHA-256 para cada script y estilo inline del HTML final y reemplaza el marcador de `public/.htaccess` dentro de `dist/.htaccess`.

- Despliega juntos el contenido de `dist/` y su `.htaccess`; los hashes pertenecen exactamente a ese build.
- Si cPanel administra `.htaccess`, conserva sus bloques y copia únicamente la línea `Content-Security-Policy` generada.
- No publiques `public/.htaccess` directamente: contiene el marcador, no la política final.
- Evita dejar HTML antiguo en `/es/`. La ruta española canónica actual es `/`; elimina el artefacto obsoleto durante un despliegue limpio o configúralo como redirección permanente a `/`.

El despliegue a cPanel está descrito en `.cpanel.yml`.

## Seguridad y privacidad

- `PUBLIC_CONTACT_API_URL` es una variable pública; no debe contener secretos.
- No deben agregarse credenciales, tokens o información privada al código fuente.
- Los secretos SMTP y credenciales del backend deben vivir solo en Laravel `.env`.
- La CSP debe permanecer basada en hashes; no agregues `'unsafe-inline'` para resolver bloqueos.
- Los enlaces externos que abren otra pestaña deben conservar `rel="noopener noreferrer"`.
- Las dependencias deben mantenerse actualizadas y revisarse periódicamente con `npm audit`.
- La información de contacto publicada es deliberadamente pública; cualquier dato adicional debe evaluarse antes de exponerlo.
