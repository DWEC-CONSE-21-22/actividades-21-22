document.ondblclick = cambiarColor;
function cambiarColor() {
    document.body.bgColor = "rgb(" + aleatorio() + "," + aleatorio() + "," + aleatorio() + ")";
}
function aleatorio() {
    return Math.trunc(Math.random() * 255);
}