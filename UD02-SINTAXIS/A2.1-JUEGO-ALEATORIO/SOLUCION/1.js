
var aleatori = Math.floor(Math.random() * 100);
console.log(aleatori);
var numUser=null;
var contador = 0;
do {
    numUser=prompt("introduce un numero");
    var inumUser = parseInt(numUser);
    console.log(inumUser);
    if (inumUser < aleatori) {
        console.log("El num introducido es menor");
    } else if (inumUser > aleatori) {
        console.log("El numero introducidoes mayor");
    }
    contador++;
} while (inumUser != aleatori)

alert("Has ganado");
document.write("<h2>Has necesitado " + contador + " intentos</h2>")


