/* realiza la misma tarea
function anyado(){
    var contenedor = document.getElementById("miLista");
    var item = document.createElement("li");
    var texto = document.createTextNode(Math.random());
    item.appendChild(texto);
    contenedor.appendChild(item);
}
*/

function anyado(){
    document.getElementById("miLista").innerHTML+="<li>"+Math.random()+"</li>";
}