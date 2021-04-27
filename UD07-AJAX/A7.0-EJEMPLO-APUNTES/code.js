window.onload=function(){console.log("Cargo la pagina")};
function obtenerTexto() {
     var http_request = new XMLHttpRequest();
     http_request.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               document.getElementById("respuesta").innerHTML = this.responseText;
          }
     };
     http_request.open("GET", "ejemploAjax.txt", true);
     http_request.send();
}
       
