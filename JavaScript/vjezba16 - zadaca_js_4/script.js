"use strict";

/* zadatak 1:

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10, Kina 3441 i SAD 332.
Izračunaj postotak tih igrača u odnosu na sve profesionalne igrače i onda ih i ispiši,
na način da definiraš dvije funkcije - prvu koja će računati postotak i drugu u koju ćeš ubaciti taj postotak
i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispiši sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} profesionalnih igrača stolnog tenisa što je oko ${postotak}% svijeta` */

const proIgraci = 10000;
const proHrvatska = 10;
const proKina = 3441;
const proSAD = 332;

const hrvatska = "Hrvatska";
const kina = "Kina";
const sad = "SAD";

function postotak(brojZemlja, brojSvijet) {
  const izracun = (brojZemlja / brojSvijet) * 100;
  return izracun;
}

function recenica(zemlja, populacija) {
  const postotakVrijednost = postotak(populacija, proIgraci);
  const igraciStolniTenis = `${zemlja} ima ${populacija} profesionalnih igrača stolnog tenisa što je oko ${postotakVrijednost}% svijeta.`;
  return igraciStolniTenis;
}

const igraciHrvatska = recenica(hrvatska, proHrvatska);
const igraciKina = recenica(kina, proKina);
const igraciSAD = recenica(sad, proSAD);

console.log(igraciHrvatska, igraciKina, igraciSAD);

/* Igorovo riješenje:

const postotakSvijeta = function (populacijaNacije) {
  return (populacijaNacije / 10000) * 100;
};

const opisNacije = function (zemlja, populacija) {
  const postotak = postotakSvijeta(populacija);
  console.log(postotak);
  console.log(
    `${zemlja} ima ${populacija} profesionalnih igrača stolnog tenisa što je oko ${postotak}% svijeta.`
  );
};

opisNacije("Hrvatska", 10);
opisNacije("Kina", 3441);
opisNacije("USA", 332); */

/* zadatak 2:

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija, onda je
napojnica 20%.

Tvoj zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.
Napravi listu koja će koristiti testne podatke zadane dolje.

Napravi listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje si
dobila koristeći funkciju za izračun napojnica.

Napravi listu s ukupnim iznosima, račun + napojnica (total).

Hint: Svaka lista treba vrijednost na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možeš samo nazvati funkciju s vrijednostima liste. Ne spremaj vrijednosti napojnice u posebne
varijable nego direktno u novu listu.

Testni podaci:

- račun 125
- račun 555
- račun 44 */

function izracunNapojnice(racun) {
  if (racun >= 50 && racun <= 300) {
    const napojnica = Math.round(racun / 15) * 100;
    return napojnica;
  } else {
    const napojnica = Math.round(racun / 20) * 100;
    return napojnica;
  }
}

function izracunUkupnogIznosa(racun, napojnica) {
  const ukupanIznos = racun + napojnica;
  return ukupanIznos;
}

const racunLista = [125, 555, 44];

const napojniceLista = [
  izracunNapojnice(racunLista[0]),
  izracunNapojnice(racunLista[1]),
  izracunNapojnice(racunLista[2]),
];

console.table(napojniceLista);

const totalLista = [
  izracunUkupnogIznosa(racunLista[0], napojniceLista[0]),
  izracunUkupnogIznosa(racunLista[1], napojniceLista[1]),
  izracunUkupnogIznosa(racunLista[2], napojniceLista[2]),
];

console.table(totalLista);

/* Igorovo riješenje:

const napojnica = function (racun) {
  return racun > 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

const racuni = [125, 555, 44];

const napojnice = [
  napojnica(racuni[0]),
  napojnica(racuni[1]),
  napojnica(racuni[2]),
];

const total = [
  racuni[0] + napojnice[0],
  racuni[1] + napojnice[1],
  racuni[2] + napojnice[2],
];

console.log(napojnice, total); */
