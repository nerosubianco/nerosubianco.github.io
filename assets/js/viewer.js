$(document).ready(function() {
    const url = new URL(window.location.href);
    const num = url.searchParams.get("num");
    if (!isNaN(num) && Number.isInteger(parseFloat(num)) && edizioni.includes(num)) {
        $("#num").text("Stai leggendo l'edizione numero " + num);
        const viewer = $("<embed></embed>").attr("src", "edizioni/ed" + num + ".pdf").attr("type", "application/pdf").addClass("reader").ready(function() {
            setTimeout(function() {
                $(".loader").fadeOut(function() {
                    $("#banner").fadeIn();
                    $(".wrapper").fadeIn();
                    $("#footer").fadeIn();
                });
            }, 500);
        });
        const download = $("<a></a>").attr("class", "button special icon fa-download").attr("href", "edizioni/ed" + num + ".pdf").text("Scarica questa edizione");
        $(".container").append(viewer);
        $(".container").append(download);
    } else
        history.back();
});