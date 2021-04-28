var compra = ["Manzana", "Platano", "Pera"];

function cargarArray() {
     var html_lista = "";
     for (i = 0; i < compra.length; i++) {
          html_lista += "<li>" + compra[i] + "</li>";
     }
     document.getElementById("lista").innerHTML = html_lista;
}

function anyadir() {
     compra.push(document.getElementById("nuevo").value);
     cargarArray();
     document.getElementById("nuevo").value = "";
}

function borrar() {
     var posicion_borrar = document.getElementById("borrar").value - 1;
     console.log(compra);
     var borrado = compra.splice(posicion_borrar, 1);
     console.log("Elemento borrado: " + borrado);
     cargarArray();
     document.getElementById("borrar").value = "";
}
