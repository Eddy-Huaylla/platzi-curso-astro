---
title: "Slots en Astro"
pubDate: 2025-09-23
description: "Crea componentes reutilizables y componibles con los slots de Astro."
image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "components"]
---

## El Componente `<slot />`

Los "slots" te permiten pasar contenido HTML desde un componente padre a un componente hijo. Son la base para crear layouts y componentes de UI genéricos.

### Layout Básico

Un layout es un componente de Astro que usa `<slot />` para renderizar el contenido de la página.

```astro
---
// src/layouts/Layout.astro
---
<html>
  <body>
    <header>Mi Cabecera</header>
    <main>
      <slot /> <!-- El contenido de la página irá aquí -->
    </main>
    <footer>Mi Pie de Página</footer>
  </body>
</html>
```

### Slots con Nombre

También puedes tener múltiples slots con nombre para pasar diferentes piezas de contenido.

```astro
<!-- Card.astro -->
<div class="card">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot /> <!-- Slot por defecto -->
  </main>
</div>

<!-- index.astro -->
<Card>
  <h1 slot="header">Título de la Tarjeta</h1>
  <p>Contenido principal de la tarjeta.</p>
</Card>
```