$(document).on("click",function() {
     console.log("jquery ok"); 
    $("#esconder").click(function(){
         $("article").hide();
    })
    $("#esconder").
    $("#ensenar").on("click",function(){
         $("article").show();
    })

    $("#anado").on("click",function(){
         $("section").append("<article>Esto es un article dentro de section<br></article>");
    })

    $("#quito").on("click",function(){
         $("article:last-child").remove();
    })
});