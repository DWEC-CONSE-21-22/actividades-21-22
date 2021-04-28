# A2.3 Tres en raya
Vamos a realizar una aplicación web con el juego del tres en raya

En el html que os paso tendremos 9 casillas con entrada de texto y un botón para cambiar de turno

Cada casilla pude tener tres valores:

* '_' si esta vacía
* 'o' jugada de la máquina
* 'x' jugada del usuario

La partida siempre empieza con la casilla del centro como primera jugada de la máquina.

El usuario escribe una x en la casilla elegida y pulsa al botón de cambio de turno.

La máquina, de manera aleatoria realiza su tirada y vuelve a ser el turno del usuario.

Si en algunas de las tiradas un jugador hace tres en raya, aparece el alert " Ha ganado *jugador* " y recarga la página ( location.reload() ) . Si no gana nadie, después de la última jugada aparece el alert " Empate !!" y recarga la página.

Las casillas con tirada,  la casilla se deshabilita para no poder modificarla.

El código javascript ha de estar separado del html, recuerda utilizar funciones para facilitar el trabajo.

Pistas:

El tablero se almacena en una matriz, la puedes definir asi:

```javascript
var tablero = new Array; //almaceno las jugadas
tablero[0] = ["_","_","_"];
tablero[1] = ["_","o","_"]; // empieza la máquina con el centro
tablero[2] = ["_","_","_"];

```

Ten en cuenta las llamadas a funciones js desde el html:

```javascript
<body onload="pinto_tablero()"> <!-- cuando carga la pagina llamo a funcion pinto_tablero() -->
<button onclick="jugada()">Fin turno</button>
```


