---
title: "Endpoints de API en Astro"
pubDate: 2025-09-15
description: "Crea endpoints de API para servir datos dinámicos o procesar formularios."
image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "api", "ssr"]
---

## Creando Rutas de API

En modo SSR, puedes crear "rutas de API" creando archivos `.js` o `.ts` en el directorio `src/pages`.

### Ejemplo: Endpoint GET

Crea `src/pages/api/data.json.ts`:

```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: 'Esto es un endpoint de API!',
      data: [1, 2, 3],
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
```

Ahora, si visitas `/api/data.json`, recibirás una respuesta JSON. Puedes usar estos endpoints para interactuar con una base de datos, procesar envíos de formularios, etc.