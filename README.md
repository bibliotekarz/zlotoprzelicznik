# Złotoprzelicznik 

*Adres działającego skryptu [https://bibliotekarz.github.io/zlotoprzelicznik/](https://bibliotekarz.github.io/zlotoprzelicznik/)*

Skrypt przeliczający 
- uncje jubilerskie (trojańskie) na gramy, 
- wyliczający wagę czystego złota na podstawie przeliczenia karatów, próby określonej przez Główny Urząd Miar, czy wprowadzonej próby w tysięcznych,
- pobierający ostatnią opublikowaną przez NBP średnią wartości złota,
- przeliczający zadeklarowaną/wyliczoną wagę czystego złota * cenę grama/uncji na wartość przeliczanego obiektu

Jeśli przeliczasz żeby sprzedać wprowadź cenę skupu czystego złota, gdy kupujesz wprowadź cenę sprzedaży czystego złota, średnia cena złota z NBP daje tylko pogląd co do wartości przeliczanego obiektu.

Przeliczniki prób na podstawie [Rozporządzenia Ministra Gospodarki](http://bip.oup.warszawa.gum.gov.pl/download/18/1217/RozpMGwsmetaliszlachetnych.pdf "link do Rozporządzenia Ministra Gospodarki z dnia 31 maja 2012 r.w sprawie wyrobów z metali szlachetnych"), przelicznik karatów na podstawie [Wikipedia: Próba złota](https://pl.wikipedia.org/wiki/Pr%C3%B3ba_z%C5%82ota "link do strony")

Skrypt pobiera ostatnio dostępną średnią cenę złota z oficjalnego API udostępnionego przez [NBP Web API](http://api.nbp.pl/ "link do NBP Web API"). NBP nie aktualizuje ceny w dni wolne od pracy.

**UWAGA:**  GitHub Pages blokują korzystanie z API NBP, tak więc pod adresem https://bibliotekarz.github.io/zlotoprzelicznik pobieranie średniej ceny złota z NBP nie działa :( Cenę możesz zobaczyć klikając [w ten link](http://api.nbp.pl/api/cenyzlota/?format=json "Ostatnia cena złota podana przez NBP") i wprowadzić na stronie przelicznika.
&nbsp;

Podawane dane są przetwarzane wyłącznie po stronie przeglądarki użytkownika.

Wszelkie, zwłaszcza konstruktywne uwagi mile widziane.

