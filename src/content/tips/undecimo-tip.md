---
title: "View Transitions en Astro"
pubDate: 2025-09-17
description: "Crea animaciones de transición de página suaves con la API de View Transitions."
image: "https://images.unsplash.com/photo-1523530223642-917e63a36729?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "animations", "spa"]
---

## Animaciones Nativas del Navegador

Astro utiliza la API nativa del navegador `View Transitions` para proporcionar animaciones de página sin necesidad de una pesada librería de JavaScript.

### Activando View Transitions

Importa y usa el componente `ViewTransitions` en tu layout principal:

```astro
---
// src/layouts/Layout.astro
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <title>Mi Sitio</title>
  <ViewTransitions />
</head>
<body>
  <slot />
</body>
```

¡Y eso es todo! Astro ahora interceptará la navegación entre páginas y aplicará una transición de "cross-fade" por defecto.

### Personalización

Puedes personalizar las animaciones usando directivas como `transition:animate` y `transition:name` en tus elementos HTML para crear transiciones más complejas y fluidas entre páginas.