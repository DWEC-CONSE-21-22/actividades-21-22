

function funcion_ajax(){
        conexion = new XMLHttpRequest();
        conexion.onreadystatechange = function(){
                if(conexion.readyState == 4){
                    if(conexion.status == 200){                  
                       var objeto_respuesta = JSON.parse(conexion.responseText); 
                        console.log(objeto_respuesta);
                       var lista = document.createElement("ul");
                       for(var i in objeto_respuesta){
                          var item = document.createElement("li");
                          var enlace = document.createElement("a");
                          enlace.setAttribute("href",objeto_respuesta[i].Web);
                          var span_asistentes = document.createElement("span");
                          span_asistentes.innerText=" - Asistentes: "+objeto_respuesta[i].Assistents;
                          enlace.innerText = objeto_respuesta[i].Nom_activitat;
                          item.appendChild(enlace);
                          item.appendChild(span_asistentes);
                          lista.appendChild(item);
                        }

                       document.getElementById("contenido").appendChild(lista);
                    }
                }
        };

        conexion.open('GET','http://dades.eicub.net/api/1/festivals-assistents?Any=2018',true);
        conexion.overrideMimeType('text/plain');
        conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        conexion.send();     

}
