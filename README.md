# Curso de Astro de Platzi — Guía Detallada

Este proyecto está preparado para desarrollar con **Astro** usando **Docker**, **VS Code Dev Containers** y un **Nginx** que hace _reverse proxy_ sobre HTTPS con un dominio local: `dev.curso-astro.com`.

> **Objetivo de esta guía**
> Que puedas clonar el repo, abrirlo en VS Code, levantar el entorno (con o sin Docker) y navegar en `https://dev.curso-astro.com` sin advertencias de certificado, con **HMR** funcionando.

---

## Tabla de Contenido

1. [Requisitos Previos](#requisitos-previos)
2. [Arquitectura del Entorno](#arquitectura-del-entorno)
3. [Dominios, Puertos y Certificados](#dominios-puertos-y-certificados)
4. [Configuración de Hosts](#configuración-de-hosts)
5. [Instalación de Certificados SSL (detallado)](#instalación-de-certificados-ssl-detallado)
    - [Windows (MMC)](#windows-mmc)
    - [Windows (desde el navegador)](#windows-desde-el-navegador)
    - [macOS (Acceso a Llaveros)](#macos-acceso-a-llaveros)
    - [Linux (Debian/Ubuntu)](#linux-debianubuntu)
    - [Firefox (almacén propio)](#firefox-almacén-propio)
    - [Verificación por línea de comandos](#verificación-por-línea-de-comandos)
6. [Configuración de Astro/Vite](#configuración-de-astrovite)
7. [Ejecución del Proyecto](#ejecución-del-proyecto)
    - [A) Desarrollo local **sin Docker**](#a-desarrollo-local-sin-docker)
    - [B) Desarrollo con **VS Code Dev Containers**](#b-desarrollo-con-vs-code-dev-containers)
    - [C) Desarrollo con **Docker Compose**](#c-desarrollo-con-docker-compose)
8. [Configuración de Nginx (reverse proxy + websockets)](#configuración-de-nginx-reverse-proxy--websockets)
9. [Estructura de Carpetas](#estructura-de-carpetas)
10. [Scripts de npm/pnpm](#scripts-de-npmpnpm)
11. [Solución de Problemas](#solución-de-problemas)
12. [FAQ](#faq)

---

## Requisitos Previos

✅ **Sistema Operativo**

-   **Windows 10/11** con **WSL2** instalado (recomendado) o nativo sin WSL.
-   **macOS** (Intel o Apple Silicon) o **Linux**.

✅ **Docker**

-   **Docker Desktop** en Windows/macOS, o Docker Engine en Linux.
-   **Docker Compose** (v2 o integrado en Docker Desktop).

✅ **Editor**

-   **Visual Studio Code**.
-   Extensiones:
    -   **WSL** (si usas Windows + WSL).
    -   **Dev Containers** (para abrir el proyecto en contenedor).

✅ **Node.js + pnpm** (solo si vas a correr **sin** Docker)

-   Node.js **>=18** (recomendado LTS actual).
-   **pnpm** instalado globalmente: `npm i -g pnpm`.

> Si trabajas **solo** con Dev Containers/Docker, no necesitas instalar Node/pnpm en tu host.

---

## Arquitectura del Entorno

```
┌───────────────────────────────────────────┐
│ Navegador                                 │
│  https://dev.curso-astro.com :443 (HTTPS) │
└───────────────────────────────────────────┘
                  │
                  ▼
┌───────────────────────────────────────────┐
│ Nginx (contenedor)                        │
│  TLS termina aquí (certs en server/certs) │
│  Proxy → http://app:4321                  │
│  WS/HMR → /vite-hmr                       │
└───────────────────────────────────────────┘
                  │ (red interna Docker)
                  ▼
┌───────────────────────────────────────────┐
│ Astro Dev Server (contenedor "app")       │
│  host: 0.0.0.0, port: 4321                │
│  Vite: allowedHosts + HMR configurado     │
└───────────────────────────────────────────┘
```

---

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías clave:

-   **Astro**: El framework web para construir sitios rápidos y modernos.
-   **HyperUI**: Una colección de componentes de interfaz de usuario (UI) de código abierto y listos para usar, construidos con Tailwind CSS. Puedes encontrar más información en [https://www.hyperui.dev/](https://www.hyperui.dev/).
-   **Docker / VS Code Dev Containers**: Para un entorno de desarrollo consistente y aislado.
-   **Nginx**: Como proxy inverso para manejar HTTPS y el enrutamiento local.

---

## Dominios, Puertos y Certificados

-   **Dominio local**: `dev.curso-astro.com` → apunta a `127.0.0.1` (archivo `hosts`).
-   **HTTPS**: expuesto por **Nginx** en el puerto **443** del host.
-   **Astro dev**: corre en `http://0.0.0.0:4321` (dentro del contenedor/app). Nginx le hace _proxy_.
-   **Certificados**: ubicados en `server/certs/`:
    -   `Localhost_Root_Certification_Authority.crt` (raíz)
    -   `Localhost_Intermediate_Certification_Authority.crt` (intermedio)
    -   `curso-astro.com.crt` y `curso-astro.com.key` (sitio)

> **Importante**: debes **importar** los certificados **Raíz** e **Intermedio** en tu sistema/navegador para evitar advertencias.

---

## Configuración de Hosts

Agrega esta línea en tu archivo de hosts del **host** (no dentro del contenedor):

```
127.0.0.1 dev.curso-astro.com
```

-   **Windows**: `C:\Windows\System32\drivers\etc\hosts` (editor como administrador)
-   **macOS/Linux**: `/etc/hosts` (requiere `sudo`)

---

## Instalación de Certificados SSL (detallado)

> Usa **SIEMPRE** los certificados incluidos en `server/certs/`. Si caducan o necesitas regenerarlos, puedes usar herramientas como `mkcert` (fuera del alcance de esta guía), manteniendo los mismos nombres de archivo.

### Windows (MMC)

1. Presiona `Win + R` → escribe `mmc` → Enter.
2. **Archivo → Agregar o quitar complemento** → selecciona **Certificados** → **Cuenta de equipo** → **Siguiente** → **Equipo local** → **Finalizar** → **Aceptar**.
3. En **Certificados (equipo local)**:
    - **Entidades de certificación raíz de confianza → Certificados** → clic derecho **Todas las tareas → Importar** → importa `Localhost_Root_Certification_Authority.crt`.
    - **Entidades de certificación intermedias → Certificados** → importa `Localhost_Intermediate_Certification_Authority.crt`.
4. Cierra MMC y guarda si te lo pide.

### Windows (desde el navegador)

-   Chrome/Edge: **Configuración → Privacidad y seguridad → Seguridad → Administrar certificados**.
-   Importa **Raíz** en _Autoridades de certificación raíz de confianza_ y **Intermedio** en _Entidades de certificación intermedias_.

### macOS (Acceso a Llaveros)

1. Abre **Acceso a Llaveros**.
2. Selecciona el llavero **Sistema**.
3. **Archivo → Importar ítems…** y elige cada `.crt`.
4. Busca los certificados importados → doble clic → **Confiar** → **Al usar este certificado: Confiar siempre**.

### Linux (Debian/Ubuntu)

```bash
sudo cp server/certs/Localhost_Root_Certification_Authority.crt /usr/local/share/ca-certificates/
sudo cp server/certs/Localhost_Intermediate_Certification_Authority.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Firefox (almacén propio)

1. **Ajustes → Privacidad y seguridad → Certificados → Ver certificados → Autoridades**.
2. **Importar** cada `.crt` y marca **Confiar en esta CA para identificar sitios web**.

### Verificación por línea de comandos

-   **curl** (fuerza resolución al loopback):

    ```bash
    curl --resolve dev.curso-astro.com:443:127.0.0.1 -I https://dev.curso-astro.com
    ```

    Debe responder con `HTTP/2 200` (o `301/302` según tu config) **sin** errores de certificado.

-   **openssl** (inspección del cert):
    ```bash
    openssl s_client -connect dev.curso-astro.com:443 -servername dev.curso-astro.com </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates
    ```

---

## Configuración de Astro/Vite

Archivo `astro.config.mjs` (ejemplo recomendado):

```js
// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	server: {
		host: true, // expone 0.0.0.0 dentro del contenedor
		port: 4321,
	},
	vite: {
		server: {
			// Vite bloqueará hosts desconocidos: permite el dominio local
			allowedHosts: ["dev.curso-astro.com"],
			// HMR detrás de proxy HTTPS:
			hmr: {
				host: "dev.curso-astro.com",
				protocol: "wss", // wss porque Nginx sirve HTTPS
				clientPort: 443,
			},
		},
	},
});
```

> Si ves un error tipo **“Blocked request. This host (\"dev.curso-astro.com\") is not allowed”**, asegúrate de tener `allowedHosts` configurado como arriba.

---

## Ejecución del Proyecto

### A) Desarrollo local **sin Docker**

1. Instala dependencias:
    ```bash
    pnpm install
    ```
2. Levanta el servidor de desarrollo:
    ```bash
    pnpm run dev
    ```
3. Accede por **Nginx** (si lo estás usando) a `https://dev.curso-astro.com`.
    - Si **no** usas Nginx, entra directo a `http://localhost:4321`.

### B) Desarrollo con **VS Code Dev Containers**

1. Abre la carpeta del proyecto en VS Code.
2. VS Code detectará `.devcontainer/` → **Reopen in Container**.
3. Al terminar el build, dentro del contenedor:
    ```bash
    pnpm install   # si no se ejecutó automáticamente
    pnpm run dev
    ```
4. Accede a `https://dev.curso-astro.com`.

### C) Desarrollo con **Docker Compose**

Levanta **Nginx** + **app** con un solo comando:

```bash
docker compose up -d --build
```

-   Verifica contenedores:
    ```bash
    docker ps
    ```
-   Apaga el entorno:
    ```bash
    docker compose down
    ```

> Si el puerto 443 está ocupado en tu host, consulta la sección **Solución de Problemas**.

---

## Configuración de Nginx (reverse proxy + websockets)

Ejemplo de `server` (resumen):

```nginx
server {
  listen 443 ssl http2;
  server_name dev.curso-astro.com;

  ssl_certificate     /etc/nginx/certs/curso-astro.com.crt;
  ssl_certificate_key /etc/nginx/certs/curso-astro.com.key;

  # Ajustes base recomendados
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;

  location / {
    proxy_pass http://app:4321;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_http_version 1.1;
  }

  # WebSocket para HMR de Vite (ruta por defecto)
  location /vite-hmr {
    proxy_pass http://app:4321/vite-hmr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_http_version 1.1;
  }
}
```

> Ajusta las rutas si tu configuración de Vite difiere. La clave es **habilitar Upgrade** y **HTTP/1.1** para el _websocket_.

---

## Estructura de Carpetas

```
.
├─ .devcontainer/
│  ├─ devcontainer.json
│  └─ Dockerfile
├─ server/
│  ├─ certs/
│  │  ├─ Localhost_Root_Certification_Authority.crt
│  │  ├─ Localhost_Intermediate_Certification_Authority.crt
│  │  ├─ curso-astro.com.crt
│  │  └─ curso-astro.com.key
│  └─ nginx.conf
├─ src/
│  └─ ... (código de Astro)
├─ docker-compose.yml
├─ astro.config.mjs
├─ package.json
└─ pnpm-lock.yaml
```

---

## Scripts de npm/pnpm

-   `pnpm install` → instala dependencias.
-   `pnpm run dev` → inicia el servidor de desarrollo.
-   `pnpm run build` → construye para producción (carpeta `dist/`).
-   `pnpm run preview` → previsualiza `dist/` localmente.

---

## Solución de Problemas

### 1) **Puerto 443 en uso**

**Síntoma**: Docker/Nginx no levantan; mensajes como _“address already in use”_.

-   **Windows (PowerShell Admin):**

    ```powershell
    netstat -aon | findstr :443
    # identifica el PID y luego
    tasklist /FI "PID eq <PID>"
    ```

    Cierra/para el servicio en conflicto (IIS, VPNs, proxies empresariales, etc.).

-   **WSL/Linux:**
    ```bash
    sudo ss -ltnp | grep :443
    ```

> Alternativa: cambia el mapeo a `8443:443` en `docker-compose.yml` y navega `https://dev.curso-astro.com:8443` (recuerda ajustar `clientPort` de HMR si cambias el puerto externo).

### 2) **“Blocked request. This host (… ) is not allowed.”**

Asegúrate de tener en `astro.config.mjs`:

```js
vite: {
	server: {
		host: '0.0.0.0',
		port: 4321,
		allowedHosts: ["dev.curso-astro.com"];
	}
}
```

Y accede **siempre** usando el dominio configurado, no la IP directa.

### 3) **HMR no funciona por HTTPS**

-   Verifica `vite.server.hmr` → `host`, `protocol: 'wss'`, `clientPort: 443`.
-   Confirma que Nginx tenga el bloque `location /vite-hmr` con `Upgrade` y `Connection upgrade`.
-   Abre la consola del navegador → revisa errores de _websocket_ y certificado.

### 4) **El navegador no confía en el certificado**

-   Repite la importación de **Raíz** e **Intermedio** en el almacén correcto (equipo/sistema, no usuario si aplica).
-   En macOS, en Acceso a Llaveros, marcar **Confiar siempre**.
-   En Linux, ejecuta `sudo update-ca-certificates`.
-   En Firefox, importa en **Autoridades** y marca **Confiar**.

### 5) **502/504 desde Nginx**

-   ¿El contenedor `app` está arriba? `docker ps`.
-   ¿`app` escucha en `0.0.0.0:4321`? revisa `server.port`/`server.host` en `astro.config.mjs`.
-   Verifica la red de Docker: `docker inspect <nginx>` y `docker inspect <app>` para confirmar que comparten red.

### 6) **WSL: la resolución de `dev.curso-astro.com` no llega al contenedor**

-   Asegura que editaste el `hosts` en **Windows host** (no en WSL).
-   Si usas `curl` desde WSL, añade `--resolve dev.curso-astro.com:443:127.0.0.1`.

### 7) **Caché/estado del contenedor**

-   Forzar rebuild:
    ```bash
    docker compose build --no-cache
    docker compose up -d
    ```

---

## FAQ

**¿Es obligatorio `allowedHosts`?**

-   Si accedes con un **dominio personalizado** (`dev.curso-astro.com`) al **dev server** detrás de proxy, Vite puede bloquear la petición por seguridad. Define `allowedHosts` con el dominio para evitar el bloqueo.

**¿Puedo trabajar sin Nginx?**

-   Sí. Ejecuta `pnpm run dev` y entra en `http://localhost:4321`. HMR funcionará en HTTP. Para probar HTTPS y el dominio, usa Nginx.

**¿Qué pasa si cambio el puerto externo (443 → 8443)?**

-   Actualiza el mapeo del puerto en Docker y `hmr.clientPort` en `astro.config.mjs`. Accede con `https://dev.curso-astro.com:8443`.

**¿Cómo previsualizo el build de producción?**

-   `pnpm run build` y luego `pnpm run preview`. Puedes crear otro bloque `server {}` en Nginx que sirva la carpeta `dist/` si lo deseas.

---
