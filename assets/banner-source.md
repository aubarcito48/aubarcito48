# Fuente del banner animado

- Referencia elegida por mi: https://ar.pinterest.com/pin/981362575094503737/
- Pinterest la identifica como «Howl’s moving castle wallpaper pc gif».
- Video público asociado: https://v1.pinimg.com/videos/iht/expMp4/73/e3/45/73e345f9d334f51cad2509e6e97f85a6_720w.mp4
- Incorporado el 14 de noviembre de 2026.

`banner-cielo-nocturno.gif` es una conversión de un fragmento del video a 560 × 316,
10 fotogramas por segundo y 96 colores. El final se funde con el comienzo para
cerrar el bucle. El GIF se sirve desde este repositorio, sin depender de Pinterest
al cargar el perfil. El nombre y la presentación se mantienen como texto HTML
debajo de la imagen para conservar su legibilidad.

La conversión no atribuye la ilustración a Nahuel. El autor original y la licencia
no se pudieron identificar en el pin consultado; este archivo conserva la fuente
de referencia y no declara una licencia nueva sobre esa obra.

## Composición de perfil dentro de la animación

El 24 de noviembre de 2026 se preparó una variante con el nombre y la presentación dentro del GIF, siguiendo la estructura de `idea.png` proporcionada por el usuario. La identidad, las tecnologías y los enlaces provienen del README existente; no se copiaron los datos de la persona de referencia.

- `banner-profile-overlay.png`: capa gráfica transparente generada con la herramienta integrada imagegen.
- `banner-perfil-animado.gif`: composición final de 1120 × 480, 82 fotogramas de 100 ms, bucle infinito. Se mantiene el movimiento original del cielo; el texto es estático para facilitar su lectura.
- `banner-perfil-preview.png`: vista previa del primer fotograma.
- `banner-generation.json`: prompt de la capa seleccionada y parámetros de composición.
- `../scripts/build-profile-banner.cjs`: script de composición y exportación. Requiere Node.js y sharp; admite como primer argumento una ruta al módulo sharp si no está instalado en el entorno del repositorio.

El fondo original no se reemplazó ni se regeneró. Se conserva `banner-cielo-nocturno.gif` con su fuente y limitaciones de licencia indicadas arriba. Se aplicó una capa oscura suave para mantener el contraste y se incorporó la nueva composición gráfica en los fotogramas. La nueva variante pesa aproximadamente 2,8 MB.

Ambos README locales utilizan el nuevo banner sin altura fija, para conservar su proporción. Las direcciones dentro del GIF son texto gráfico; los enlaces de contacto del cuerpo del README siguen siendo clicables.
