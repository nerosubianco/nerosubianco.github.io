$(document).ready(function() {
    setTimeout(function() {
        $(".loader").fadeOut(function() {
            $("#banner").fadeIn();
            $(".wrapper").fadeIn();
            $(".n-container").fadeIn();
            $("#footer").fadeIn();
        });
    }, 500);
});