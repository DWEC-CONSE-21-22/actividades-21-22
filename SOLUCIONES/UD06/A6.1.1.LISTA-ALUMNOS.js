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
  var myDataName = 'height';
  var myDataValue = '1.75m';
  person[myDataName] = myDataValue;  //Creo una nueva propiedad


   
window.onload = function() { //Para poder acceder al DOM despues de cargarlo

      var div_personas = document.getElementById("personas");
      let div_persona = document.createElement('div');
      div_persona.classList.add('persona');
      // Nombre
      let nombre = document.createElement('h3');
      nombre.textContent = person.name.pila + " " + person.name.apellido;

      var boton_bio = document.createElement('button');
      boton_bio.textContent ='Ver biografia';
      boton_bio.addEventListener('click',function(){person.bio()});
      var boton_saludo = document.createElement('button');
      boton_saludo.textContent ='Saludar';
      boton_saludo.addEventListener('click',function(){person.greeting()});


      div_persona.appendChild(nombre);
      div_persona.appendChild(boton_bio);
      div_persona.appendChild(boton_saludo);
      div_personas.appendChild(div_persona);
    };