$(document).ready(function(){
$(".switch").click(function(){
$(".table").slideToggle("2000");
if($("div").hasClass("blockall")) 
$(".blockall").remove(); 
else $(".tytoknoall").append('<div class="blockall"></div>'); 
});
$(".tytoknoall").click(function(){
$(".blockcentr").slideToggle("2000");
$(".blockall").remove(); 
}); });

$(document).ready(function(){
    $(".video-switch").click(function(){
    $(".video").slideToggle("2000");
    if($("div").hasClass("blockall")) 
    $(".blockall").remove(); 
    else $(".tytoknoall").append('<div class="blockall"></div>'); 
    });
    $(".tytoknoall").click(function(){
    $(".blockcentr").slideToggle("2000");
    $(".blockall").remove(); 
    }); });