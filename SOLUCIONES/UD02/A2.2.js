var d = prompt("Cuanto dinero quieres cambiar?");
var dinero = parseInt(d);
function calcularBilletes(billete){
  var nbilletes = Math.trunc(dinero / billete);
  dinero = dinero-(nbilletes*billete);
  for(i=0; i< nbilletes ; i++){
    document.write("<img src='img/EUR_"+billete+".jpg' style='max-width: 20%;''>")
    }  }
calcularBilletes(500);
calcularBilletes(200);
calcularBilletes(100);
calcularBilletes(50);
calcularBilletes(20);
calcularBilletes(10);
calcularBilletes(5);