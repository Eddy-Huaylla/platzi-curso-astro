---
title: "Deploy de Astro en Netlify"
pubDate: 2025-09-10
description: "Desplegar tu sitio de Astro en Netlify es un proceso muy sencillo y rápido."
image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "deployment", "netlify"]
---

## Configuración para el Deploy

Netlify detecta automáticamente que estás usando Astro y configura el build por ti.

### Pasos

1.  **Conecta tu Repositorio**: Conecta tu repositorio de GitHub, GitLab o Bitbucket a Netlify.
2.  **Configuración del Build**:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
3.  **Deploy**: Netlify construirá tu sitio y lo desplegará en su CDN global.

### Variables de Entorno

Puedes añadir variables de entorno en la configuración de Netlify para usarlas en tu proyecto de Astro. Por ejemplo, para una API key.

```javascript
// src/config.ts
const apiKey = import.meta.env.API_KEY;
```

Con estos simples pasos, tu sitio de Astro estará online en minutos.