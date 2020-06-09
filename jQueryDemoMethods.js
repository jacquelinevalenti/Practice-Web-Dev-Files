
// change image width to 200px
$("img").css("width", "200px");

// below would change all image sources to scary pine martin photo
// $("img").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// this only changes the first image to scary pine martin
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// this changes the input type from text to checkbox
// $("input").attr("type", "checkbox");

// this changes the last image to scary pine martin
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// fade out all elements with "fading" class
$("button").on("click", function(){
    $(".fading").fadeOut(1000, function(){
        console.log("fade completed");
        $(this).remove();
    });
})
