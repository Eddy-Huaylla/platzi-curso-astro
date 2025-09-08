# Arquitectura de Componentes y Flujo de Datos

Este documento detalla la arquitectura de componentes y el flujo de datos implementados en el proyecto, con un enfoque en la integración de Astro, Vue y un sistema de iconos personalizado.

## 1. Arquitectura de Astro Islands

El proyecto utiliza la arquitectura de **Astro Islands**, que permite combinar componentes de diferentes frameworks (Vue, React) en una misma página. Astro renderiza la mayor parte del HTML en el servidor (o en tiempo de compilación), enviando solo el JavaScript necesario para los componentes interactivos ("islas") al navegador.

## 2. Estructura de Componentes del Pie de Página

El pie de página ha sido refactorizado para ser modular, reutilizable y fácil de mantener. Su orquestación principal se realiza directamente en el componente `Footer.vue`.

-   **`src/components/vue/Footer.vue`**:

    -   **Rol:** Contenedor principal de Vue para el pie de página y orquestador de datos.
    -   **Responsabilidades:**
        -   Importa directamente todos los datos del pie de página desde `src/data/footer.ts`.
        -   Pasa los datos como props a sus componentes hijos (`FooterInfo.vue`, `FooterLinks.vue`, `FooterCopyright.vue`).
        -   Orquesta la disposición general de las secciones del pie de página.

-   **`src/components/vue/FooterInfo.vue`**:

    -   **Rol:** Muestra la información principal de la empresa (descripción, logo, redes sociales).
    -   **Responsabilidades:**
        -   Recibe `description` y `socials` como props.
        -   Renderiza el logo y los iconos de redes sociales directamente usando los componentes de icono importados.

-   **`src/components/vue/FooterLinks.vue`**:

    -   **Rol:** Muestra las secciones de enlaces (About Us, Services, etc.).
    -   **Responsabilidades:**
        -   Recibe `sections` (un array de objetos de sección) como prop.
        -   Utiliza un scoped slot (`default`) para que `Footer.vue` inyecte el componente `FooterLink.vue` para cada enlace, pasándole el objeto `link`.

-   **`src/components/vue/FooterLink.vue`**:

    -   **Rol:** Renderiza un único elemento de enlace del pie de página.
    -   **Responsabilidades:**
        -   Recibe un objeto `link` como prop.
        -   Contiene la lógica condicional para renderizar diferentes tipos de enlaces (normal, live chat, email, teléfono, dirección).
        -   Renderiza los iconos de contacto directamente usando los componentes de icono importados.

-   **`src/components/vue/FooterCopyright.vue`**:
    -   **Rol:** Muestra la información de derechos de autor y enlaces de políticas.
    -   **Responsabilidades:**
        -   Recibe `companyName` y `policyLinks` como props.
        -   Calcula el año actual dinámicamente.

## 3. Flujo de Datos

Los datos del pie de página están centralizados en `src/data/footer.ts`. Este archivo importa los componentes de icono generados por `unplugin-icons` y exporta constantes que contienen toda la información textual y de configuración (descripción, enlaces de redes sociales, secciones de enlaces, nombre de la empresa, enlaces de políticas).

El flujo de datos es unidireccional, desde `src/data/footer.ts` -> `Footer.vue` -> componentes hijos de Vue.

## 4. Sistema de Iconos Personalizado

Se ha implementado un sistema de iconos flexible que permite el uso de SVGs personalizados en cualquier componente, independientemente del framework.

-   **SVGs Personalizados:** Todos los archivos SVG se almacenan en `src/assets/icons/`.
-   **`unplugin-icons`**:
    -   **Rol:** Plugin de Vite que genera componentes de icono a partir de archivos SVG.
    -   **Responsabilidades:**
        -   Configurado en `astro.config.mjs` (sección `vite.plugins`) para reconocer la colección `custom` en `src/assets/icons/`.
        -   Genera componentes de Vue (y React) a partir de los SVGs, que pueden ser importados directamente en los archivos `.ts` y `.vue`.
-   **Uso de Iconos:** Los componentes de icono generados (ej. `i-custom-facebook`, `i-custom-logo`) se importan directamente en `src/data/footer.ts` y se asignan a las propiedades `icon` o `iconComponent` de los objetos de datos. Luego, los componentes Vue (`FooterInfo.vue`, `FooterLink.vue`) renderizan estos iconos usando la etiqueta `<component :is="..." />`.

## 5. Diagrama de Arquitectura

El siguiente diagrama ilustra la arquitectura de componentes y el flujo de datos del pie de página. Puedes visualizarlo usando una herramienta de renderizado D2.

[Ver diagrama en `docs/architecture.d2`](./architecture.d2)
