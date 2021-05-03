function funcion_ajax(){
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
        if(conexion.readyState == 4 && conexion.status == 200 ){ 
            console.log(conexion.responseText);
            var obj_provincias = JSON.parse(conexion.responseText);
            console.log(obj_provincias);
            var select = document.createElement("select");
            obj_provincias.provincias.forEach(function(provincia){
               var option_provincia=document.createElement("option");
               option_provincia.value=provincia.cp;
               option_provincia.innerText=provincia.nom;
               select.appendChild(option_provincia);    
            });
            select.addEventListener("change",function(){
                console.log(this.value);        
                var cp = this.value;
                document.getElementById("cp").innerText=cp;
            });

            document.getElementById("contenido").appendChild(select);

         }
    }
    conexion.open('GET','provincias.json',true);
    conexion.send(); 
}
