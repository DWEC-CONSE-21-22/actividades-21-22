function funcion_ajax(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
        if(conexion.readyState == 4 && conexion.status == 200 ){ 
            console.log(conexion.responseText); 
            var obj_provincias = JSON.parse(conexion.responseText); //creo el objeto
            var select = document.createElement("select"); //creo el select
            obj_provincias.provincias.forEach(function(provincia){  //itero el array
               var option_provincia=document.createElement("option");
               option_provincia.value=provincia.cp;
               option_provincia.innerText=provincia.nom;
               select.appendChild(option_provincia);    // para cada elemento añado un option
            });
            select.addEventListener("change",function(){ //cuando cambia el select ...
                console.log(this.value);        
                var cp = this.value;
                document.getElementById("cp").innerText=cp;  
            });
            document.getElementById("contenido").appendChild(select); //añado el select al div
         }
    }
    conexion.open('GET','provincias.json',true);
    conexion.send(); 
}
