var tablero = new Array();
tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "o", "_"];
tablero[2] = ["_", "_", "_"];

function pinto_tablero() {
     //recorrer matriz y actualizar los valores de los inputs
     for (var i = 0; i <= 2; i++) {
          for (var j = 0; j <= 2; j++) {
               var id_casilla = "casilla_" + i + j;
               document.getElementById(id_casilla).value = tablero[i][j]; // para cada valor de la matriz, modifico el value del input
               if (tablero[i][j] == "o" || tablero[i][j] == "x") {
                    document.getElementById(id_casilla).disabled = true; // si ya esta ocupado, deshabilito el input
               }
          }
     }
}

function jugada() {
     // recojo la jugada del usuario, leo todos los inputs y los guardo en la matriz
     for (var i = 0; i <= 2; i++) {
          for (var j = 0; j <= 2; j++) {
               var id_casilla = "casilla_" + i + j;
               tablero[i][j] = document.getElementById(id_casilla).value;
          }
     }
     comprobar_ganador("x"); // compruebo si ha ganado el usuario.
     tirada_maquina(); // si no ha ganado, turno de la maquina
}

function tirada_maquina() {
     var jugada_i = Math.trunc(Math.random() * 3); //obtengo una posicion aletaoria ... 0, 1 o 2
     var jugada_j = Math.trunc(Math.random() * 3);
     if (tablero[jugada_i][jugada_j] == "_") {
          // si la posicion aleatoria esta libre ...
          tablero[jugada_i][jugada_j] = "o"; // la marco como jugada de maquina
          pinto_tablero(); // actualizo tablero
          comprobar_ganador("o"); // compruebo si ha ganado
     } else {
          tirada_maquina(); // si la posicion aleatoria esta ocupada, busco otro aleatorio llamando de nuevo a esta funcion
     }
}

function comprobar_ganador(jugador) {
     // jugador sera o "o" o "x"

     if (!comprobarLibre()) {
          //compruebo si quedan libres: combrobarLibre() devuelve un bool, por lo que lo puedo poner directamente en el if
          alert("Empate!!");
          location.reload();
     }

     //CONDICIONES DE VICTORIA:

     for (var i = 0; i <= 2; i++) {
          //compruebo filas
          if (
               tablero[i][0] == tablero[i][1] &&
               tablero[i][1] == tablero[i][2] &&
               tablero[i][2] == jugador
          ) {
               console.log("fila");
               alert("Ha ganado el jugador " + jugador);
               location.reload();
          }
     }
     for (var i = 0; i <= 2; i++) {
          //compruebo columna
          if (
               tablero[0][i] == tablero[1][i] &&
               tablero[1][i] == tablero[2][i] &&
               tablero[2][i] == jugador
          ) {
               console.log("columna");
               alert("Ha ganado el jugador " + jugador);
               location.reload();
          }
     }
     if (
          tablero[0][0] == tablero[2][2] &&
          tablero[1][1] == tablero[0][0] &&
          tablero[0][0] == jugador
     ) {
          console.log("diag1");
          alert("Ha ganado el jugador " + jugador);
          location.reload();
     }
     if (
          tablero[2][0] == tablero[0][2] &&
          tablero[1][1] == tablero[2][0] &&
          tablero[2][0] == jugador
     ) {
          console.log("diag2");
          alert("Ha ganado el jugador " + jugador);
          location.reload();
     }
}

function comprobarLibre() {
     // Para saber si se ha empatado:
     var tirada_libre = false; // supongo que no hay tiradas libres ...
     for (var i = 0; i <= 2; i++) {
          for (var j = 0; j <= 2; j++) {
               if (tablero[i][j] == "_") {
                    // si encuentro una libre cambio a true
                    tirada_libre = true;
               }
          }
     }
     return tirada_libre; // devuelvo el booleano
}
