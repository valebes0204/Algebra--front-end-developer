"use strict";

/* napravit ćemo funkciju unutar funkcije i za return vanjske funkcije definirat ćemo unutarnju funkciju,
ali ju nećemo pokrenuti;
također kod unutarnje funkcije zaprimat ćemo parametar te za return ćemo imati množenje;
vanjsku funkciju ćemo pokrenuti i njen return zapisat će se u varijablu "mnozenje";
na ovaj način zapisujemo instrukcije iz unutarnje funkcije u varijabli "mnozenje";
prilikom pokretanja funkcije "mnozenje", možemo ubaciti parametar i izvrtjeti unutarnju funkciju */

function vanjskaFunkcija() {
  function unutarnjaFunkcija(broj) {
    return broj * 2;
  }
  return unutarnjaFunkcija;
}

const mnozenje = vanjskaFunkcija();
console.log(mnozenje);
const rezultat = mnozenje(2);
console.log(rezultat);

// ----------------------------------------------------------------------------------------------------

/* ovisno o tome gdje smo definirali funkciju, odlučujemo koje varijable su dostupne kada pozovemo funkciju;
koristeći closure, varijabla "brojac" i njena vrijednost bit će zapisane u definiciji varijable i vrijednost ove varijable "brojac" će
ostati memorirana u toj definiciji te funkcije;
kao da funkcija ima cache memoriju unutar koje je zapisan taj podatak;
memorirana vrijednost u funkciji se ne može mijenjati iz globalnog scope-a i toj varijabli i njenoj vrijednosti može se pristupiti samo putem tog "sučelja" */

function vanjskaFunkcija2() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const brojacVanjskaFunkcija = vanjskaFunkcija2();
console.log(brojacVanjskaFunkcija);
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();

// ----------------------------------------------------------------------------------------------------

// PRIMJER

let vanjskiBroj = 8;

function vanjski() {
  const unutarnjiBroj = 5;
  return vanjskiBroj + unutarnjiBroj;
}

console.log(vanjski());

vanjskiBroj = 10;
console.log(vanjski());

// PRIMJER s dvije funkcije

function dodajVanjska(vanjskiBroj) {
  function dodajUnutarnja(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return dodajUnutarnja;
}

/* console.dir(dodajVanjska(5)); */

const dodaj4 = dodajVanjska(4);
const dodaj5 = dodajVanjska(5);

console.log(dodaj4(6));
console.log(dodaj5(10));
