var person1 = {
    name: {pila: 'Kate',
            apellido: 'Smith'},
    age: 32,
    gender: "female",
    interests: ["music", "skiing"],
    bio() {
      alert(
        this.name.pila + " "+this.name.apellido+" is "+this.age+"years old. She likes "+this.interests[0]+"and "+this.interests[1] );
    },
    greeting() {
      alert("Hi! I'm " + this.name.pila);
    },
  };

  var person2 = {
    name: {pila: 'John',
            apellido: 'Doe'},
    age: 32,
    gender: "male",
    interests: ["football", "reading"],
    bio() {
      alert(
        this.name.pila + " "+this.name.apellido+" is "+this.age+"years old. He likes "+this.interests[0]+"and "+this.interests[1] );
    },
    greeting() {
      alert("Hi! I'm " + this.name.pila);
    },
  };

  var personas = [];
  personas.push(person1);
  personas.push(person2);


 
window.onload = function() { //Para poder acceder al DOM despues de cargarlo

  //Para iterar una lista de objetos, utilizo el forEach 
  //personas.forEach(function (persona){ //Equivalente
  personas.forEach(persona => {

      var div_personas = document.getElementById("personas");
      let div_persona = document.createElement('div');
      div_persona.classList.add('persona');
      // Nombre
      let nombre = document.createElement('h5');
      nombre.textContent = persona.name.pila + " " + persona.name.apellido;

      var boton_bio = document.createElement('button');
      boton_bio.textContent ='Ver biografia';
      boton_bio.addEventListener('click',function(){persona.bio()});
      var boton_saludo = document.createElement('button');
      boton_saludo.textContent ='Saludar';
      boton_saludo.addEventListener('click',function(){persona.greeting()});


      div_persona.appendChild(nombre);
      div_persona.appendChild(boton_bio);
      div_persona.appendChild(boton_saludo);
      div_personas.appendChild(div_persona);

  });

  function anyadir(){
    console.log("anyadir");
var persona3 = {
name: {pila: document.getElementById("nombre").value,
        apellido: document.getElementById("nombre").value},
age: 32,
gender: "female",
interests: ["music", "skiing"],
bio() {
  alert(
    this.name.pila + " "+this.name.apellido+" is "+this.age+"years old. She likes "+this.interests[0]+"and "+this.interests[1] );
},
greeting() {
  alert(`Hi! I'm ${this.name[0]}.`);
},
};
    
personas.push(persona3);

var div_personas = document.getElementById("personas");
  let div_persona = document.createElement('div');
  div_persona.classList.add('persona');
  // Nombre
  let nombre = document.createElement('h3');
  nombre.textContent = persona3.name.pila + " " + persona3.name.apellido;

  var boton_bio = document.createElement('button');
  boton_bio.textContent ='Ver biografia';
  boton_bio.addEventListener('click',function(){console.log(persona3.bio())});

  div_persona.appendChild(nombre);
  div_persona.appendChild(boton_bio);
  div_personas.appendChild(div_persona);

console.log(personas);

}



}