function guardar() {
    let animal = document.getElementById("nomanimal").value;
    /*Guardem les dades en el sessionStorage*/
    sessionStorage.setItem("animal", animal);
    /* Netegem els camps */
    document.getElementById("nomanimal").value = "";
    document.getElementById("lblanimal").value = "";
    document.getElementById("lblvegetal").value = "";
    };
     
    function carregar() {
    let animal = sessionStorage.getItem("animal");
    let vegetal = sessionStorage.getItem("vegetal");
    document.getElementById("lblanimal").innerHTML = animal;
    document.getElementById("lblvegetal").innerHTML = vegetal;
    }
