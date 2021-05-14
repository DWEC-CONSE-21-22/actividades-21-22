function carregarCookies() {
    let arrayCookies = document.cookie.split("; ");
    let nomCookie;
    let valorCookie;
    for (let cookie of arrayCookies) {
         let temp = cookie.split("=");
         nomCookie = temp[0];
         valorCookie = temp[1];
         console.log(
              `Nom de la cookie: ${nomCookie}; valor de la cookie: ${valorCookie}`
         );
    }
    let h1 = document.getElementById("header");
    if (nomCookie === "idioma" && valorCookie === "catala") {
         h1.innerHTML = "Text en català";
    } else if (
         nomCookie === "idioma" &&
         valorCookie === "castella"
    ) {
         h1.innerHTML = "Texto en castellano";
    } else if (
         nomCookie === "idioma" &&
         valorCookie === "angles"
    ) {
         h1.innerHTML = "Text in English";
    }
    if (nomCookie === "colorFons") {
         document.body.style.backgroundColor = valorCookie;
    }
}
