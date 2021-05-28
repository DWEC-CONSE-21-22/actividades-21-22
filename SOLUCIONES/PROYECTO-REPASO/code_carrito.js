window.onload = function () {

    let div_items = document.querySelector('#items');
    let carrito = [];
    if(localStorage.getItem('carrito')!= null){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        this.console.log(carrito);

    };

    let lista_carrito = document.querySelector('#lista-carrito');
    let span_total = document.querySelector('#total');


    
    // Eventos
  
    document.getElementById('tramitar').addEventListener("click",tramitarPedido);
    document.getElementById('borrar').addEventListener("click",vaciarCarrito);

    // Inicio
    recojoProductos();


function recojoProductos(){ //para rellenar el select, recojo nombres de todos los prodcutos

    $.ajax({
        url:"php/todos_productos.php",
        type:"POST",
        dataType:"json",
    }).done(function(lista_productos){
            
        for ( var i=0;i<lista_productos.length;i++ ) {
            // Estructura
          // Body
          let producto = document.createElement('div');
          producto.classList.add('producto');
          producto.setAttribute('id', lista_productos[i]['id'] );
          // Titulo
          let miNodoTitle = document.createElement('div');
          miNodoTitle.classList.add('card-titulo');
          miNodoTitle.setAttribute('id',  "nombre_"+lista_productos[i]['id'] );
          miNodoTitle.textContent = lista_productos[i]['nombre'];
          // Precio
          let miNodoPrecio = document.createElement('span');
          miNodoPrecio.classList.add('card-precio');
          miNodoPrecio.setAttribute('id', "precio_"+lista_productos[i]['id']);
          miNodoPrecio.textContent = lista_productos[i]['precio'];
          let miNodoEuro = document.createElement('span');
          miNodoEuro.textContent = " €";
          // Boton y unidades
          let miNodoUnidades = document.createElement('div');
            let miNodoNumero = document.createElement('input');
            miNodoNumero.setAttribute('type', 'number');
            miNodoNumero.setAttribute('class', 'unidades');
            miNodoNumero.setAttribute('value', '1');
            miNodoNumero.setAttribute('id',  "unidades_"+lista_productos[i]['id'] );
            let miNodoBoton = document.createElement('span');
            miNodoBoton.classList.add('btn');
            miNodoBoton.textContent =  ' + ';
            miNodoBoton.setAttribute('marcador', lista_productos[i]['id']);
            miNodoBoton.setAttribute('id', lista_productos[i]['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            miNodoUnidades.appendChild(miNodoNumero);
            miNodoUnidades.appendChild(miNodoBoton);
        
          let miNodoCardImage = document.createElement('img');
          miNodoCardImage.classList.add('card-image');
          miNodoCardImage.setAttribute("src", "img/"+lista_productos[i]['foto']);
    
          producto.appendChild(miNodoTitle);
          producto.appendChild(miNodoCardImage);
          producto.appendChild(miNodoPrecio);
          producto.appendChild(miNodoEuro);
          producto.appendChild(miNodoUnidades);
         div_items.appendChild(producto);
         }


    }).fail(function( jqXHR, textStatus, errorThrown ) {
         console.log( "La solicitud ha fallado: " +  textStatus + errorThrown);
    });
}// fin funcion



function anyadirCarrito () {
    // Anyadimos el Nodo a nuestro carrito

    var id_producto = this.getAttribute('marcador');
    var unidades_producto = document.getElementById("unidades_"+id_producto).value;
    var precio_producto = document.getElementById("precio_"+id_producto).innerText;
    var nombre_producto = document.getElementById("nombre_"+id_producto).innerText;
    var objeto_producto ={ 'id': id_producto, 'nombre': nombre_producto, 'unidades': unidades_producto, 'precio': precio_producto};
     carrito.push(objeto_producto);

          
                         // Creamos el nodo del item del carrito
                         let miNodo = document.createElement('li');
                         miNodo.classList.add('lista-carrito-item');
                           
                            let nombre = document.createElement('span');
                            nombre.textContent=nombre_producto + " - ";

                            let unidades = document.createElement('span');
                            unidades.textContent=unidades_producto + " * ";

                            let precio = document.createElement('span');
                            precio.textContent=precio_producto + "€ - ";


                         // Boton de borrar
                         let miBoton = document.createElement('button');
                         miBoton.classList.add('btn');
                         miBoton.textContent = 'X';
                         miBoton.setAttribute('posicion', id_producto);
                         miBoton.addEventListener('click', borrarItemCarrito);
                         
                         miNodo.appendChild(nombre);
                         miNodo.appendChild(unidades);
                         miNodo.appendChild(precio);
                         miNodo.appendChild(miBoton);

                         lista_carrito.appendChild(miNodo);
                         calcularTotal();
                         localStorage.setItem('carrito', JSON.stringify(carrito))
    
 }


function borrarItemCarrito () {
    // Obtenemos la posicion que hay en el boton pulsado
    let posicion = this.getAttribute('posicion');
    // Borramos la posicion que nos interesa
    carrito.splice(posicion);

    calcularTotal();
    this.parentNode.parentNode.removeChild(this.parentNode);
    // volvemos a renderizar
     // Calculamos de nuevo el precio

     localStorage.setItem('carrito', JSON.stringify(carrito))
    
}

function calcularTotal () {
    
    // Recorremos el array del carrito

    var precio_total = 0;
    carrito.forEach(function(item, index, array) {
            precio_total+= item.unidades * item.precio;
        });
    // Renderizamos el precio en el HTML
    span_total.textContent = precio_total;
}

function tramitarPedido(){
    var lista_carrito="";
    carrito.forEach(function(item, index, array) {
        lista_carrito+= item.nombre +" - "+ item.unidades +"\n" ;
    });
    lista_carrito+= " Por un valor de :" + span_total.innerText;
   alert("Vas a tramitar :" + lista_carrito);


   var carrito_enviar = {'carrito': JSON.stringify(carrito)};

   $.ajax({
    url:"php/tramito_carrito.php",
    type:"POST",
    data: carrito_enviar,
    dataType:"json",
    }).done(function() {
            alert( "Enviado con exito" );
            localStorage.clear();
     })
          .fail(function() {
      alert( "error" );
     })



}

function vaciarCarrito(){
    
    carrito=[];
    lista_carrito.textContent = '';
    calcularTotal();
    localStorage.clear();
}


}



