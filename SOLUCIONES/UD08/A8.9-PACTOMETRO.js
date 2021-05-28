var array_partidos=[]; //array donde guardo el array de partidos
var elegidos=[];
var total=0; //alamceno suma de escaños

$(document).ready(function(){
  console.log("jquery ok");
  cargo_partidos();  // cargo los partidos en el select
  $("#partido").on("change",function(){  
                  anyado_partido($(this).val()); //cuando selecciono uno ...
  });

});

function cargo_partidos(){  //llamada ajax
    $.ajax({
        url: 'escanyos.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
           array_partidos=respuesta.partidos;
           array_partidos.forEach(function(partido,index) { //para cada partido un option
            $("#partido").append("<option value='"+index+"'>"+partido.nombre+"</option>");
        });                             //en el value guardo la posicion del array
        },
        error: function (xhr, status) {
            // código a ejecutar si la petición falla;     
            alert('Disculpe, existió un problema');
        }
    });
}


function anyado_partido(indice) {

    if (elegidos.indexOf(indice) == -1) {  //compruebo si esta añadido
        var partido = array_partidos[indice];
        var $div_partido = $("<div id='" + indice + "'>" + partido.nombre + "</div>");
        $div_partido.css("display", "inline-block");
        $div_partido.css("width", partido.escanyos + "px");
        $div_partido.css("background-color", partido.color);
        $("#panel").append($div_partido);
        total += partido.escanyos;
        $("#total").html("Total =" + total);
        $("#" + indice).on("click", function () { // para borrar
            $("#" + indice).remove();
            total -= partido.escanyos;
            $("#total").html("Total =" + total);
            for(var i in elegidos){  //borra elemento de elegidos
                if(elegidos[i]==indice){
                    elegidos.splice(i,1);
                }
            }
        })
        $("#" + indice).on("mouseover", function () {
            $("#escanyos_partido").html("Escaños =" + partido.escanyos);
        })
        $("#" + indice).on("mouseout", function () {
            $("#escanyos_partido").empty();
        })
        elegidos.push(indice);
    }



}

