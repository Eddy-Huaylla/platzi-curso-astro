---
title: "Navegación Espacial: Rutas en Astro"
pubDate: 2025-09-09
description: "Astro utiliza un sistema de enrutamiento basado en archivos que es intuitivo y potente."
image: "https://images.unsplash.com/photo-1530504617834-fce8b5896783?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "routing", "beginner"]
---

## Rutas Basadas en Archivos

En Astro, cada archivo `.astro` dentro del directorio `src/pages` se convierte en una ruta en tu sitio web.

-   `src/pages/index.astro` -> `/`
-   `src/pages/about.astro` -> `/about`
-   `src/pages/blog/index.astro` -> `/blog`
-   `src/pages/blog/post-1.astro` -> `/blog/post-1`

### Rutas Dinámicas

Para crear páginas dinámicas (por ejemplo, para una colección de posts), puedes usar corchetes `[]` en el nombre del archivo.

Por ejemplo, `src/pages/posts/[slug].astro` generará una página para cada post. Usando `getStaticPaths`, puedes definir qué páginas se deben generar en el momento de la compilación.

```javascript
// src/pages/posts/[slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
---
<h1>{post.data.title}</h1>
<p>{post.body}</p>
```

Este sistema es muy flexible y permite construir sitios complejos con una estructura de archivos muy clara.