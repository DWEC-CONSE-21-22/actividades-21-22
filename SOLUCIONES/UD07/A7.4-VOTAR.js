window.onload=function(){  //cuando la pagina ha cargado
    enviar_peticion("nVotos"); // cargo n votos
    document.getElementById("votar").onclick = function(){enviar_peticion("votar")}; // defino lo que hace el boton
}


function enviar_peticion(accion){  // recojo la accion

    conexion = new XMLHttpRequest();
        conexion.onreadystatechange = function(){
                if(conexion.readyState == 4){
                    if(conexion.status == 200){     
                        console.log(conexion.responseText);
                        document.getElementById("respuesta").innerText=conexion.responseText
                    }
                }
        };
    conexion.open("POST","PHP/UD09-2AJAX.php",true); 
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send('accion='+accion); // envio la accion



}