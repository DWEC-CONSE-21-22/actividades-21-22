window.onload=function(){console.log("Cargo la pagina")};
 
function obtenerValencia() {
     var http_request = new XMLHttpRequest();
     http_request.withCredentials = true;

   

     http_request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               var respuesta=this.responseText;
              var respuesta_obj = JSON.parse(respuesta);
              url_datos=respuesta_obj.datos;
              console.log(url_datos);
              obtenerDatos(url_datos);
          }
     };
     http_request.open("GET", "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/46250/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZXN1cy5iYXV0aXN0YUBpZXNjb25zZWxsZXJpYS5lcyIsImp0aSI6Ijg2MWY5NTMxLWE1ZjItNDJjMS1iNmE1LTg0ZTUzODgzMjVjYSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjE5Mjk3MDYwLCJ1c2VySWQiOiI4NjFmOTUzMS1hNWYyLTQyYzEtYjZhNS04NGU1Mzg4MzI1Y2EiLCJyb2xlIjoiIn0.H8cCWrDAWcbmfTVWf3x-ZJYucBGXtauPqXgHvvyLpaw", true);
     http_request.setRequestHeader("cache-control", "no-cache");
     http_request.send();
}

function obtenerDatos(url_datos) {
     var http_request = new XMLHttpRequest();
     http_request.withCredentials = true;
     http_request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               var respuesta=this.responseText;
              var respuesta_obj = JSON.parse(respuesta);
                    console.log(respuesta_obj);
                    
                    var div_respuesta = document.createElement("div");
                    var div_dia = document.createElement("div");
                    var fecha = respuesta_obj[0].prediccion.dia[0].fecha;
                    var cielo=respuesta_obj[0].prediccion.dia[0].estadoCielo;
                    var texto_prediccion ="";
                    for (i=3; i<cielo.length;i++){
                         texto_prediccion+= cielo[i].periodo + " -  ";
                         texto_prediccion+= cielo[i].descripcion + "<br>";

                    }
                    div_dia.innerHTML = fecha + " <br> " + texto_prediccion;
                    div_respuesta.appendChild(div_dia); 
               
               document.getElementById("prediccion").appendChild(div_respuesta);

            
          }
     };
     http_request.open("GET", url_datos, true);
     http_request.setRequestHeader("cache-control", "no-cache");
     http_request.send();
}
      
