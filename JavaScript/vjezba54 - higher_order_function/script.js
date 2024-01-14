"use strict";

/* funkcija koja kao parametar dobiva drugu funkciju je "funkcija višeg reda" (Higher Order Function - HOF), a funkcija koju smo proslijedili je callback funkcija */

const a = (fn) => {
  fn();
};

const b = () => {
  console.log("Hello world.");
};

a(b);

// dvije funkcije za množenje i za zbrajanje

/* const brojevi = [10, 20, 30, 40, 50];

const kvadrat = () => {
  const umnozak = brojevi.map((broj) => broj * 2);
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => broj + 1);
  return suma;
};

console.log(kvadrat(), zbroj()); */

// kako izvući logiku koja nije ista za ove dvije funkcije i preslagati je da se ne duplicira kod:

/* const brojevi = [10, 20, 30, 40, 50];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

const kvadrat = () => {
  const umnozak = brojevi.map((broj) => izracunMnozenje(broj));
  return umnozak;
};

const zbroj = () => {
  const suma = brojevi.map((broj) => izracunZbrajanje(broj));
  return suma;
};

console.log(kvadrat(), zbroj()); */

// kako napraviti HOF iz ove dvoje fukncije koja će odrađivati obje radnje:

/* const brojevi = [10, 20, 30, 40, 50];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

function izracunOduzimanje(x) {
  return x - 1;
}

const izracun = (fn) => {
  const rezultati = brojevi.map((broj) => fn(broj));
  return rezultati;
};

console.log(izracun(izracunMnozenje));
console.log(izracun(izracunZbrajanje));
console.log(izracun(izracunOduzimanje)); */

// kako pomoću prototipa na objektu listi složiti custom prototip metodu (kada smo napravili HOF od funkcije "izracun"):

const brojevi = [10, 20, 30, 40, 50];
const brojevi2 = [40, 80, 120, 160];

function izracunMnozenje(x) {
  return x * 2;
}

function izracunZbrajanje(x) {
  return x + 1;
}

function izracunOduzimanje(x) {
  return x - 1;
}

Array.prototype.izracun = function (fn) {
  const rezultati = this.map((broj) => fn(broj));
  return rezultati;
};

console.log(brojevi.izracun(izracunMnozenje));
console.log(brojevi.izracun(izracunZbrajanje));
console.log(brojevi.izracun(izracunOduzimanje));
console.log(brojevi2.izracun(izracunMnozenje));
