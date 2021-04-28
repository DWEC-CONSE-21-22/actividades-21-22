

/* una manera: creo el json como un string y lo paso a objeto
var quiz='{"preguntas":[{"id":"0","enunciado": "Cuantos son 10/2?", "respuestas":{"a":"5","b":"6","c":"9"}, "correcta":"a" },{"id":"1","enunciado": "Cuantos son 33/3?", "respuestas":{"a":"5","b":"6","c":"11"}, "correcta":"c" }, {"id":"2","enunciado": "Cuantos son 3*2?", "respuestas":{"a":"5","b":"6","c":"11","d":"6"}, "correcta":"d" }]}';
var objeto_quiz = JSON.parse(quiz);
*/
var objeto_quiz = {
     preguntas: [
          {
               enunciado: "Cuantos son 10/2?",
               respuestas: { a: "5", b: "6", c: "9" },
               correcta: "a",
          },
          {
               enunciado: "Cuantos son 33/3?",
               respuestas: { a: "5", b: "6", c: "11" },
               correcta: "c",
          },
          {
               enunciado: "Cuantos son 3*2?",
               respuestas: { a: "5", b: "6", c: "11", d: "6" },
               correcta: "d",
          },
     ],
};               




function cargoPreguntas() {
     var div_preguntas = document.getElementById("preguntas");

     objeto_quiz.preguntas.forEach(function (pregunta, index) {
          //recorro array de preguntas, para cada item tengo el objeto y el indice

          console.log(index);
          var div_pregunta = document.createElement("div"); // cada pregunta en un div
          div_pregunta.innerText = pregunta.enunciado;

          for (var key in pregunta.respuestas) {
               //itero las respuestas ( lista de clave-valor )
               console.log(key);
               var div_respuesta = document.createElement("div");
               var input_respuesta = document.createElement("input");
               input_respuesta.setAttribute("type", "radio");
               input_respuesta.setAttribute("value", key); // de valor me guardo la key  ( la letra ), para poder comparar con la correcta
               input_respuesta.setAttribute("name", index); //en el nombre guardo el indice del array
               div_respuesta.appendChild(input_respuesta);
               var label_pregunta = document.createElement("label");
               label_pregunta.innerText = key + ") " + pregunta.respuestas[key];
               div_respuesta.append(label_pregunta);
               div_pregunta.appendChild(div_respuesta);
          }
          div_preguntas.appendChild(div_pregunta);
     });
}

function comprobarRespuestas(){

    var respuestas_usuario = document.getElementsByTagName("input");
    var todo_correcto=true;

    for(x=0;x<respuestas_usuario.length;x++){
            if(respuestas_usuario[x].checked){
                var id_pregunta = respuestas_usuario[x].name; //en el name guardo el id de la pregunta
                console.log( id_pregunta);
                var respuesta_correcta = objeto_quiz.preguntas[id_pregunta].correcta; //el id coincide con la posicion del array
                var respuesta_elegida = respuestas_usuario[x].value;  // valor del input elegido
                if(respuesta_correcta != respuesta_elegida){
                    todo_correcto=false;
                }                        
            }
    }
    if(todo_correcto){
        alert ("Correcto!!");
    }else{
        alert("Incorrecto");
    }
}





    
