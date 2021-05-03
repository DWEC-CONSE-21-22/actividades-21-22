# A8.8 QUIZ-II

Realiza una aplicación web "Quiz" de cuestionarios que:

- Saque por pantalla las preguntas y las respuestas almacenadas en el json, las respuestas se representan con radio button. Las preguntas y respuestas son flexibles, pueden haber mas preguntas y, dentro de estas preguntas, mas respuestas posibles. Se carga con AJAX.

![Captura](https://user-images.githubusercontent.com/70903768/116885300-06578380-ac28-11eb-9b52-d29fcb1ad8c9.PNG)


- Al clickar en "OK", comprueba las que son correctas (mediante una llamada AJAX para recuperar cual es la correcta) sacándolas por pantalla como "ACIERTOS: X". Si no
se ha contestado, cuentan como incorrectas. Solo una opción es la correcta, que vendrá indicada en el JSON como "correcta"

- Las que son correctas, cambia el fondo a verde y las que son incorrectas, cambia el fondo a rojo.

![Captura2](https://user-images.githubusercontent.com/70903768/116885315-0a83a100-ac28-11eb-8f42-3dfc8480e90d.PNG)

- Al clickar en "Limpiar", vuelven todos los valores a los iniciales

- Añade un temporizador, al cargar la página se inicia una cuenta de décimas de segundo, esta cuenta se ve en la pagina como un número incrementado cada décima de segundo. Al clickar en "OK", se para la cuenta y se queda el número de décimas de segundo que se ha tardado en realizar.

![Captura3](https://user-images.githubusercontent.com/70903768/116885360-1707f980-ac28-11eb-9406-0af1af660cd6.PNG)
