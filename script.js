function jakosc(zmiana) {
    var k = document.getElementById("karat");
    var y = document.getElementById("proba");
    var g = document.getElementById("gum");
    var cenagrama = document.getElementById("gramz");
    console.log("varcenagrama "+ cenagrama.value);
    var jakoscproby = document.getElementById("proba");
    var gramstopu = document.getElementById("gramproba");

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
            przelicz = cenagrama.value * jakoscproby.value * gramstopu.value;
            console.log("przeliczenie " + przelicz);
            break;
        default:
            console.log("błąd case");
    }
}

function pokazZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "flex";
    pokaz.style.backgroundColor = "silver";
    var gramz;
gramp = document.getElementById("gramproba").value;
console.log("próbogram " + gramp);
}

function ukryjZawartosc() {
    var pokaz = document.getElementById("zawartosczlota");
    pokaz.style.display = "none";

}
/*
function cenaZlota() {
    fetch("http://api.nbp.pl/api/cenyzlota/today?format=json")
        .then(resp => resp.json())
        .then(json => console.table(json))
        .catch(err => console.log(err));

    document.getElementById("brak").innerHTML = "duda";
}
*/

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

function  foo()  {
  alert('bar');
console.log("z foo funkcji ");
}


document.getElementById("dudas").addEventListener("click", function(){
    document.getElementById("dudas").innerHTML = "Hello____World!";
    foo();
  });

  document.getElementById("uncja").addEventListener("click", function(){
    ukryjZawartosc();
  });

/*
  id="uncja" onclick="ukryjZawartosc()"
  id="gramzloto" name="gramzloto" onclick="ukryjZawartosc()" onchange="gramzlota()
  id="gramproba" name="gramproba" onchange="pokazZawartosc()
  id="karat" onchange="jakosc('karat')
  id="gum" onchange="jakosc('gum')
  id="proba" name="proba" onchange="jakosc('proba')
  id="cena_uncja" name="cena_uncja" value="8000"
  id="cena_gram" name="cena_gram" value="240"
  <div class="wynik">
            <div onclick="cenaZlota()">
                <h2>Twoja monetka jest warta: </h2>
                <h1 id="wartosc"> xxxx z js</h1>
                <h3 id="brak">ggg</h3>


*/