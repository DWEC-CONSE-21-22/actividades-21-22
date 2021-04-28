function ini() {
     for (i = 0; i < document.getElementById("ventanas").value; i++) {
          x = Math.floor(Math.random() * 600);
          y = Math.floor(Math.random() * 400);
          console.log("en for-" + x + " - " + y);
          var ventana = crear_ventana(x, y);
     }

     ventana2 = crear_ventana(10, 10);
     setTimeout(function () {
          ventana2.close();
     }, 2000);
}

function crear_ventana(x, y) {
     var opcions = "width=400,height=400,toolbar=0";
     opcions += "menubar=0, scrollbars=0, resizable=0, copyhistory=0,";
     opcions += "left=" + x + ",top=" + y;
     var ventana = window.open(
          "https://portal.edu.gva.es/46022257/",
          "",
          opcions
     );
     return ventana;
}
