var temporizador
$(document).ready(function () {
    console.log("jquery ok");
    cargo_preguntas();   // llamada ajax para cargar las preguntas
    $("#ok").on("click", function () {  // evcent handler del boton
        compruebo_preguntas()
    });
    $("#borrar").on("click", function () { // borrar todo
        $("#preguntas").empty(); // limpio articles
        $("#acertadas").empty();
        $("#tiempo").empty();
        cargo_preguntas(); // cargo preguntas de nuevo
        temporizar();
    });

    temporizar();



});

function compruebo_preguntas() {
    var contador_acertadas = 0;
    $.ajax({
        url: 'preguntas.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            respuesta.preguntas.forEach(function (pregunta, index) { // preguntas es un array. itero con preguntas y me gurado el index
                var correcta = pregunta.correcta;
                var elegida = $("input[name='" + index + "']:checked").val(); // para el input que estamos comprobando, me guardo el valor del radio que esta elegido (cheked)
                console.log(correcta + " - " + elegida);
                if (correcta == elegida) {
                    $("#pregunta" + index).css("background-color", "green");
                    contador_acertadas ++;
                } else {
                    $("#pregunta" + index).css("background-color", "red");
                }
                $("#acertadas").html("Acertadas :" + contador_acertadas);
                clearInterval(temporizador);//paro el temporizador
            })
        },
        error: function (xhr, status) {
            // código a ejecutar si la petición falla;     
            alert('Disculpe, existió un problema');
        }
    });
}

function cargo_preguntas() {
    $.ajax({
        url: 'preguntas.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            respuesta.preguntas.forEach(function (pregunta, index) {// preguntas es un array. itero con preguntas y me gurado el index
                $("#preguntas").append("<div id='pregunta" + index + "'>" + pregunta.pregunta + "</div>") // al div le doy un id con el index
                for (key in pregunta.respuesta) {  // respuestas almacenado como clave-valor
                    $("#preguntas").append("<input type='radio' name=" + index + " value=" + key + ">" + key + " = " + pregunta.respuesta[key] + "</input>")
                }                                         //para que el radio funcione bien, hay que darle el mismo name al grupo de respuestas
            });
        },
        error: function (xhr, status) {
            // código a ejecutar si la petición falla;     
            alert('Disculpe, existió un problema');
        }
    });
}

function temporizar() {
    var temp = 0;
    temporizador = setInterval(function () {   // creo el temporizador
        temp++;   // aumento el temp y lo saco por pantalla.
        $("#tiempo").html("Tiempo :" + temp);
    }, 100); // cada decima de segundo   
}
