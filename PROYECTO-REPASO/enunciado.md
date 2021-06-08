# Proyecto repaso JS: Carrito con ajax

- Vamos a desarrollar la parte front-end de un carrito de la compra.
Os paso los documentos necesariops para la aplicacion menos el javascript.
   - La estructura HTML
   - El estilo CSS
   - Los servicios PHP para realizar las llamas. Este servicio conecta con la base de datos virtualmarket, de mysql. Hay que configurar los parámetros correctos.
   - Una carpeta imagen con cada uno de los productos

- Lo primero que tenemos que hacer es, mediante una conexión AJAX, listar los productos de la base de dato.
   - Cada producto se guarda en un div diferente, donde se ve el nombre, la imagen y el precio del producto. Ademas de un div en el que se ve la cantidad y un "+"

![Captura de pantalla 2021-05-19 185027](https://user-images.githubusercontent.com/70903768/118853299-e4225e80-b8d3-11eb-8aa3-6903820d08e3.jpg)

- En el fichero estilos.css hay estilos para darle el formato correcto:

![2Captura](https://user-images.githubusercontent.com/70903768/119355574-b8bdbc00-bca5-11eb-8fdc-8897f07e841f.PNG)


- Al clickar en el "+" se añade este producto al carrito. Ese se actualiza con cada uno de los elementos guardados y se guarda en local storage. De manera que al volver a cargar la pagina, se ha mantenido el carrito
   - Se va actualizando la suma total del carrito
   - Si clikcamos en la "x", ese producto se borra

![Captura de pantalla 2021-05-19 184753](https://user-images.githubusercontent.com/70903768/118853340-f0a6b700-b8d3-11eb-9bf1-158f5a3962f0.jpg)


- Al dar "Tramitar pedido" se envía el carrito a un servicio tramitar_pedido.php. 
   - Primeo se informa, mediante un alert que se va a tramitar
   - Este servicio no hace nada, pero devuelve un ok. Si la respuesta es "ok" , envía un alert como que se ha tramitado con éxito y se borra el local storage
   - Si clikamos en vaciar carrito, se borra el carrito y el local storage
