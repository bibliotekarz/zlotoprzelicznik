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

function aktualizujUncje () {
    let uncjaPLN = "";
    uncjaPLN = document.getElementById("cena_gram").value * 31,103;
    uncjaPLN = Math.round(uncjaPLN * 100)/100;
    document.getElementById("cena_uncja").value = uncjaPLN;
    console.log("uncjaPLN " + uncjaPLN);
}

function aktualizujGramy () {
    let gramPLN = "";
    gramPLN = document.getElementById("cena_uncja").value / 31,103;
    gramPLN = Math.round(gramPLN * 100)/100;
    document.getElementById("cena_gram").value = gramPLN;
    console.log("gramPLN " + gramPLN);
}

function cenaZlota() {
    fetch("http://api.nbp.pl/api/cenyzlota/?format=json")
        .then(resp => resp.json())
        .then(json => document.getElementById("cena_gram").value = json[0].cena)
        .catch(err => console.log(err));
    //    aktualizujUncje();
}


function gramzlota() {
var gramz;
gramz = document.getElementById("gramzloto").value;
console.log("złotogram " + gramz);
}

var aa = "";
fetch("http://api.nbp.pl/api/cenyzlota/?format=json")
    .then(response => response.json())
    .then(cenyzlota => aa = cenyzlota[0].cena);
// :TODO: ubrać w funcję niech zwraca return https://github.github.io/fetch/
    console.log("aa " + aa);

// :TODO: złączyć w jedną funkcję ukryj pokaż i dodać od ręki przeliczanie w niej jak się uda

document.getElementById("uncja").addEventListener('click', ukryjZawartosc);
document.getElementById("gramzloto").addEventListener('click', function(){
    ukryjZawartosc();
    gramzlota();
  });

document.getElementById("gramproba").addEventListener('click', pokazZawartosc);
document.getElementById("karat").addEventListener('change', jakosc('karat'));
document.getElementById("gum").addEventListener('change', jakosc('gum'));
document.getElementById("proba").addEventListener('change', jakosc('proba'));
document.getElementById("wez_nbp").addEventListener('click', cenaZlota);
document.getElementById("cena_gram").addEventListener('change', aktualizujUncje);
document.getElementById("cena_uncja").addEventListener('change', aktualizujGramy);
  
/*
  id="uncja" onclick="ukryjZawartosc()"
  id="gramzloto" name="gramzloto" onclick="ukryjZawartosc()" onchange="gramzlota()
  id="gramproba" name="gramproba" onchange="pokazZawartosc()
  id="karat" onchange="jakosc('karat')
  id="gum" onchange="jakosc('gum')
  id="proba" name="proba" onchange="jakosc('proba')
  id="cena_uncja" name="cena_uncja" value="8000"
  id="cena_gram" name="cena_gram" value="240"
  id="pole_wymik" name="pole_wynik" onclick="cenaZlota()"

*/