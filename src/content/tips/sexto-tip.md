---
title: "Estilos en Astro"
pubDate: 2025-09-12
description: "Astro ofrece varias formas de aplicar estilos a tus componentes."
image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "css", "styling"]
---

## Estilos "Scoped" por Defecto

En Astro, los estilos definidos en una etiqueta `<style>` dentro de un componente son "scoped" por defecto. Esto significa que solo se aplican al HTML de ese componente.

```html
<style>
  h1 {
    color: red; /* Solo los h1 de este componente serán rojos */
  }
</style>

<h1>Soy rojo</h1>
```

### Estilos Globales

Si necesitas estilos globales, puedes crear un archivo `global.css` en `src/styles` e importarlo en tu layout principal.

```javascript
// src/layouts/Layout.astro
import '../styles/global.css';
---
```

### Integración con Tailwind CSS

Astro tiene una integración oficial con Tailwind CSS. Puedes instalarla con un solo comando:

```bash
npx astro add tailwind
```

Esto te permite usar las clases de utilidad de Tailwind en tus componentes de Astro.