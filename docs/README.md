# Documentación del Proyecto

Este directorio contiene la documentación técnica y de diseño del proyecto.

## Generación de Diagramas D2

Los diagramas de arquitectura y flujo se generan automáticamente a partir de archivos D2.

### Cómo funciona:

1.  **Archivos D2:** Los diagramas se definen en archivos con extensión `.d2` (ej. `docs/search-site/search_flow.d2`).
2.  **Script de Generación:** Un script de shell (`docs/generate-d2.sh`) se encarga de procesar todos los archivos `.d2` encontrados en el directorio `docs/` y sus subdirectorios.
3.  **Salida:** Por cada archivo `.d2`, se genera un archivo `.svg` correspondiente en la misma ubicación.
4.  **Uso en Markdown:** Los archivos de documentación Markdown (`.md`) referencian directamente estos archivos `.svg` generados.

### Cómo generar los diagramas:

Para generar o actualizar todos los diagramas D2 del proyecto, ejecuta el siguiente comando desde la raíz del proyecto:

```bash
pnpm run docs-d2
```

Asegúrate de tener la herramienta `d2` instalada en tu entorno. Si no la tienes, consulta la documentación oficial de D2 para su instalación: [https://d2lang.com/tour/install](https://d2lang.com/tour/install)
