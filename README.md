# Prisma Diario

Portal editorial en español sobre tecnología cotidiana, consumo, seguridad y ahorro digital. Titular indicado por el usuario: Sergio Iniesta del Hoyo.

## Editar con Visual Studio Code

Abrir esta carpeta. Node.js 22 o superior; el sitio no requiere instalar paquetes para generarse.

- `node scripts/build.mjs`: genera las páginas estáticas en `dist/`.
- `node scripts/check.mjs`: comprueba enlaces internos, imágenes, metadatos y datos estructurados.
- `node scripts/serve.mjs`: vista previa en http://127.0.0.1:4187.

Editar artículos en `content/articles.mjs`, diseño en `src/style.css` y datos del titular, dominio y publicidad en `site.config.mjs`. Los archivos de `dist/` se generan: no editarlos directamente. Los artículos son HTML completo, legibles sin JavaScript.

## Estado de la monetización

No se han activado anuncios, analítica ni formularios. `adsEnabled` se mantiene en `false`; el generador impide activarlo sin una implementación revisada. Un ID `pub-` válido solo genera `ads.txt`, no carga anuncios ni solicita aprobación automáticamente.

Falta comprobar la cuenta AdSense, verificar titularidad del dominio aceptado, completar datos legales y contacto, configurar una CMP certificada aplicable, instalar los códigos reales facilitados por AdSense y solicitar revisión. No hay garantía de aprobación, posicionamiento o ingresos. Las seis guías iniciales son una primera edición, no una promesa de contenido suficiente para AdSense.

## GitHub

Proyecto compatible con Git y editable en VS Code. No se ha conectado la cuenta personal de GitHub: el acceso automatizado a Firefox quedó bloqueado por la integración. El remoto de Sites, si está configurado, es independiente de GitHub. Para guardar una copia en GitHub, crear un repositorio vacío desde la cuenta del titular y añadirlo como segundo remoto; no incluir credenciales en código ni sustituir el remoto de Sites.

## Publicación y contenido

El alojamiento de esta entrega se gestiona con Sites y `.openai/hosting.json`. No se realizan compras de dominio ni campañas de pago. El sitio no obtiene ni publica noticias automáticamente. Antes de cada nueva publicación, verificar las fuentes y actualizar la fecha real de los artículos y del generador; no presentar material antiguo como noticia del día.

La foto y sus atribuciones constan en `src/assets/CREDITS.md`. Las capturas de comprobación quedan fuera de Git en `.sites-runtime/`.

Consulta `ESTRATEGIA.md` para el estudio de tráfico, escenarios de ingresos y plan editorial.
