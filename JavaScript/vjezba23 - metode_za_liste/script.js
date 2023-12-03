"use script";

/* FOREACH METODA
- prolazi listu član po član (svaki član ulazi kao parametaar funkcije) i na njemu radi određene izmjene.
Može adaptirati listu i spremiti izmjenjene članove liste u novu listu koju složimo za input tih adaptiranih članova;
može se pozvati i ključ u listi (ako se stave dva paprametra unutar funkcije u forEach metodi) */

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (pojedinacni_clan_liste, redno_mjesto_u_listi, lista) {
  console.log(pojedinacni_clan_liste, redno_mjesto_u_listi); // 10 0, 20 1, 30 2, 40 3, 50 4
  console.log(lista); // [ 10, 20, 30, 40, 50 ]
});

// isto i s arrow funkcijom
brojevi.forEach((vrijednost, index, lista) => {
  console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
  /* 0 - 10 i cijela lista 10,20,30,40,50
  1 - 20 i cijela lista 10,20,30,40,50
  2 - 30 i cijela lista 10,20,30,40,50
  3 - 40 i cijela lista 10,20,30,40,50
  4 - 50 i cijela lista 10,20,30,40,50 */
});

// PRIMJER
const useri = [
  {
    ime: "Ivan",
    prezime: "Ivić",
    godine: 50,
  },
  {
    ime: "Marko",
    prezime: "Markić",
    godine: 44,
  },
  {
    ime: "Josip",
    prezime: "Josipović",
    godine: 30,
  },
];

useri.forEach((user) => {
  console.log(user); // {ime: 'Ivan', prezime: 'Ivić', godine: 50}, {ime: 'Marko', prezime: 'Markić', godine: 44}, {ime: 'Josip', prezime: 'Josipović', godine: 30}
  console.log(user.godine); // 50, 44, 30
});

// ----------------------------------------------------------------------------------------------------

/* FILTER METODA
- vraća određenu vrijednost za razliku od forEach metode;
ta vrijednost je kopija dijela liste filtrirana na način da uključuje u novu listu samo one elemente
koji zadovolje tražene parametre filtera */

// kako izvući riječi koje imaju više od 6 slova
const rijeci = ["prozor", "autocesta", "apartman", "lopata", "zvrk", "sok"];

const rezultat = rijeci.filter((rijec) => {
  return rijec.length > 6;
});

console.log(rezultat); // 'autocesta', 'apartman'

// kako izvući parne brojeve
brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = brojevi.filter((broj) => {
  return broj % 2 === 0; // % je modulo operator koji, u ovom slučaju, radi provjeru postoji li ostatak kada se podatak podijeli sa zadanim brojem
});

console.log(parniBrojevi); // [2, 4, 6, 8, 10]

// isti primjer s forEach metodom
const parniBrojevi2 = [];

brojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    parniBrojevi2.push(broj);
  }
});

console.log(parniBrojevi2); // [2, 4, 6, 8, 10]

// ----------------------------------------------------------------------------------------------------

/* MAP metoda
- ovom metodom uvijek imamo isti broj članova kao što je u listi, izvlače se podaci iz liste,
za razliku od filter metode kojom filtriramo određene vrijednosti van */

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Auto", cijena: 45000 },
  { proizvod: "Motor", cijena: 7500 },
  { proizvod: "Tipkovnica", cijena: 100 },
];

const listaProizvoda = lista.map((objekt) => {
  return objekt.proizvod;
});

console.log(listaProizvoda); // ['Bicikl', 'Frižider', 'Auto', 'Motor', 'Tipkovnica']

// ----------------------------------------------------------------------------------------------------

/* FIND METODA
- nalazi određenog člana liste i sprema ga u novu varijablu,
za razliku od filtera, vraća samo jedan element van (može se koristiti i filter umjesto find) */

const findLista = lista.find((e) => {
  return e.proizvod === "Auto";
});

console.log(findLista); // { proizvod: "Auto", cijena: 45000 }

// ----------------------------------------------------------------------------------------------------

/* SOME METODA
- funkcionira kao "ili" provjera (true/false);
npr. želimo saznati ima li koji proizvod cijenu manju od 150 */

const cijenaManjaOd150 = lista.some((e) => {
  return e.cijena <= 150;
});

console.log(cijenaManjaOd150); // true

// ----------------------------------------------------------------------------------------------------

/* EVERY METODA
- funkcionira isto kao i SOME metoda,
ali svaki član liste mora zadovoljavati uvjete, ako ne zadovoljava, onda izbacuje false */

const cijenaManjaOd350 = lista.every((e) => {
  return e.cijena <= 350;
});

console.log(cijenaManjaOd350); // false

