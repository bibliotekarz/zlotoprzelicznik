function jakosc(zmiana) {
    var k = document.getElementById("karat");
    var y = document.getElementById("proba");
    var g = document.getElementById("gum");

    console.log("duda " + zmiana)

    switch (zmiana) {
        case 'karat':
            var a = k.value;
            y.value = a;
            g.value = 0;
            console.log(a);
            break;
        case 'gum':
            var a = g.value;
            y.value = a;
            k.value = 0;
            console.log(a);
            break;
        case 'proba':
            k.value = 0;
            g.value = 0;
            break;
        default:
            console.log("błąd case");
    }
}

function pokazZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "flex";
    pokaz.style.backgroundColor = "silver";
}

function ukryjZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "none";

}

function cenaZlota() {
    fetch("http://api.nbp.pl/api/cenyzlota/today?format=json")
        .then(resp => resp.json())
        .then(json => console.table(json))
        .catch(err => console.log(err));

    document.getElementById("brak").innerHTML = "duda";
}
// :TODO: złączyć w jedną funkcję ukryj pokaż i dodać od ręki przeliczanie w niej jak się uda