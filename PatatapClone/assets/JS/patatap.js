$("body").keypress(function(){
    $("div").fadeOut(200, function(){
        $("div").remove();
    });
});