"use strict";

/*  zadatak 1: 

Imaš listu "album" i jedan objekt u toj listi. Napravi novi objekt i dodaj ga na u listu kao drugog
člana liste (ali isto kao objekt). */

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const muse = {
  umjetnik: "Muse",
  naslov: "Simulation Theory",
  godina: 2018,
  format: ["CD", "LP", "cassette"],
};

album.push(muse);
console.log(album);

/* zadatak 2: 

Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put koristimo objekte kako bismo implementirali kalkulacije.
Zapamti - ITM = masa/(visina ** 2)

Za svakog od njih, kreiraj objekt s vrijednostima: ime, težina, visina.
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode - (return) ime.
Logiraj u konzolu tko ima viši ITM, skupa s imenom i ITM vrijednosti.

Npr.: Josipov ITM (28.3) je veći od Markovog ITM-a (23.9)!

Testni podaci: 
- Marko: 78kg i 1.69m
- Josip: 92kg i 1.95m  */

const marko = {
  ime: "Marko",
  tezina: 78,
  visina: 1.69,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

marko.calcITM();
josip.calcITM();
console.log(marko.itm, josip.itm);

if (marko.calcITM() > josip.calcITM()) {
  console.log(
    `Markov ITM (${marko.itm}) je veći od Josipovog ITM-a (${josip.itm}).`
  );
} else if (josip.calcITM() > marko.calcITM()) {
  console.log(
    `Josipov ITM (${josip.itm}) je veći od Markovog ITM-a (${marko.itm}).`
  );
} else {
  console.log(
    `Markov ITM (${marko.itm}) jednak je od Josipovog ITM-a (${josip.itm}).`
  );
}
