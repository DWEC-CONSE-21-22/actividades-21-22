
function letraDNI(numeroDni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    return letras[numeroDni % 23];
}

document.onkeypress = buscarDNI;

function buscarDNI(evento) {
    console.log(evento.key);
    var html = ""
    for (i = 0; i <= 9999; i++) {
        if (letraDNI(i) == evento.key.toUpperCase()) {
            html += i + evento.key.toUpperCase() + " - ";
        }
    }
    document.getElementById("resultado").innerHTML = html;


}