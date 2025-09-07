---
title: "Middleware en Astro"
pubDate: 2025-09-16
description: "Intercepta y modifica peticiones y respuestas con el middleware de Astro."
image: "https://images.unsplash.com/photo-1611117775350-ac3950991969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "middleware", "ssr"]
---

## ¿Qué es el Middleware?

El middleware te permite ejecutar código antes de que una ruta sea renderizada. Puedes modificar la respuesta, redirigir, o incluso bloquear peticiones.

### Creando Middleware

Crea un archivo `src/middleware.ts` (o `.js`):

```typescript
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Añade un header a todas las respuestas
  context.locals.title = "Mi Sitio Astro";

  // Continúa con la petición
  return next();
});
```

En tus componentes de Astro, puedes acceder a `context.locals`:

```astro
---
const { title } = Astro.locals;
---
<h1>{title}</h1>
```

El middleware es útil para autenticación, logging, y para pasar datos globales a tus páginas.