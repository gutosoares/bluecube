// Typed functions
$(function(){

    $("#typed").typed({
        strings: ["Inovadoras", "Web", "Mobile"],
        typeSpeed: 30,
        backDelay: 500,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });
});

function newTyped(){ /* A new typed object */ }
function foo(){ console.log("Callback"); }

// Move to page if Jquery
// $(function() {
//     $("a.links").bind('click', function(event) {
//         var $anchor = $(this);
//         $("html, body").stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

$('nav a.links').click(function(e){
    e.preventDefault();

    var id = $(this).attr('href');
    var targetOffset = $(id).offset().top;
    var menuHeight = $('.header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);

    console.log(targetOffset);
});