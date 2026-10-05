# UTVT — Ingeniería en Tecnologías de la Información e Innovación Digital

Sitio web informativo de la carrera de Ingeniería en Tecnologías de la Información e Innovación Digital de la Universidad Tecnológica del Valle de Toluca (UTVT). Presenta información de la carrera y contenidos introductorios sobre tecnología, formación e innovación.

## Funcionalidades

- Página principal con una introducción a la carrera.
- Página «Acerca de» con información del perfil y las áreas de formación, además de enlaces al sitio institucional.
- Blog académico con secciones de actualidad tecnológica, áreas de formación e historias de la comunidad.
- Navegación adaptada a las rutas activas y una página personalizada para rutas no encontradas.

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación de la carrera. |
| `/about` | Información institucional y áreas de formación. |
| `/blog` | Índice del blog y sus secciones. |
| `/blog/[slug]` | Contenido de una publicación del blog. |

Las tres publicaciones cargadas actualmente son `actualidad-tecnologica`, `areas-de-formacion` e `historias-que-inspiran`.

## Tecnologías

- Next.js `16.3.5` con App Router.
- React y React DOM `19.2.8`.
- TypeScript (`^5`).
- Tailwind CSS (`^4`) con PostCSS.
- ESLint `^9` y `eslint-config-next` `16.3.5`.
- Node.js `>=20.9.0`.

La aplicación no requiere variables de entorno para ejecutarse en desarrollo.

## Requisitos previos

- Node.js 20.9.0 o posterior.
- npm.

## Instalación y desarrollo

Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Next.js. |
| `npm run build` | Genera la compilación de producción. |
| `npm start` | Sirve la compilación de producción; primero ejecuta `npm run build`. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

No hay un comando de pruebas automatizadas definido en `package.json`.

## Estructura del proyecto

```text
app/
├── about/page.tsx          Página «Acerca de»
├── blog/
│   ├── [slug]/page.tsx     Página dinámica de cada publicación
│   ├── layout.tsx          Encabezado y pie de página del blog
│   └── page.tsx            Índice del blog
├── components/
│   ├── layout/             Componentes de estructura, como el encabezado
│   └── utils/              Navegación y componentes de contenido
├── data/                   Publicaciones, secciones y enlaces de navegación
├── types/                  Tipos de TypeScript para navegación y blog
├── globals.css             Estilos globales y configuración de Tailwind
├── layout.tsx              Layout raíz y fuentes
├── not-found.tsx           Página personalizada para rutas no encontradas
└── page.tsx                Página principal
public/                     Recursos estáticos
```

Las rutas se derivan de los directorios y archivos `page.tsx` de `app/`. Los datos de navegación y del blog están definidos en archivos TypeScript bajo `app/data/`; no se observa una API ni una base de datos en la implementación actual.

## Notas sobre el estado actual

- Las publicaciones existentes se mantienen en `app/data/blog-posts.ts`; para agregar o editar contenido, actualiza ese archivo y, si corresponde, el índice en `app/data/blog-sections.ts`.
- La ruta dinámica del blog muestra contenido genérico cuando el `slug` no está definido en los datos.
- El layout raíz aún conserva el título y la descripción predeterminados de Create Next App, así como `lang="en"`, aunque el contenido del sitio está principalmente en español.
