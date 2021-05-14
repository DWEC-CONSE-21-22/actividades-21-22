function guardar() {
    let animal = document.getElementById("nomanimal").value;
    let vegetal = document.getElementById("nomvegetal").value;
    /*Guardem les dades en el localStorage*/
    localStorage.setItem("animal", animal);
    localStorage.setItem("vegetal", vegetal);
    /* netegem el camp */
    document.getElementById("nomanimal").value = "";
    document.getElementById("nomvegetal").value = "";
    };
     
    function carregar() {
    let animal = localStorage.getItem("animal");
    let vegetal = localStorage.getItem("vegetal");
    document.getElementById("nomanimal").value = animal;
    document.getElementById("nomvegetal").value = vegetal;
    }