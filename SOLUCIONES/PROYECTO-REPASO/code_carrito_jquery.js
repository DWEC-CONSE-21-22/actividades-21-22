var carrito=[];

$(document).ready(function(){

    console.log("jquery ok");
   
    $.ajax({
        url: 'php/todos_productos.php',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
           console.log(respuesta);
           respuesta.forEach(function(producto,index){
               var div_producto = "<div class='producto'><div>"+producto.nombre+"</div><img class='card-image' src='img/"+producto.foto+"'>"+producto.precio+"€<div><input class='unidades' type='number'><span id='"+producto.id+"'>+</span></div></div>";
               $("#items").append(div_producto);
               $("#"+producto.id).on("click",function(){
                                 console.log(this.id);
                                 respuesta.find(producto => producto.id==this.id);
                                 console.log(producto);
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