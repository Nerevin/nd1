$(document).ready(function(){
    $(".switch").click(function(){
        $(".pop-up").slideToggle("2000");
        $(".tytoknoall").append('<div class="blockall"></div>'); 
        });
    $(".close-pop").click(function(){
        $(".pop-up").slideToggle("2000");
        $(".blockall").remove(); 
    }); 
    $(".video-switch").click(function(){
        $(".video").slideToggle("2000");
        $(".tytoknoall").append('<div class="blockall"></div>'); 
    });
    $(".close").click(function(){
        $(".video").slideToggle("2000");
        $(".blockall").remove();
        const media = $(".video__content").get(0);
        media.pause();
    });
});