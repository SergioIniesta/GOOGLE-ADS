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

Contacto público: sergioiniesta7@gmail.com. Falta comprobar la cuenta AdSense, verificar titularidad del dominio aceptado, completar los datos legales restantes, configurar una CMP certificada aplicable, instalar los códigos reales facilitados por AdSense y solicitar revisión. No hay garantía de aprobación, posicionamiento o ingresos. Las seis guías iniciales son una primera edición, no una promesa de contenido suficiente para AdSense.

## GitHub

Código subido a https://github.com/SergioIniesta/GOOGLE-ADS, rama `main`, mediante el remoto `github`. El repositorio de alojamiento Sites es independiente. Un push a GitHub no actualiza por sí solo la web publicada: es necesario publicar también la versión correspondiente mediante Sites. No incluir credenciales en código.

## Publicación y contenido

El alojamiento se gestiona con Sites y `.openai/hosting.json`. Acceso público autorizado por el titular el 20 de septiembre de 2026, conservando https://prisma-diario-sergi.info808423.chatgpt.site. No se realizan compras de dominio ni campañas de pago. La frecuencia editorial aceptada es de dos artículos nuevos y una actualización por semana; aún no existe una automatización programada. Antes de cada nueva publicación, verificar las fuentes y actualizar la fecha real de los artículos y del generador; no presentar material antiguo como noticia del día.

La foto y sus atribuciones constan en `src/assets/CREDITS.md`. Las capturas de comprobación quedan fuera de Git en `.sites-runtime/`.

Consulta `ESTRATEGIA.md` para el estudio de tráfico, escenarios de ingresos y plan editorial.
