---
title: "Mi Primer Tip"
pubDate: 2025-09-06
description: "Esta es una breve descripción de mi primer tip sobre Astro."
image: "/assets/images/tip-1.jpg"
tags: ["astro", "learning", "beginner"]
---

## Contenido del Tip

Aquí va el cuerpo de tu tip. Puedes usar cualquier sintaxis de **Markdown**.

El sistema de colecciones de contenido de Astro es muy potente y te permite organizar tu contenido de forma estructurada y segura.

### Beneficios

-   **Tipado automático**: Gracias al archivo `config.ts`, Astro valida que todos los campos del frontmatter sean correctos.
-   **APIs de Contenido**: Puedes consultar fácilmente tus entradas desde cualquier página `.astro`.

```javascript
import { getCollection } from "astro:content";
const tips = await getCollection("tips");
```
