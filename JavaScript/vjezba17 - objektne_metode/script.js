"use strict";

let osoba1 = {
  ime: "Igor",
};

let osoba2 = osoba1;

console.log(osoba1, osoba2);

osoba2.ime = "Ivan";

console.log(
  osoba1,
  osoba2
); /* iako je promijenjena varijabla u osobi2, također se mijenja i u osobi1
jer je praktički isti objekt i gleda se ista vrijednost u istoj poziciji u memoriji */

/* izrada kopije objekta na način da se sprema u novo mjesto u memoriji heap.
ako su podaci višeslojeviti, ovaj pristup radi duboku kopiju samo od primitivnih vrijednosti,
ali obzirom da imamo listu (objekt) unutar postojećeg objekta kojeg kopiramo, ta lista će opet biti samo 
referentna stavka za poziciju u heapu */

const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  prijatelji: ["Marko", "Lucija", "Stjepan"],
};

console.log(igor);

const ivan = {
  ...igor,
  ime: "Ivan",
  prezime: "Ivanić",
};

console.log(ivan); // ime: 'Ivan', prezime: 'Ivanić', prijatelji: ['Marko', 'Lucija', 'Stjepan']
console.log(igor); // ime: 'Igor', prezime: 'Jevremović', prijatelji: ['Marko', 'Lucija', 'Stjepan']

igor.prijatelji.shift();
console.log(igor); // ime: 'Igor', prezime: 'Jevremović', prijatelji: ['Lucija', 'Stjepan']
console.log(ivan); // ime: 'Ivan', prezime: 'Ivanić', prijatelji: ['Lucija', 'Stjepan']

// ako imamo objekt unutar objekta (u ovom slučaju lista unutar objekta), ne sprema se na novo mjesto u memoriji nego se prebacuje na istoj referentnoj vrijednosti

// ----------------------------------------------------------------------------------------------------

/* duboka kopija kompletnih objekata koristeći strucuredClone metodu */

const stariobjekt = {
  a: 1,
  b: 2,
  c: { b: 2 },
};

const noviObjekt = structuredClone(stariobjekt);
console.log(stariobjekt, noviObjekt); // {a: 1, b: 2, c: {b: 2} }, {a: 1, b: 2, c: {b: 2} }

stariobjekt.c.b = 4;
stariobjekt.a = 4;
stariobjekt.b = 4;

console.log(stariobjekt, noviObjekt); // {a: 4, b: 4, c: {b: 4} }, {a: 1, b: 2, c: {b: 2} }

// ----------------------------------------------------------------------------------------------------

/* OBJEKTNE METODE */

const osoba = {
  ime: "Davor",
  prezime: "Horvat",
  godina: 40,
  prijatelji: ["Marko", "Lucija", "Stjepan"],
  vozackaDozvola: true,
  mirovina() {
    this.godDoMirovine = 65 - this.godina; // this gleda podatke unutar zadanog objekta kada ga ispisuje npr. u clg-u
    return this.godDoMirovine;
  },
  zadatak() {
    return `${this.ime} je ${this.mirovina()} godina do mirovine i ${
      this.vozackaDozvola ? "može" : "ne može"
    } voziti.`;
  },
  login() {
    console.log(this.ime, "je logiran/a");
  },
  logout() {
    console.log(this.ime, "se odlogirao/la");
  },
};

console.log(osoba);

/* console.log(osoba.mirovina(50)); // dot notacija
console.log(osoba["mirovina"](55)); // bracket notacija 

osoba.mirovina(); */

console.log(osoba.zadatak());
console.log(osoba.godDoMirovine);
