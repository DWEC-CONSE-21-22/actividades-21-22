# A9.2 Validación de formulario por varios métodos

Vamos a realizar la validación de un formulario de tres maneras diferentes, el formulario esta en el documento html adjunto:

1.  Manera "clasica" sin jquery validator: valida estos elementos del formulario:
  - Campo de texto no este vacío
  - Edad no esté vacío, sea mayor de 0 y menor de 100, y sea un número
  - Correo electrónico con formato correcto
  - Fecha debe ser posterior a hoy
  - Se debe elegir una opción del select, y esta no puede ser la primera
  - Se debe seleccionar el checked
  - Se debe seleccionar un radio button
  - Al pulsar en enviar, se realizarán las comprobaciones. 
  - Si hay algun fallo, se avisa con un (o varios) alerts. Si todo es correcto, se saca por pantalla los datos elegidos y luego se envia el formulario ( dará error ya que no hay php)

2. Realiza las mismas comprobaciones con jquery y la librería jquery validate, personaliza los mensajes de error, dale un estilo a los mensajes de errore con un fondo amarillo y texto en rojo

3. Realiza una llamada ajax al controlador compruebo.php, al que le pasas el usuario para ver si esta ya creado, en el caso que sea ok, avisa con un alert, si es erroneo, cambia el valor por el sugerido