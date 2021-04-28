window.onload = init; //ojo, si no da fallo

function init() {
    console.log("init");
    document.getElementById("comenzar").onclick = iniciarSaludo;
    document.getElementById("parar").onclick = pararSaludo;
}
var intervalo;

function iniciarSaludo() {
    console.log("inicioSaludo");
    intervalo = setInterval("alert('hola')", 3000);
}

function pararSaludo() {
    console.log("paroSaludo");
    clearInterval(intervalo);
}