// ----------------------------------------------------------------------------------------------------

/* INCLUDES METODA
- najčešće se koristi za brojevne liste;
kada želimo saznati sadrži li određena lista određenu traženu vrijednost */

console.log(brojevi);
const includesDva = brojevi.includes(2);
console.log(includesDva); // true

// ----------------------------------------------------------------------------------------------------

/* INDEXOF METODA
- traži podatak koji smo naveli u parametru unutar liste i ako ga ne nađe izbacit će -1,
ali ako ga nađe ispisat će njegovo redno mjesto u listi */

const imena = ["Marko", "Ivan", "Maja", "Marija"];

console.log(imena.indexOf("Igor")); // -1
console.log(imena.indexOf("Marko")); // 0
console.log(imena.indexOf("Ivan")); // 1
console.log(imena.indexOf("Maja")); // 2

// PRIMJERI

const listaBrojeva = [1, 5, 6, 9, 8];

// prođi kroz listu, pomnoži članove s 2 i zapiši ih u novu listu koristeći map metodu
const noviBroj = listaBrojeva.map((broj) => broj * 2);

console.log(noviBroj); // [2, 10, 12, 18, 16]

// isto s metodom forEach
const noviBrojevi = [];
listaBrojeva.forEach((broj) => noviBrojevi.push(broj * 2));

console.log(noviBrojevi); // [2, 10, 12, 18, 16]

// kreiraj listu marki auta iz ove liste auta map metodom
const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const markeAuta = auti.map((auto) => auto.ime);
console.log(markeAuta); // ['Mercedes', 'Ford', 'BMW', 'Volvo', 'Peugeot', 'Range Rover']

/* kreiraj objekt koji će iz te liste auta imati samo kategoriju i ime koristeći map metodu
bonus: kako umjesto godine proizvodnje ubaciti treću stavku "starost"? */

/* const markaKategorija = auti.map((auto) => auto.ime && auto.kategorija);
console.log(markaKategorija); // ['limuzina', 'karavan', 'coupe', 'SUV', 'limuzina', 'jeep'] 
- nije dobro koristiti && operator u ovom slučaju zato što se gleda zadnja truth varijabla,
a u ovom slučaju je to auto.kategorija pa je samo ispisana ta lista */

const markaKategorija = auti.map((auto) => {
  return {
    kategorija: auto.kategorija,
    marka: auto.ime,
    starost: 2023 - auto.godinaProizvodnje,
  };
});

console.log(markaKategorija);
/* [ {kategorija: 'limuzina', marka: 'Mercedes', starost: 9}
{kategorija: 'karavan', marka: 'Ford', starost: 8}
{kategorija: 'coupe', marka: 'BMW', starost: 13}
{kategorija: 'SUV', marka: 'Volvo', starost: 12}
{kategorija: 'limuzina', marka: 'Peugeot', starost: 5}
{kategorija: 'jeep', marka: 'Range Rover', starost: 6} */

// ----------------------------------------------------------------------------------------------------

/* REDUCE METODA
- izvršava "reducer" callback funkciju kojoj je svrha da sve članove liste svede i zapiše u jednu vrijednost;
ima 2 glavna parametra - prijašnju i sadašnju vrijednost te poseban parametar za početnu vrijednost koja
na kraju funkcije u prvoj iteraciji zamjenjuje prijašnju vrijednost, a sadašnja vrijednost je prvi član liste;
nakon toga prijašnja vrijednost je suma, a trenutna vrijednost je član liste na kojem se nalazimo */

const listaReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaReduce = listaReduce.reduce(function (
  prijasnjaVrijednost,
  sadasnjaVrijednost
) {
  return prijasnjaVrijednost + sadasnjaVrijednost;
},
0); // početna vrijednost

console.log(sumaReduce); // 55

// koristeći arrow funkciju
const pocetnaVrijednost = 0;

const zbroj = listaReduce.reduce((prije, sad) => {
  return prije + sad;
}, pocetnaVrijednost);

console.log(zbroj); // 55

// koristeći for petlju
const zbroj2 = () => {
  let prije = 0;
  for (const broj of listaReduce) {
    prije = prije + broj;
  }
  return prije;
};

console.log(zbroj2()); // 55

/* const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Auto", cijena: 45000 },
  { proizvod: "Motor", cijena: 7500 },
  { proizvod: "Tipkovnica", cijena: 100 },
]; */

// kako zbrojiti sve cijene iz ove liste sa reduce metodom?

const ukupnaCijena = lista.reduce((prijasnjaVrijednost, trenutnaVrijednost) => {
  return prijasnjaVrijednost + trenutnaVrijednost.cijena;
}, 0);

console.log(ukupnaCijena); // 56600
