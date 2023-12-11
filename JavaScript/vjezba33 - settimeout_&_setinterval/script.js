"use strict";

/* JSON (Javascript Object Notation)
- standardni format razmjene poadataka temeljen na objektnoj sintaksi JS-a
API (Application Programming Interface)
- aplikacijsko programsko sučelje koje nam omogućuje komunikaciju sa serverom ili drugim računalima */

const post = {
  id: 1,
  naslov: "prvi post",
  sadrzaj: "Ovo je sadržaj posta.",
  autor: "Igor",
};

// s JSON.stringify metodom prebacujemo podatke iz objekta u string
const jsonFile = JSON.stringify(post);
console.log(jsonFile); // {"id":1,"naslov":"prvi post","sadržaj":"Ovo je sadržaj posta.","autor":"Igor"} - sve su stringovi

// s JSON.parse metodom prebacujemo podatke iz JSON-a (string) u objekt
const objektFile = JSON.parse(jsonFile);
console.log(objektFile); // {id: 1, naslov: 'prvi post', sadržaj: 'Ovo je sadržaj posta.', autor: 'Igor'} - objekt
console.log(objektFile.id);

// ----------------------------------------------------------------------------------------------------

// asinkrona funkcija sa .setTimeout metodom - .setTimeout prvo definira funkciju, a onda timer delay za izvođenje te funkcije
setTimeout(() => {
  console.log("Pozdrav iz TimeOut-a!");
}, 1000); // za koliko milisekundi će se funkcija aktivirati

console.log("Pozdrav izvan .setTimeout-a!");

// anonimna .setTimeout funkcija
setTimeout(() => {
  console.log("Pozdrav iz TimeOut-a!");
}, 0);

console.log("Pozdrav izvan .setTimeout-a!");

// ----------------------------------------------------------------------------------------------------

// callback funkcija
/* setTimeout(promijeniTekst, 5000); */

function promijeniTekst() {
  document.getElementById("naslov").textContent =
    "Pozdrav iz callback funkcije!";
}
// ----------------------------------------------------------------------------------------------------

// imenovana callback funkcija
const promjena = setTimeout(promijeniTekst, 5000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("Zaustavili smo izvođenje .setTimeout-a.");
});

// ----------------------------------------------------------------------------------------------------

/* .setInterval metoda
- izvršava se dok god ju ne prekinemo */
const clgCallback = () => {
  console.log("ispis");
};

const interval = setInterval(clgCallback, 1000);

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(interval);
  console.log("Zaustavili smo izvođenje .setInterval-a.");
});

// PRIMJER

let intervalBoja;

const promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  if (!intervalBoja) {
    intervalBoja = setInterval(promijeniBoju, 1000);
  }
});

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(intervalBoja);
  intervalBoja = undefined;
});
