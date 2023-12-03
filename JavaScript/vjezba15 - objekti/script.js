"use strict";

const igorLista = [
  "Igor",
  "Jevremović",
  2023,
  "Predavač",
  ["Marko", "Ivan", "Stjepan"],
];

console.table(igorLista);
console.log(igorLista[3]);

/* kod listi nemamo opciju zapisati stvari s pripadajućim ključevima jer ključevi su redni broj člana liste.
Zato možemo koristiti objekte, njih definiramo vitičastim zagradama (tzv. object literal syntax).
Za pozivanje određene vrijednosti iz objekta možemo koristiti naše ključeve.
Raspored članova objekta funkcionira po principu abecede za razliku od liste te se vrijednosti
objekta pozivaju po nazivu ključa */

const igor = {
  firstName: "Igor",
  lastName: "Jevremović",
  godina: 2023,
  zanimanje: "Predavač",
  prijatelji: ["Marko", "Ivan", "Stjepan"],
};

console.table(igor);

/* ako želimo dohvatiti određenu vrijednost kod objekta, to ćemo napraviti putem ključa,
a ne pomoću rednog broja kao kod liste */

// ključeve pozivamo pomoću dot notacije
console.log(igor.godina); // 2023

// ali možemo i pomoću bracket notacije
console.log(igor["godina"]); // 2023

// izmjena postojeće vrijednosti u objektu pomoću ključa
igor.godina = 2024;
console.table(igor);

// dodavanje nove vrijednosti u objektu (kreiranje i ključa i vrijednosti)
igor.lokacija = "Hrvatska";
console.table(igor);

igor.prijatelji.push("Ljutko");
console.table(igor);

/* praktični PRIMJER "bracket notacije" */

const nameKey = "Name";

console.log(igor["first" + nameKey]);
console.log(igor["last" + nameKey]);

const upitnik = prompt(
  "Što Vas zanima? Izaberite između: firstName, lastName, godina, zanimanje ili prijatelji."
);

console.log(igor[upitnik]);

if (igor[upitnik]) {
  console.log(igor[upitnik]);
} else {
  console.log("Krivi upis!");
}
