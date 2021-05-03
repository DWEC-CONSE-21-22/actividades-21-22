# A8.7 Buscador de peliculas

Mediante llamadas AJAX y jquery, vamos a implemetar un buscador de películas usando el API OMDB.

Este API se basa en llamadas [JSONP](https://desarrolloweb.com/articulos/que-es-jsonp-ejemplos-libreria-jquery.html)
Un ejemplo de uso de esta API sería :

```javascript
 $.ajax({
            url: "http://www.omdbapi.com/?apikey=[tuClave]",
            jsonp: "callback",
            data: {
                s: textACercar,
                r: "json",
                   },
            success: processarResposta,
        });
```
Pasos a seguir:
- Consigue tu clave gratuita en https://www.omdbapi.com/apikey.aspx
- Haz la llamada, analiza la respuesta
- Con la respuesta, crea una lista de peliculas con este aspecto. 
- Para ello puedes usar estos estilos: "margin": 10, "border": "1px solid black", "display": "inline-block", "width": "150px"


![Capturapeli](https://user-images.githubusercontent.com/70903768/116885517-4159b700-ac28-11eb-835f-24fddfac5795.PNG)


