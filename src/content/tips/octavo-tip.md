---
title: "Renderizado del Lado del Servidor (SSR) en Astro"
pubDate: 2025-09-14
description: "Astro no es solo para sitios estáticos. También puedes usarlo para renderizado del lado del servidor."
image: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "ssr"]
---

## Activando el SSR

Para activar el SSR en Astro, necesitas añadir un "adapter" a tu configuración. Los adapters conectan Astro a un entorno de ejecución de servidor, como Vercel, Netlify, Node.js, etc.

### Ejemplo con el Adapter de Node.js

1.  **Añadir el adapter**:
    ```bash
    npx astro add node
    ```

2.  **Configurar `astro.config.mjs`**:
    ```javascript
    import { defineConfig } from 'astro/config';
    import node from '@astrojs/node';

    export default defineConfig({
      output: 'server',
      adapter: node({
        mode: 'standalone'
      }),
    });
    ```

3.  **Construir y ejecutar**:
    ```bash
    npm run build
    node dist/server/entry.mjs
    ```

Con el SSR, puedes construir APIs, proteger rutas con autenticación y renderizar contenido dinámicamente en el servidor.