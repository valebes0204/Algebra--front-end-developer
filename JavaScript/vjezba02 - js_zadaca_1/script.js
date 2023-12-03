/* zadatak 1:

Kreiraj 3 varijable koristeći const, let i var te ih inicijaliziraj sa string vrijednostima.
Nakon toga ih ispiši u konzoli.
Bonus: kreiraj Boolean vrijednost i napravi varijablu čija vrijednost je undefined. */

const a = "Ovo je prva varijabla.";
let b = "Ovo je druga varijabla.";
var c = "Ovo je treća varijabla.";
const boolean = true;
let x;
console.log(a, b, c, boolean, x);

/* zadatak 2:

Kreiraj varijablu populacija i inicijaliziraj ju s brojem građana Hrvatske.
Nakon toga kreiraj novu varijablu u koju ćeš spremiti rezultat matematičke operacije dijeljenja broja građana s 2.
Nakon toga ćeš uvećati broj stanovnika za 1.
Nakon toga kreiraj varijablu s brojem stanovnika Slovenije i napravi provjeru tko ima više stanovnika. */

const populationCro = 3855641;
let half = populationCro / 2;
console.log(half);
half++;
console.log(half);
const populationSlo = 2119411;
console.log(populationCro < populationSlo);

/* zadatak 3:

Izračunaj ITM (Indeks Tjelesne Mase) Marka i Josipa, ispiši ih i provjeri Boolean vrijednost (true/false) da li je Markov ITM veći od Josipovog.
Računa se tako da se masa dijeli s visinom na kvadrat (itm = masa/(visina ** 2)).
- test podaci 1: Marko 78kg i 1.69m, Josip 92kg i 1.95m
- test podaci 2: Marko 95kg i 1.88m, Josip 85kg i 1.76m */

// test podaci 1 - Marko 78kg, 1.69m - Josip 92kg, 1.95m
const itmMarko1 = 78 / 1.69 ** 2;
const itmJosip1 = 92 / 1.95 ** 2;
console.log(`Markov ITM iznosi: ${itmMarko1}`);
console.log(`Josipov ITM iznosi: ${itmJosip1}`);
console.log(itmMarko1 > itmJosip1);

/* Igorovo riješenje:
const masaMarko = 78;
const visinaMarko = 1.69;

const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko > itmJosip); */

// test podaci 2 - Marko 95kg, 1.88m - Josip 85kg, 1.76m
const itmMarko2 = 95 / 1.88 ** 2;
const itmJosip2 = 85 / 1.76 ** 2;
console.log(`Markov ITM iznosi: ${itmMarko2}`);
console.log(`Josipov ITM iznosi: ${itmJosip2}`);
console.log(itmMarko2 > itmJosip2);

/* zadatak 4:

Kreiraj 3 varijable koje će sadržavati:
ime države, kontinenta i njene populacije i onda ispiši u konzoli koristeći template literal rečenicu koja uključuje te 3 varijable. */

const ime = "Švicarska";
const kontinent = "Europa";
const populacija = 8816978;
console.log(
  `U državi pod nazivom ${ime}, koja se nalazi na kontinentu ${kontinent}, živi sveukupno ${populacija} Švicaraca.`
);

/* zadatak 5:

Napravi 2 varijable (jedna s random brojem 1-100, druga 1-50).
Napravi varijable koje će sadržavati sumu i razliku te 2 varijable.
Zapiši putem template literala varijable suma i razlika.*/

let prva = Math.trunc(Math.random() * 100 + 1);
let druga = Math.trunc(Math.random() * 50 + 1);
let suma = prva + druga;
let razlika = prva - druga;
console.log(
  `Suma brojeva ${prva} i ${druga} iznosi ${suma}, a razlika istih brojeva iznosi ${razlika}.`
);
