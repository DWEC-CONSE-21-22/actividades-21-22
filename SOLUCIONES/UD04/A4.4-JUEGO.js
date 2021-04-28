var idTemporitzador;
var actual=1;
var tempTotal;

var afegirObjectiu = function (id) {
     var node = document.getElementById(id);
     node.className = "objetivo";
     node.addEventListener("click", guanyar);
};

var eliminarObjectiu = function (id) {
     var node = document.getElementById(id);
     node.className = "";
     node.removeEventListener("click", guanyar);
};

var guanyar = function () {
     eliminarObjectiu(actual);
     clearTimeout(idTemporitzador);
     alert("Has guanyat!");
};

function getEnterAleatori(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
}

var canviarCercle = function () {
     if (actual > 0) {
          eliminarObjectiu(actual);
     }

     actual = getEnterAleatori(1, 9);
     afegirObjectiu(actual);

     idTemporitzador = setTimeout(canviarCercle, 500);
};

var inicialitzar = function () {
    console.log("empiezo");
     canviarCercle();
};

