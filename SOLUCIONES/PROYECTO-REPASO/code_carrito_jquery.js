var carrito=[];

$(document).ready(function(){

    console.log("jquery ok");
   
    $.ajax({
        url: 'php/todos_productos.php',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {

           respuesta.forEach(function(producto,index){
               var div_producto = "<div class='producto'><div>"+producto.nombre+"</div><img class='card-image' src='img/"+producto.foto+"'>"+producto.precio+"€<div><input id='cantidad_"+producto.id+"' class='unidades' type='number'><span id='"+producto.id+"'>+</span></div></div>";
               $("#items").append(div_producto);
               $("#"+producto.id).on("click",function(){
                                respuesta.find(producto => producto.id==this.id);
                                 anyado_carrito(producto);
               })
           });
        },
        error: function (xhr, status) {
            // código a ejecutar si la petición falla;     
            alert('Disculpe, existió un problema');
        }
    });

       //recibo el array de objetos
          //itero el array de objetos y los saco al DOM

});


function anyado_carrito(producto){ // para añadir elemento a carrito

    var cantidad = $("#cantidad_"+producto.id).val(); 
    var linea_carrito = { 'id':producto.id , 'nombre':producto.nombre, 'precio':producto.precio, 'cantidad':cantidad};
    //creo el objeto
    carrito.push(linea_carrito); //lo añado al array 
    $('#lista-carrito').append("<li>"+linea_carrito.nombre+" - "+linea_carrito.cantidad+" - "+linea_carrito.precio+" total:<span class='tot'>"+(linea_carrito.cantidad * linea_carrito.precio)+"</span> - <span>x</span></li>");
    //añado el elemento al ul del carrito
    var total=0; 
    $('.tot').each(function(indice){
        total += parseFloat($(this).text()); //calculo el total
    });
    $("#total").html(total);
  //Falta el boton de borrar elemento del carrito y tramitar pedido
}