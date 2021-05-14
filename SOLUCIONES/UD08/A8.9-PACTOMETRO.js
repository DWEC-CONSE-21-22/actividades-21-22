var array_partidos;
$(document).ready(function(){
  console.log("jquery ok");
  cargo_select();
  $("#partido").on("change",function(){
                  anyado_partido($(this).val());
  });

});

function cargo_select(){
    $.ajax({
        url: 'escanyos.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
           array_partidos=respuesta.partidos;
           array_partidos.forEach(function(partido,index) {
               $("#partido").append("<option  value='"+index+"'>"+partido.nombre+"</option>");
           });
        },
        error: function (xhr, status) {
            // código a ejecutar si la petición falla;     
            alert('Disculpe, existió un problema');
        }
    });

}

function anyado_partido(indice){
    var partido = array_partidos[indice];
    var $div_partido = $("<div>"+partido.nombre+"</div>");
    $div_partido.css("display","inline-block");
    $div_partido.css("width", partido.escanyos+"px" );
    $div_partido.css("background-color", partido.color );
    $("#panel").append($div_partido);

}