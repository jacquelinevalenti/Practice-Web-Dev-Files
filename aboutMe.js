// select all divs and make backgound purple
$("div").css("background", "purple");

// select anything with class highlight and make width 200px
$(".highlight").css("width", "200px");

// select anything with id third and give it an orange border
$("#third").css("border", "1px solid orange");

// select first div and change color to pink
// $("div")[0].css("color", "pink");
$("div:first-of-type").css("color", "pink");