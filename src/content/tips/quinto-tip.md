---
title: "Componentes de Astro"
pubDate: 2025-09-11
description: "Los componentes de Astro son la base para construir tu sitio."
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
tags: ["astro", "components"]
---

## La Anatomía de un Componente de Astro

Un componente de Astro (`.astro`) es un archivo de texto con una sintaxis similar a HTML. Puede contener HTML, CSS y JavaScript/TypeScript.

### El "Code Fence"

La parte superior del componente, entre las vallas de código (`---`), es donde escribes tu JavaScript o TypeScript. Aquí puedes importar otros componentes, obtener datos y definir variables.

```javascript
---
// Tu código de servidor aquí
const name = "Astro";
---
```

### El "Template"

La parte inferior del componente es el "template". Aquí es donde escribes el HTML que se renderizará. Puedes usar las variables definidas en el "code fence".

```html
<h1>Hola, {name}!</h1>
```

Los componentes de Astro son muy potentes y te permiten construir interfaces de usuario complejas de una manera muy declarativa.