---
title: "Despliegue en Vercel"
pubDate: 2025-09-24
description: "Desplegar tu sitio Astro en Vercel es increíblemente fácil con el adapter oficial."
image: "https://images.pexels.com/photos/5775854/pexels-photo-5775854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "deployment", "vercel"]
---

## `astro add vercel`

Vercel es una plataforma de despliegue optimizada para frameworks de frontend como Astro.

1.  **Añadir el adapter**:
    ```bash
    npx astro add vercel
    ```
    Esto configurará tu proyecto para despliegue estático, SSR o híbrido en Vercel.

2.  **Conectar y Desplegar**:
    -   Sube tu código a un repositorio de Git (GitHub, GitLab, Bitbucket).
    -   Importa el proyecto en Vercel.
    -   Vercel detectará automáticamente la configuración de Astro y desplegará tu sitio.

Vercel se encarga de todo, desde la compilación hasta el despliegue en su red global (CDN), proporcionando una experiencia de despliegue sin fricciones.