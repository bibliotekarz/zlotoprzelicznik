function jakosc(zmiana) {
    let jakosc_karaty;
    jakosc_karaty = document.getElementById("karat");
    let jakosc_proba;
    jakosc_proba = document.getElementById("proba");
    let jakosc_gum;
    jakosc_gum = document.getElementById("gum");

    switch (zmiana) {
        case 'karat':
            jakosc_proba.value = jakosc_karaty.value;
            jakosc_gum.value = 0;
            break;
        case 'gum':
            jakosc_proba.value = jakosc_gum.value;
            jakosc_karaty.value = 0;
            break;
        case 'proba':
            jakosc_karaty.value = 0;
            jakosc_gum.value = 0;
            break;
        default:
            console.log("błąd case");
    }
    policzCzysteZloto();
}


function pokazZawartosc() {
    let pokaz;

    pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "flex";
    pokaz.style.backgroundColor = "silver";

    document.getElementById("gum").value = 0;
    document.getElementById("proba").value = "";
    document.getElementById("karat").value = 0;
}


function ukryjZawartosc() {
    let pokaz;

    pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "none";
}

function czyscUncjeProba() {
    document.getElementById("uncja").value = 0;
    document.getElementById("gramproba").value = "";

    ukryjZawartosc();
}


function aktualizujUncje() {
    let uncjaPLN;
    let cenaGram;

    cenaGram = document.getElementById("cena_gram").value;
    uncjaPLN = cenaGram * 31.103;
    uncjaPLN = Math.round(uncjaPLN * 100) / 100;

    document.getElementById("cena_uncja").value = uncjaPLN;
}


function aktualizujGramy() {
    let gramPLN;
    let cenaUncja;

    cenaUncja = document.getElementById("cena_uncja").value;
    gramPLN = cenaUncja / 31.103;
    gramPLN = Math.round(gramPLN * 100) / 100;

    document.getElementById("cena_gram").value = gramPLN;
}


function cenaZlota() {
    fetch("https://api.nbp.pl/api/cenyzlota/?format=json")
        .then(resp => resp.json())
        .then(json => document.getElementById("cena_gram").value = json[0].cena)
        .catch(err => console.log(err));

    document.getElementById("cena_uncja").value = 0;
}


function uncjaGramZlota() {
    let gramz;
    let uncjaWartosc;

    uncjaWartosc = document.getElementById("uncja").value;
    console.log(typeof(uncjaWartosc));
    gramz = uncjaWartosc * 31.103;

    document.getElementById("gramzloto").value = gramz;
}


function policzCzysteZloto() {
    let przeliczCzysteZloto;
    let przeliczProba;
    let przeliczGramProba;

    przeliczProba = document.getElementById("proba").value;
    przeliczGramProba = document.getElementById("gramproba").value;

    przeliczCzysteZloto = (przeliczProba / 1000) * przeliczGramProba;
    przeliczCzysteZloto = Math.round(przeliczCzysteZloto * 100) / 100;

    document.getElementById("gramzloto").value = przeliczCzysteZloto;
    document.getElementById("uncja").value = 0;
}


function policzWartosc() {
    let wartoscMonetki;
    let gramyZlota;
    let cenaZaGram;

    cenaZaGram = document.getElementById("cena_gram").value;
    gramyZlota = document.getElementById("gramzloto").value;

    wartoscMonetki = gramyZlota * cenaZaGram;
    wartoscMonetki = Math.round(wartoscMonetki * 100) / 100;

    document.getElementById("wartosc").innerHTML = wartoscMonetki + " zł";
}

document.getElementById("uncja").addEventListener('click', ukryjZawartosc);
document.getElementById("uncja").addEventListener('change', uncjaGramZlota);
document.getElementById("gramzloto").addEventListener('change', function() {
    ukryjZawartosc;
    czyscUncjeProba();
});
document.getElementById("gramproba").addEventListener('click', pokazZawartosc);
document.getElementById("gramproba").addEventListener('change', function() { jakosc('proba'); });
document.getElementById("karat").addEventListener('change', function() { jakosc('karat'); });
document.getElementById("gum").addEventListener('change', function() { jakosc('gum'); });
document.getElementById("proba").addEventListener('change', function() { jakosc('proba'); });
document.getElementById("wez_nbp").addEventListener('click', cenaZlota);
document.getElementById("cena_gram").addEventListener('change', aktualizujUncje);
document.getElementById("cena_gram").addEventListener('click', aktualizujUncje);
document.getElementById("cena_uncja").addEventListener('change', aktualizujGramy);
document.getElementById("cena_uncja").addEventListener('click', aktualizujGramy);
document.getElementById("policz").addEventListener('click', policzWartosc);