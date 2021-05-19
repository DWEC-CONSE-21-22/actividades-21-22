# Proyecto repaso JS: Carrito con ajax

- Vamos a desarrollar la parte front-end de un carrito de la compra.
Os paso los documentos necesariops para la aplicacion menos el javascript.
   - La estructura HTML
   - El estilo CSS
   - Los servicios PHP para realizar las llamas. Este servicio conecta con la base de datos virtualmarket, de mysql. Hay que configurar los parámetros correctos.
   - Una carpeta imagen con cada uno de los productos

- Lo primero que tenemos que hacer es, mediante una conexión AJAX, listar los productos de la base de dato.
   - Cada producto se guarda en un div diferente, donde se ve el nombre, la imagen y el precio del producto. Ademas de un div en el que se ve la cantidad y un "+"

- Al clickar en el "+" se añade este producto al carrito. Ese se actualiza con cada uno de los elementos guardados y se guarda en local storage. De manera que al volver a cargar la pagina, se ha mantenido el carrito
   - Se va actualizando la suma total del carrito
   - Si clikcamos en la "x", ese producto se borra

- Al dar "Tramitar pedido" se envía el carrito a un servicio tramitar_pedido.php. 
   - Primeo se informa, mediante un alert que se va a tramitar
   - Este servicio no hace nada, pero devuelve un ok. Si la respuesta es "ok" , envía un alert como que se ha tramitado con éxito y se borra el local storage
   - Si clikamos en vaciar carrito, se borra el carrito y el local storage
