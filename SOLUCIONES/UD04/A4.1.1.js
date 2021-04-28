/*
document.onmousemove=mostrarPosicion;
function mostrarPosicion(evento){
  document.getElementById("pos_raton").innerHTML="Posicion x="+evento.clientX+" Posicion y= "+evento.clientY
}
*/
//document.addEventListener("mousemove",function(evento){ document.getElementById("pos_raton").innerHTML="Posicion x="+evento.clientX+" Posicion y= "+evento.clientY})
//ejemplo con funcion flecha
document.addEventListener("mousemove", (evento) =>
    document.getElementById("pos_raton").innerHTML =
    "Posicion x=" + evento.clientX + " Posicion y= " + evento.clientY)