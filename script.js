//
function jakosc(zmiana) {
    var jakosc_karaty = document.getElementById("karat");
    var jakosc_proba = document.getElementById("proba");
    var jakosc_gum = document.getElementById("gum");
    var jakoscproby = document.getElementById("proba");
    var gramstopu = document.getElementById("gramproba");

    console.log("duda8 " + zmiana)

    switch (zmiana) {
        case 'karat':
            a = jakosc_karaty.value;
            jakosc_proba.value = a;
            jakosc_gum.value = 0;
            console.log('karat ' + a);
            break;
        case 'gum':
            a = jakosc_gum.value;
            jakosc_proba.value = a;
            jakosc_karaty.value = 0;
            console.log('gum ' + a);
            break;
        case 'proba':
            a = jakosc_proba.value;
            jakosc_karaty.value = 0;
            jakosc_gum.value = 0;
        //    przelicz = cenagrama.value * jakoscproby.value * gramstopu.value;
        //    console.log("przeliczenie " + przelicz);
            console.log('proba ' + a);        
            break;
        default:
            console.log("błąd case");
    }
    policzCzysteZloto ();
}

//
function pokazZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "flex";
    pokaz.style.backgroundColor = "silver";
}

//
function ukryjZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "none";
    document.getElementById("gramproba").value = "";

}

//
function aktualizujUncje () {
    let uncjaPLN;
    uncjaPLN = document.getElementById("cena_gram").value * 31,103;
    uncjaPLN = Math.round(uncjaPLN * 100)/100;
    document.getElementById("cena_uncja").value = uncjaPLN;
    console.log("uncjaPLN " + uncjaPLN);
}

//
function aktualizujGramy () {
    let gramPLN = "";
    gramPLN = document.getElementById("cena_uncja").value / 31,103;
    gramPLN = Math.round(gramPLN * 100)/100;
    document.getElementById("cena_gram").value = gramPLN;
    console.log("gramPLN " + gramPLN);
}

//
function cenaZlota() {
    fetch("http://api.nbp.pl/api/cenyzlota/?format=json")
        .then(resp => resp.json())
        .then(json => document.getElementById("cena_gram").value = json[0].cena)
        .catch(err => console.log(err));
    document.getElementById("cena_uncja").value = 0;
    // :TODO: tu wywołać funkcję przeliczającą cenę z gram/pl na uncja/pln
}

// Podaj wagę czystego złota w gramach:
function uncjaGramZlota() {
let gramz;
gramz = document.getElementById("uncja").value * 31,103;
document.getElementById("gramzloto").value = gramz;
}
//:TODO: poprawić mnożenie żeby dawało 31.103 a nie 31

//
function policzCzysteZloto (){
    let przeliczCzysteZloto;
    przeliczCzysteZloto = (document.getElementById("proba").value / 1000) * document.getElementById("gramproba").value;
    przeliczCzysteZloto = Math.round(przeliczCzysteZloto * 100)/100;
    document.getElementById("gramzloto").value = przeliczCzysteZloto;
    console.log("przeliczCzysteZloto" + przeliczCzysteZloto);
    document.getElementById("uncja").value = 0;
}

//
function policzWartosc() {

}

document.getElementById("uncja").addEventListener('click', ukryjZawartosc);
document.getElementById("gramzloto").addEventListener('click', ukryjZawartosc);
document.getElementById("uncja").addEventListener('change', uncjaGramZlota);
document.getElementById("gramproba").addEventListener('click', pokazZawartosc );
document.getElementById("gramproba").addEventListener('change', function(){ jakosc('proba'); }); //tu
document.getElementById("karat").addEventListener('change', function(){ jakosc('karat'); });
document.getElementById("gum").addEventListener('change', function(){ jakosc('gum'); });
document.getElementById("proba").addEventListener('change', function(){ jakosc('proba'); });
// document.getElementById("proba").addEventListener('change', function(){ jakosc('proba'); policzCzysteZloto(); });
document.getElementById("wez_nbp").addEventListener('click', cenaZlota);
document.getElementById("cena_gram").addEventListener('change', aktualizujUncje);
document.getElementById("cena_gram").addEventListener('click', aktualizujUncje);
document.getElementById("cena_uncja").addEventListener('change', aktualizujGramy);
document.getElementById("cena_uncja").addEventListener('click', aktualizujGramy);
document.getElementById("policz").addEventListener('click', policzWartosc);

/*
var aa = "";
fetch("http://api.nbp.pl/api/cenyzlota/?format=json")
    .then(response => response.json())
    .then(cenyzlota => aa = cenyzlota[0].cena);
// :TODO: ubrać w funcję niech zwraca return https://github.github.io/fetch/
    console.log("aa " + aa);

// :TODO: złączyć w jedną funkcję ukryj pokaż i dodać od ręki przeliczanie w niej jak się uda
 */