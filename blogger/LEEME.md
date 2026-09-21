# Migración a Blogger — preparación

Estado: archivos preparados; todavía no se ha creado ni importado el blog. La sesión de Google requiere intervención del titular. No sustituir ni retirar la web anterior hasta comprobar la migración real.

## Contenido

`prisma-diario-import.xml` contiene seis entradas y cuatro páginas en formato Atom XML, con estado borrador y categorías. El XML está generado localmente, no es una copia de seguridad exportada por Google. Su aceptación debe comprobarse con la importación real antes de dar la migración por terminada. Si Blogger no lo admite, utilizar los diez archivos de `html/` en el modo HTML de su editor. No volver a importar sin comprobar primero posibles duplicados.

El generador es `node scripts/export-blogger.mjs`. No modifica `dist/` ni publica en Sites.

## Flujo pendiente

1. Iniciar sesión en Blogger con la cuenta de AdSense. Crear Prisma Diario y elegir una dirección blogspot.com que esté disponible. No hay una dirección reservada todavía.
2. En Configuración > Gestionar blog > Importar contenido, seleccionar el XML. Mantener desactivada la publicación automática durante la revisión.
3. Comprobar seis entradas y cuatro páginas, caracteres españoles, párrafos, etiquetas, fuentes y enlaces de correo. Publicar tras la comprobación. Configurar los enlaces permanentes antes de publicar, si Blogger permite editarlos.
4. Aplicar Contempo y añadir `prisma.css` mediante el personalizador. Comprobar portada y artículo en móvil y escritorio. No se ha validado todavía el CSS en el tema real.
5. En Diseño, añadir el gadget Páginas para Sobre Prisma, Contacto, Privacidad e Información del titular, y Etiquetas para las categorías. Conservar el aviso de cookies de Blogger.
6. Subir desde Blogger la fotografía de `src/assets/usb-c.webp` al artículo sobre USB-C, con el crédito y licencia de `src/assets/CREDITS.md`. No depender de la antigua web para alojar imágenes. La exportación de texto no incorpora imágenes externas.
7. Revisar Ingresos en Blogger y conectar la cuenta AdSense existente cuando lo permita. No crear una segunda cuenta AdSense. La disponibilidad depende de la elegibilidad que muestre Google.
8. Completar información legal y consentimiento antes de activar anuncios. Una dirección blogspot.com no garantiza la aprobación ni ingresos.
9. Una vez conocida y verificada la URL de Blogger, decidir la transición de la web anterior para evitar mantener dos publicaciones idénticas indexables.

## Fuentes oficiales

- https://support.google.com/blogger/answer/41387?hl=es
- https://support.google.com/blogger/answer/1227173?hl=es
- https://support.google.com/blogger/answer/176245?hl=es
- https://support.google.com/blogger/answer/1269077?hl=es

Frecuencia editorial acordada: dos artículos nuevos y una actualización por semana. No hay automatización programada ni anuncios activados.
