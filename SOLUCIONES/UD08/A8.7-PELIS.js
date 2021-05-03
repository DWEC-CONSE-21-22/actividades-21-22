$( document ).ready(function() { 
 
 
 var $botoCercar = $("#botoCercar");
               $botoCercar.on("click", function () {
                    var textACercar = $("#textACercar").val();
                    $.ajax({
                         url: "http://www.omdbapi.com/?apikey=20c0bb92",
                         jsonp: "callback",
                         data: {
                              s: textACercar,
                              r: "json",
                         },
                         success: processarResposta,
                    });
               });

               function processarResposta(dades) {
                    var pelicules = dades.Search;
                    var $resultats = $("#resultats");
                    $resultats.html(""); // S'elimina el contingut anterior
                    $.each(pelicules, function (index, pelicula) {
                         $resultats.append(generarPelicula(pelicula));
                    });
               }

               function generarPelicula(dades) {
                    var $peli = $("<div>");
                         $peli.css("margin",20);
                         $peli.css({"margin": 10, "border": "1px solid black", "display": "inline-block", "width": "150px"});
                    var $titol = $("<div>");
                    $titol.html("<b>Títol</b>: " + dades.Title);

                    var $any = $("<div>");
                    $any.html("<b>Any</b>: " + dades.Year);

                    var $poster = $("<div>");
                    var $imatge = $("<img width='140'>");
                    $imatge.attr("src", dades.Poster);
                    $imatge.attr("alt", dades.Title);
                    $poster.append($imatge);

                    $peli.append($titol);
                    $peli.append($any);
                    $peli.append($poster);

                    return $peli;
               }
 });