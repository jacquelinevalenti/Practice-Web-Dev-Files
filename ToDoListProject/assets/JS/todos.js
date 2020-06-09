// check off specific to-dos by clicking on them
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");    
});

// if user clicks on delete button, that to-do will fade out and be removed
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    // stop events from bubbling up to parent elements
    event.stopPropagation();
});

// listen for keypress of enter and add a new to-do item
$("input[type='text']").keypress(function(event){
    // if enter key is pressed
    if(event.which === 13){
        // get value from input
        var todoText = $(this).val();
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$(".fa-edit").on("click", function(){
    $("input[type=text]").fadeToggle();
})