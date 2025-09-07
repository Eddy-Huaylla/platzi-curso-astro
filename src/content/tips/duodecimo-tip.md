---
title: "Imágenes en Astro"
pubDate: 2025-09-18
description: "Optimiza y transforma imágenes fácilmente con las herramientas de Astro."
image: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "images", "performance"]
---

## `<Image />` y `<Picture />`

Astro proporciona componentes integrados para la optimización de imágenes.

### Componente `Image`

El componente `<Image>` genera una imagen optimizada (`<img>`) con los mejores atributos de rendimiento, como `loading="lazy"` y `decoding="async"`.

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.png';
---
<Image src={myImage} alt="Una descripción de mi imagen" />
```

### Transformaciones

Puedes transformar imágenes (redimensionar, cambiar formato) directamente:

```astro
<Image
  src={myImage}
  width={300}
  format="webp"
  alt="Una imagen más pequeña y en formato WebP"
/>
```

El componente `<Picture>` te da aún más control, permitiéndote especificar diferentes fuentes de imagen para diferentes tamaños de pantalla o formatos.