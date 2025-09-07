---
title: "Fuentes Locales en Astro"
pubDate: 2025-09-19
description: "Cómo alojar y optimizar fuentes tipográficas locales en tu proyecto Astro."
image: "https://images.unsplash.com/photo-1509909756405-be0199881695?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "fonts", "performance"]
---

## Alojando tus Propias Fuentes

Para un mejor rendimiento y para evitar el seguimiento de terceros, es una buena práctica alojar tus propias fuentes.

### Pasos

1.  **Coloca los archivos de fuente** en `src/assets/fonts`.
2.  **Define `@font-face`** en tu CSS global:

    ```css
    /* src/styles/global.css */
    @font-face {
      font-family: 'MyFont';
      src: url('/assets/fonts/my-font.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap; /* Importante para el rendimiento */
    }
    ```
3.  **Usa la fuente** en tu CSS:

    ```css
    body {
      font-family: 'MyFont', sans-serif;
    }
    ```

Astro procesará y optimizará estas rutas de fuente automáticamente en el momento de la compilación.