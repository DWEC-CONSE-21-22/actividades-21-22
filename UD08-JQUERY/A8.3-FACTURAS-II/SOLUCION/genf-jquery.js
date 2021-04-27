$(document).ready(function(){
    console.log("jquery ok");
///////////////////////////
    $.ajax({
       
        url : 'productos.json',
        type : 'GET',
        dataType : 'json',
        success : function(respuesta) {
           console.log(respuesta);
            for(var i in respuesta.producto){ // for(i=0; i<respuesta.lenght; i++)
                $("#producto").append("<option value='"+respuesta.producto[i].precio+"'>"+respuesta.producto[i].name+"</option>");
            }
        },
        error : function(xhr, status) {
            alert('Disculpe, existió un problema');
        }    
    });
//////////////////////////////
    $("#producto").change(function(){
        $("#puni").val($("#producto :selected").val());
    });
///////////////////////////////////////
    $("#anyadir").click(function(){
        var nombre = $("#producto :selected").text()
        var cantidad=$("#cantidad").val();
        var puni=+$("#producto :selected").val()
        $("#tabla tbody").append("<tr><td>"+nombre+"</td><td>"+cantidad+"</td><td>"+puni+"</td><td class='ptotal' >"+cantidad * puni+ "</td><td><button class='borrar'>Borrar</button></td></tr>");
       
        $(".borrar").click(function(){
           $(this).parent().parent().remove();      
            actualizar();
        });

        actualizar();
    });
});

function actualizar(){

    var total=0;
    $(".ptotal").each(function(){
        total+=parseFloat($(this).text());
    });
    $("#base").text(total);
    $("#iva").text(total*0.21);
    $("#total").text(total*1.21);




}

