$(document).ready(function() {
    const url = new URL(window.location.href);
    const stabile = url.searchParams.get("stabile");
    if (!stabile)
        window.location.replace("https://nerosubianco.ga/");
    else {
        $.ajax({
            type: "POST",
            url: "https://api.macedon.ga/nsb/set",
            data: { "stabile": stabile },
            success: function(response, textStatus, jqWHR) {
                if (!response.success)
                    if (response.error === "forbidden")
                        $(".loader").fadeOut(500, function() {
                            $(".wrapper").fadeIn(200);
                        });
                    else
                        window.location.replace("https://nerosubianco.ga/");
                else
                    window.location.replace("https://nerosubianco.ga/");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }
});