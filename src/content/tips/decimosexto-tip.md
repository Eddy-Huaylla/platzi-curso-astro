---
title: "Modos de Renderizado en Astro"
pubDate: 2025-09-22
description: "Astro te permite mezclar renderizado estático y dinámico en el mismo sitio."
image: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "ssr", "ssg"]
---

## Híbrido: Lo Mejor de Ambos Mundos

Por defecto, Astro es un generador de sitios estáticos (SSG). Pero en modo SSR, puedes elegir qué páginas se renderizan estáticamente y cuáles dinámicamente.

### `export const prerender = true`

En una página `.astro`, puedes exportar la constante `prerender` para forzar que esa página sea generada estáticamente en el momento de la compilación, incluso en modo SSR.

```astro
---
// src/pages/about.astro
// Esta página será estática.
export const prerender = true;
---
<h1>Sobre Nosotros</h1>
<p>Somos una empresa que ama Astro.</p>
```

Esto es ideal para páginas de marketing, "sobre nosotros", o cualquier contenido que no cambie en cada petición. Mientras tanto, otras páginas como un panel de usuario (`/dashboard`) pueden ser renderizadas dinámicamente.