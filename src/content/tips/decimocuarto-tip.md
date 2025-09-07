---
title: "Variables de Entorno en Astro"
pubDate: 2025-09-20
description: "Gestiona claves de API y otros secretos de forma segura con variables de entorno."
image: "https://images.pexels.com/photos/5499133/pexels-photo-5499133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "security", "config"]
---

## Archivos `.env`

Astro tiene soporte integrado para archivos `.env`.

-   `.env`: Variables por defecto.
-   `.env.development`: Variables solo para desarrollo.
-   `.env.production`: Variables solo para producción.

### Accediendo a las Variables

Por defecto, las variables de entorno solo están disponibles en el lado del servidor.

```typescript
// En cualquier archivo .astro, .ts, o .js
const apiKey = import.meta.env.MY_API_KEY;
```

### Exponiendo Variables al Cliente

Si necesitas que una variable esté disponible en el navegador, debes prefijarla con `PUBLIC_`.

```
# .env
PUBLIC_GOOGLE_MAPS_KEY=...
```

```javascript
// En tu código de cliente
const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_KEY;
```

Nunca expongas secretos o claves privadas al cliente.