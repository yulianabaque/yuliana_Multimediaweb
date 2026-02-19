1.
Me di cuenta de que las tarjetas de emociones no se podían usar con el teclado.
Estaban hechas con <div> y por eso no podía llegar a ellas con la tecla TAB.

Solución:
Cambié los <div> por <button> para que se puedan seleccionar con TAB y activar con Enter.


2.
Me di cuenta de que el foco del teclado casi no se veía cuando usaba TAB.
Añadí un estilo :focus con un borde más visible para que se vea claramente dónde estoy navegando.


3.
Me di cuenta de que cuando cambiaba la emoción, el texto se actualizaba pero no se anunciaba para usuarios que usan lector de pantalla.
Para solucionarlo añadí aria-live="polite" al mensaje dinámico para que los cambios se anuncien automáticamente.


4.
La imagen siempre tenía el mismo alt aunque cambiara la emoción.
Lo solucioné haciendo que el atributo alt cambie dinámicamente según la emoción seleccionada.

5.
Añadí la etiqueta <main> para definir claramente el contenido principal de la página y mejorar la estructura semántica.

6.
Cuando cambiaba la emoción, el fondo cambiaba de color pero el texto no siempre se veía bien, sobre todo cuando el fondo era claro.
Lo solucioné asegurando desde CSS que el texto tenga siempre suficiente contraste, especialmente en fondos claros y en las tarjetas.

También cambié el color del texto dentro de las tarjetas porque era negro sobre fondo oscuro y casi no se veía.

7.
Añadí un atributo aria-pressed a los botones de reproducir y pausar para indicar cuál está activo en cada momento. Así, si alguien usa lector de pantalla, puede saber si la música está reproduciéndose o está en pausa.