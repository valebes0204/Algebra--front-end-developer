"use strict";

const objekt1 = { a: 1, b: 2 };
const objekt2 = { c: 3, d: 4 };

const objekt3 = { ...objekt1, ...objekt2 };

console.log(objekt3);

// assign metoda za kreiranje novog objekta i ubacivanje vrijednosti drugih objekata u novi objekt
const objekt4 = Object.assign({}, objekt1, objekt2);
console.log(objekt4); // { a: 1, b: 2, c: 3, d: 4 }

const todos = [
  { id: 1, zadatak: "Kupi kruh." },
  { id: 2, zadatak: "Kupi mlijeko." },
  { id: 3, zadatak: "Prošeći psa." },
];

console.log(todos[1].zadatak); // Kupi mlijeko.
console.log(todos[1].id); // 2

let x;

// ako želimo listu ključeva iz objekta koji se nalazi u listi, pozivamo putem Object.keys metode
x = Object.keys(todos[0]); // "id" "zadatak"
x = Object.keys(todos[0]).length; // 2

// ako želimo listu vrijednosti iz objekta koji se nalazi u listi, pozivamo putem Object.values metode
x = Object.values(todos[0]); // 1, "Kupi kruh."

// ako želimo provjeriti ima li određene vrijednosti unutar objekta, pozivamo putem .hasOwnProperty metode
x = todos[0].hasOwnProperty("id"); // true

console.log(x);

/* kada imamo varijable koje želimo ubaciti u objekt i ako su imena tih varijabli jednaka ključevima u objektu,
nije potrebno pisati npr. ime: ime, nego je dobvoljan samo naziv ključa */
const ime = "Igor";
const prezime = "Jevremović";
const godine = 40;

const osoba = {
  ime,
  prezime,
  godine,
};

console.log(osoba);

// dekonstruiranje liste

const brojevi = [1, 2, 3, 4, 5, 6];

const [broj1, , broj3, ...ostatakListe] = brojevi;

console.log(broj1, broj3, ostatakListe, brojevi); // 1, 3, [4, 5, 6], [1, 2, 3, 4, 5, 6]

// dekonstruiranje objekta

const todo = {
  id: 1,
  zadatak: "Kupi mlijeko.",
  adresa: {
    ulica: "Trg Davora Horvata",
    grad: "Zagreb",
  },
};

// jednostavan način zapisivanja vrijednosti objekta u varijablu
const zadatak1 = todo.zadatak;
console.log(zadatak1); // Kupi mlijeko.

// zapisivanje više vrijednosti objekta u identične varijable
const { id, zadatak, adresa } = todo;
console.log(id, zadatak, adresa); // 1 `Kupi mlijeko.` { ulica: 'Trg Davora Horvata', grad: 'Zagreb' }

// zapisivanje više vrijednosti objekta u drugačije imenovane varijable
const {
  id: todoId,
  zadatak: todoZadatak,
  adresa: { ulica: todoUlica },
  adresa: { grad: todoGrad },
} = todo;
console.log(todoId, todoZadatak, todoUlica, todoGrad); // 1 `Kupi mlijeko.` 'Trg Davora Horvata' 'Zagreb'
