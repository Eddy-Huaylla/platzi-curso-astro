---
title: "Testing en Astro"
pubDate: 2025-09-21
description: "Astro se integra con herramientas de testing como Vitest, Jest y Playwright."
image: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["astro", "testing", "quality"]
---

## `astro add vitest`

La forma más fácil de empezar con el testing en Astro es usando la integración oficial de Vitest.

```bash
npx astro add vitest
```

Esto instalará Vitest y creará un archivo de configuración `vitest.config.ts`.

### Escribiendo Tests

Puedes escribir tests para tus componentes, funciones de utilidad y endpoints de API.

```typescript
// src/utils/dates.test.ts
import { expect, test } from 'vitest';
import { formatMyDate } from './dates';

test('formatea la fecha correctamente', () => {
  const date = new Date(2025, 8, 21);
  expect(formatMyDate(date)).toBe('21 de septiembre de 2025');
});
```

Ejecuta tus tests con `npm run test`. El testing es crucial para mantener la calidad y estabilidad de tu proyecto a medida que crece.