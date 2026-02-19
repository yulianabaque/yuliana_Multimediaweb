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