# Portafolio de Josué Correa

Portafolio de **Josué Correa**, Ingeniero de Sistemas y Desarrollador Backend especializado en Laravel, PHP, MySQL, APIs REST y sistemas web orientados a procesos de negocio.

## Características

- Contenido completo en español e inglés.
- Selección automática de idioma en la ruta raíz.
- Cambio manual de idioma con persistencia de la preferencia.
- Temas claro y oscuro con detección de la preferencia del sistema.
- Diseño responsive para escritorio y dispositivos móviles.
- Animaciones de texto con Web Animations API.
- Compatibilidad con `prefers-reduced-motion`.
- Navegación accesible por teclado y enlace para saltar al contenido.
- Metadatos SEO, URL canónica y etiquetas `hreflang`.
- Página 404 localizada.
- Fuentes servidas localmente, sin dependencias de terceros en tiempo de ejecución.

## Stack

- [Astro 6](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/) en modo estricto
- [Tailwind CSS 4](https://tailwindcss.com/)
- HTML, CSS y JavaScript nativos
- Web Animations API

## Requisitos

- Node.js `22.12.0` o superior
- npm

Puedes verificar tu entorno con:

```bash
node --version
npm --version
```

## Instalación y desarrollo

```bash
git clone <URL_DEL_REPOSITORIO>
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
| `npm run build` | Genera el sitio estático de producción en `dist/`. |
| `npm run preview` | Sirve localmente el contenido generado en `dist/`. |
| `npm run astro -- <comando>` | Ejecuta comandos adicionales del CLI de Astro. |

Antes de publicar cambios:

```bash
npm run check
npm run build
npm run preview
```

## Rutas

| Ruta | Función |
| --- | --- |
| `/` | Detecta la preferencia guardada o el idioma del navegador y redirige a una versión localizada. |
| `/es/` | Portafolio en español. |
| `/en/` | Portafolio en inglés. |
| `/404.html` | Página de error localizada según el idioma del usuario. |

La detección automática solo ocurre en `/`. Las rutas explícitas `/es/` y `/en/` permanecen estables.

## Estructura del proyecto

```text
grateful-giant/
├── public/
│   ├── fonts/                 # Fuentes locales
│   └── logo.svg               # Logo y favicon
├── src/
│   ├── components/
│   │   ├── common/            # Botones, badges, tema y animaciones
│   │   ├── errors/            # Presentación de errores
│   │   ├── layout/            # Header y footer
│   │   ├── projects/          # Caso de estudio
│   │   └── sections/          # Secciones principales del portafolio
│   ├── data/
│   │   └── technologies.ts    # Tecnologías por idioma
│   ├── i18n/
│   │   ├── config.ts          # Idiomas y rutas alternas
│   │   └── translations.ts    # Contenido localizado
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Documento, SEO y tema inicial
│   │   └── MainLayout.astro   # Navegación y composición principal
│   ├── pages/                 # Rutas Astro
│   └── styles/
│       └── global.css         # Tokens, temas y estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Mantenimiento del contenido

La mayor parte del contenido visible se administra desde:

- `src/i18n/translations.ts`: textos, metadatos SEO y contenido del caso de estudio.
- `src/data/technologies.ts`: categorías y tecnologías.
- `src/components/sections/Contact.astro`: correo y URL de LinkedIn.
- `public/logo.svg`: identidad gráfica y favicon.

Al modificar textos, conserva la paridad semántica entre español e inglés. Las claves de ambos idiomas deben mantener la misma estructura para evitar inconsistencias en compilación o renderizado.

## SEO y dominio

El dominio de producción se configura en `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://josuecorreaq.com',
  trailingSlash: 'always',
});
```

Si el sitio se publica en otro dominio, actualiza `site` antes de compilar. Astro utiliza este valor para generar las URL canónicas y las referencias `hreflang`.

La ruta `/` incluye `noindex, follow` porque funciona únicamente como selector y redirección de idioma. Las páginas localizadas son las URL indexables.

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
Node version: 22.12.0 o superior
```

El hosting debe servir `404.html` como página de error personalizada y respetar las rutas con barra final.

## Seguridad y privacidad

- No se requieren variables de entorno ni secretos para compilar el proyecto.
- No deben agregarse credenciales, tokens o información privada al código fuente.
- Los enlaces externos que abren otra pestaña deben conservar `rel="noopener noreferrer"`.
- Las dependencias deben mantenerse actualizadas y revisarse periódicamente con `npm audit`.
- La información de contacto publicada es deliberadamente pública; cualquier dato adicional debe evaluarse antes de exponerlo.
