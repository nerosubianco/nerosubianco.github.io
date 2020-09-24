$(document).ready(function() {
    setTimeout(function() {
        $(".loader").fadeOut(function() {
            $("#banner").fadeIn();
            $(".wrapper").fadeIn();
            $("#footer").fadeIn();
        });
    }, 500);
});