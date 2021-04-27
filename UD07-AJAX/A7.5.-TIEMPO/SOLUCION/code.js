window.onload=function(){console.log("Cargo la pagina")};
  var prediccion;
  var arrayNodos;
function obtenerValencia() {
     var http_request = new XMLHttpRequest();
     http_request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               var prediccionXML=this.responseXML;
               arrayNodos = prediccionXML.getElementsByTagName("prediccion");
               console.log(arrayNodos);
               var div_respuesta = document.createElement("div");
                    var div_dia = document.createElement("div");
                    var fecha = arrayNodos[0].childNodes[1].getAttribute("fecha") + "<br>";
                    var cielo=arrayNodos[0].childNodes[1].getElementsByTagName("estado_cielo");
                    console.log(cielo)
                    var texto_prediccion=""
                    for (i=3; i<cielo.length;i++){
                         texto_prediccion+= cielo[i].getAttribute("periodo") + " -  ";
                         texto_prediccion+= cielo[i].getAttribute("descripcion") + "<br>";

                    }
                    div_dia.innerHTML = fecha + texto_prediccion;
                    div_respuesta.appendChild(div_dia); 
               
               document.getElementById("prediccion").appendChild(div_respuesta);
          }
     };
     http_request.open("GET", "localidad_46250.xml", true);
     http_request.send();
}
       
