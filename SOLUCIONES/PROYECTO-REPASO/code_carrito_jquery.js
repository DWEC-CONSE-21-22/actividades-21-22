//variables globales, array objetos 'linea de pedido'
var carrito = [];


$(document).ready(function () {   //cuando carga la pagina ....
     console.log("jquery ok");

     listado_productos(); // lo primero que hago es recuperar todos los productos
     
     //gestion de los botones
     $("#tramitar").on("click", function () {
          tramitarPedido();
     });

     $("#borrar").on("click", function () {
          vaciarCarrito();
     });
});


function listado_productos() {  //para listar productos, llamda ajax y con la respuesta monto el dom:
     $.ajax({
          url: "php/todos_productos.php",
          type: "GET",
          dataType: "json",
          success: function (respuesta) {
               //recibo el array de objetos
               //itero el array de objetos y los saco al DOM
               respuesta.forEach(function (producto, index) {
                    var div_producto =
                         "<div class='producto'><div>" +
                         producto.nombre +
                         "</div><img class='card-image' src='img/" +
                         producto.foto +
                         "'>" +
                         producto.precio +
                         "€<div><input id='cantidad_" + // id='cantidad_[id]' para recuperar lo elegido
                         producto.id +
                         "' class='unidades' type='number'>  <span id='" +  //class='unidades' para borrar el input // id='[id]' en el + para saber que añadir
                         producto.id +
                         "'>+</span></div></div>";
                    $("#items").append(div_producto); // lo añado al dom
                    $("#" + producto.id).on("click", function () {  // gestion de cuando hago clik en el + de un determinado product 
                         respuesta.find((producto) => producto.id == this.id); // busco el prodcuto  // recupero el id con this.id

                         var objeto_producto = {  // creo el objeto del producto que voy a añadir al carrito
                              id: producto.id,
                              nombre: producto.nombre,
                              precio: producto.precio,
                         };
                         anyado_carrito(objeto_producto); // lo añado al carrito, paso el objeto
                    });
               });
          },
          error: function (xhr, status) {
               // código a ejecutar si la petición falla;
               alert("Disculpe, existió un problema");
          },
     });
}

function anyado_carrito(producto) {  // recibo el objeto
     // para añadir elemento a carrito

     var cantidad = $("#cantidad_" + producto.id).val();  //recupero cantidad del input
     var linea_carrito = {   //para la linea del carrito,creo otro objeto con el producto con su precio y la cantidad
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: cantidad,
     };
     //creo el objeto
     carrito.push(linea_carrito); //lo añado al array del carrito
     $("#lista-carrito").append( // lo saco al dom, añado el elemento al ul del carrito
          "<li>" +
               linea_carrito.nombre +
               " - " +
               linea_carrito.cantidad +
               " - " +
               linea_carrito.precio +
               " total:<span>" +
               (linea_carrito.cantidad * linea_carrito.precio).toFixed(2) +  //redondeo la multiplicacion
               "</span> - <span class='borrar_" +  // al boton de borrar le pongo una clase porque pueden haber varias lineas con el mismo producto
               linea_carrito.id +
               "'>x</span></li>"
     );
     $(".borrar_" + linea_carrito.id).on("click", function () {  // cualdo hago clik en borrar ...
          $(".borrar_" + linea_carrito.id).parent().remove();  // borro todas las lineas con esta clase
          var clase_producto = $(this).attr("class"); // recupero el id
          clase_producto = clase_producto.slice(7);
          carrito=carrito.filter((producto) => producto.id != clase_producto); // quito el (o los) elemento de array = lo borro
          calcularTotal();
     });
     $(".unidades").val(""); //despues de añadir, vacio el input de unidades
     calcularTotal(); // despues de hacer todo, calculo el total
}

function calcularTotal() {
    total=0;//primero lo borro y recalculo
     carrito.forEach(function (linea_carrito, indice) {  //recorro el carrito
          total += parseFloat(parseFloat((linea_carrito.precio)*(linea_carrito.cantidad)).toFixed(2)); //calculo el total de la linea de carrito
     });
     $("#total").html(total);//lo saco al dom
}

function tramitarPedido() {  //envio el carrito mediante ajax
     var lista_carrito = "";
     carrito.forEach(function (item, index, array) {
          lista_carrito += item.nombre + " - " + item.cantidad + "\n";
     });
     lista_carrito += " Por un valor de :" + total;
     alert("Vas a tramitar :" + lista_carrito);

     var carrito_enviar = { carrito: carrito };

     $.ajax({
          url: "php/tramito_carrito.php",
          type: "POST",
          data: carrito_enviar,
          dataType: "json",
     })
          .done(function () {
               alert("Enviado con exito");
               vaciarCarrito();
          })
          .fail(function () {
               alert("error");
          });
}

function vaciarCarrito() {
     carrito = [];
     $("#lista-carrito").empty();
     calcularTotal();
}
