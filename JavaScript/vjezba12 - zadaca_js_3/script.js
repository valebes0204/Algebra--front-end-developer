"use strict";

/* zadatak 1:

Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje Hrvatske (const brojLovaca1 = 3840),
koliko iz Istre (const brojLovaca2 = 500) i koliko iz Dalmacije (const brojLovaca3 = 1440). */

const brojLovacaUkupno = 7900;
const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const postotakLovaca1 = Math.trunc((brojLovaca1 / brojLovacaUkupno) * 100);
const postotakLovaca2 = Math.trunc((brojLovaca2 / brojLovacaUkupno) * 100);
const postotakLovaca3 = Math.trunc((brojLovaca3 / brojLovacaUkupno) * 100);

console.log(
  postotakLovaca1 + "%",
  postotakLovaca2 + "%",
  postotakLovaca3 + "%"
);

/* Igorovo riješenje:

const brojLovaca = (postotak) => {
  const izracun = (postotak / 7900) * 100;
  return izracun;
};

const brojLovaca1 = brojLovaca(3840);
const brojLovaca2 = brojLovaca(500);
const brojLovaca3 = brojLovaca(1440);

console.log(brojLovaca1, brojLovaca2, brojLovaca3); */

/* zadatak 2:

Imamo 2 tima koji su igrali međusobno 6 puta.
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju.
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima u odnosu na prosjek golova.
Napravi arrow funkciju za kalkulaciju prosjeka.
Napravi funkciju koja uzima prosjek timova i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe, npr. "Real Madrid je u prosjeku zabio 4 gola, a Barcelona 1.".
Možeš iskoristi if-else petlju kako bi složila ispis.

primjer 1:
Barcelona: 2, 3, 1, 3, 4, 7
Real Madrid: 1, 4, 1, 5, 0, 5

primjer 2:
Barcelona: 1, 2, 1, 1, 3, 5
Real Madrid: 1, 1, 3, 0, 2, 4

Hint: kako bi provjerila da li je jedan tim pobijedio drugi s barem duplo golova, 
možeš napraviti provjeru koristeći formulu A >= B * 2. Primjeni to na prosječni rezultat. */

const prosjekGolova = (golovi) => Math.trunc(golovi / 6);

// 1. primjer
const prosjekBarca1 = prosjekGolova(2 + 3 + 1 + 3 + 4 + 7);
const prosjekReal1 = prosjekGolova(1 + 4 + 1 + 5 + 0 + 5);

console.log(prosjekBarca1, prosjekReal1);

// 2. primjer
const prosjekBarca2 = prosjekGolova(1 + 2 + 1 + 1 + 3 + 5);
const prosjekReal2 = prosjekGolova(1 + 1 + 3 + 0 + 2 + 4);

console.log(prosjekBarca2, prosjekReal2);

function pobjednik(prosjekBarca, prosjekReal) {
  if (prosjekBarca >= prosjekReal * 2) {
    console.log(
      `Barcelona je u prosjeku zabila ${prosjekBarca} gola, a Real Madrid ${prosjekReal}.`
    );
  } else if (prosjekReal >= prosjekBarca * 2) {
    console.log(
      `Real Madrid je u prosjeku zabio ${prosjekReal} gola, a Barcelona ${prosjekBarca}.`
    );
  } else {
    console.log("Nema pobjednika.");
  }
}

// 1. primjer
pobjednik(prosjekBarca1, prosjekReal1);

// 2. primjer
pobjednik(prosjekBarca2, prosjekReal2);

/* Igorovo riješenje:

const calcAverage = (a, b, c, d, e, f) => (a + b + c + d + e + f) / 6;

const scoreBarca = calcAverage(2, 3, 1, 3, 4, 7);
const scoreReal = calcAverage(1, 4, 1, 5, 0, 5);

console.log(scoreBarca, scoreReal);

const checkWinner = function (prosjekBarca, prosjekReal) {
  if (prosjekBarca >= prosjekReal * 2) {
    console.log(`Barcelona je pobijedila ${prosjekBarca} : ${prosjekReal}`);
  } else if (prosjekReal >= prosjekBarca * 2) {
    console.log(`Real je pobijedio ${prosjekReal} : ${prosjekBarca}`);
  } else {
    console.log("Nema pobjednika");
  }
};

checkWinner(scoreBarca, scoreReal);
checkWinner(6, 3);
checkWinner(2, 7); */
