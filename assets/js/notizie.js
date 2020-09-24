const notizie = [
    { data: "Un conflitto che semina terrore. La Terza Guerra Mondiale è arrivata?", link: "edizioni/ed1.pdf#page=2" },
    { data: "<i>INTERVISTA</i>: La rappresentanza del Pujati.", link: "edizioni/ed1.pdf#page=4" },
    { data: "<i>CONCORSO</i>L’obiettivo del fotografo", link: "edizioni/ed1.pdf#page=4" },
    { data: "<i>INTERVISTA</i>: Insomma, Siamo Forti", link: "edizioni/ed1.pdf#page=5" },
    { data: "Un nuovo liceo musicale?", link: "edizioni/ed1.pdf#page=5" },
    { data: "Dove è nato internet? A Paperopoli!", link: "edizioni/ed1.pdf#page=6" },
    { data: "<i>RECENSIONE</i>: Piccole Donne", link: "edizioni/ed1.pdf#page=7" },
    { data: "<i>RECENSIONE</i>: 1917", link: "edizioni/ed1.pdf#page=7" }
];


$(document).ready(function() {
    getRandom(notizie, 5).forEach(function(notizia) {
        var notiziaEl = $("<a>", { "class": "ni" }).html(notizia.data).attr("href", notizia.link);
        notiziaEl.hover(function() {
            var el = $(".nm").children();
            el.each(function() {
                if ($(this).text() != notiziaEl.text())
                    $(this).addClass("blur");
            });
        }, function() {
            var el = $(".nm").children();
            el.each(function() {
                $(this).removeClass("blur");
            });
        });
        $(".nm").append(notiziaEl);
    });
});

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}