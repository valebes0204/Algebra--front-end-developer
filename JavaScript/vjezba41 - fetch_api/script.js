"use strict";

/* FETCH
- moderan pristup HTTP requestovima;
za razliku od njih, fetch je sam po sebi promise -  on je metoda koju imamo u window objectu */

const url = "https://jsonplaceholder.typicode.com/todos/1";

function dohvatiPodatke() {
  const odgovor = fetch(url)
    .then((odgovor) => odgovor.json())
    .then((data) => (document.querySelector("h1").textContent = data.title)); // pretvara u objekt
}

dohvatiPodatke();

/* kako izvući podatke iz lokalnog JSON filea:
obzirom da će fetch vratiti promise, možemo odmah nakon fetcha pozvati .then metodu gdje se u prvom .thenu nalazi response;
kako se u responsu nalazi JSON format, moramo ga pretvoriti u objekt;
obzirom na korištenje arrow funkcije, implicitno je definiran return na kraju .thena */

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data)); // ova funkcija se prva pokreće

const url2 = "https://jsonplaceholder.typicode.com/todos";

fetch(url2)
  .then((response) => response.json())
  .then((data) => console.log(data));
