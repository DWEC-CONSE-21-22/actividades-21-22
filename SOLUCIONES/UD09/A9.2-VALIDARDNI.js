function validar() {
    var dni = document.getElementById('dni');
    return comprovarDni(dni.value);
    }
     
    function comprovarDni(dni) {
    var nombre,
    lletraIntroduida,
    lletraEsperada,
    correcte = false;
     
    nombre = dni.substr(0, dni.length - 1); // Extraiem el nombre
    lletraIntroduida = dni.substr(dni.length - 1, 1); // Extreiem la lletra
    nombre = nombre % 23;
    lletraEsperada = 'TRWAGMYFPDXBNJZSQVHLCKET'; // Possibles valors de la lletra ordenats per la posició corresponent
    lletraEsperada = lletraEsperada.substring(nombre, nombre + 1);
     
    if (lletraEsperada === lletraIntroduida.toUpperCase()) {
    correcte = true;
    alert('DNI correcte: ' + dni);
    } else {
    alert('DNI incorrecte: ' + dni);
    }
     
    return correcte;
    }