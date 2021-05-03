# A8.3 Selección de municipio

Crea una aplicación web para seleccionar un municipio, primero se listarán en un select todas las provincias de España. 

En el select "provincias" se cargan todas las provincias mediante una llamada AJAX a cargaProvinciasJSON.php, el cual devuelve el código de la procincia y su nombre. 

Una vez se haya seleccionado la provincia:

* Cambia la cabecera con el nombre de la provincia y su código
* Se carga en el select "municipio" los municipios de esa provincia, mediante una llamada AJAX a cargaMunicipiosJSON.php

Por último, cuando se selecciona un municipio, en el parafo "respueta" aparece la provincia y municipio seleccionado.


Analizar los PHP para deducir el formato de los datos a enviar al servidor y como los devuelve.

