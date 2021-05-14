# A8.9 PACTOMETRO

Realiza una aplicación web "Pactómetro":
Tenemos una plantilla base index1.html y los datos de los escaños en un json escanyos.json
- Carga los datos de los partidos en un array de partidos y crea los options del select
- Al elegir un partido del select, añade un elemento div, con longitud proporcional al número de escaños, del color del partido, con el nombre del partido. Asignale la propiedad "display","inline-block" .
- No se puede cargar el mismo partido dos veces
- Cada vez que se eleige un partido, se añade un elemento y se suma en Total
- Al hacer click en un partido, este se borra y se actualiza la suma total
- Si se pasa el raton por encima del partido, aparecen los escaños que tiene ese partido, si se quita, desaparece
