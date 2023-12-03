/* zadatak 1:

Provjeri ITM (Indeks Tjelesne Mase) Marka i Josipa i utvrdi čiji je veći.
Neka se ispiše "Markov koeficijent mase je veći od Josipovog koeficijenta mase." ili
"Josipov koeficijent mase je veći od Markovog koeficijenta mase.".
Koristi test podatke iz prvog zadatka, if else pristup i template string za console.log. */

// test podaci - Marko 78kg, 1.69m - Josip 92kg, 1.95m
const itmMarko = 78 / 1.69 ** 2;
const itmJosip = 92 / 1.95 ** 2;

if (itmMarko > itmJosip) {
  console.log(
    `Markov koeficijent mase (${itmMarko}) je veći od Josipovog koeficijenta mase (${itmJosip}).`
  );
} else if (itmJosip > itmMarko) {
  console.log(
    `Josipov koeficijent mase (${itmJosip}) je veći od Markovog koeficijenta mase (${itmMarko}).`
  );
} else {
  console.log(
    `Markov koeficijent mase ${itmMarko} jednak je Josipovom koeficijentu mase ${itmJosip}`
  );
}

/* zadatak 2:

Logical operators zadatak - zamisli da želiš živjeti u zemlji u kojoj se priča engleski,
koja ima manje od 50m stanovnika i koja nije otok.
Utvrdi da li Hrvatska ispunjava te uvjete i ako da, ispiši:
"Zemlja u kojoj želite živjeti je Hrvatska".
Ako ne, onda ispiši: 
"Hrvatska nije za vas.".
Koristi logičke operatore i if else petlju za rješenje zadatka. */

const jezik = "hrvatski";
const populacija = 3.8e6;
const otok = false;

if (jezik == "engleski" && populacija < 50e6 && otok == false) {
  console.log("Zemlja u kojoj želite živjeti je Hrvatska.");
} else {
  console.log("Hrvatska nije za vas.");
}

/* Igorovo riješenje:

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatska = false;

const zelje = hrvatska && engleski && nijeOtok && manjeOd50M;

if (zelje) {
  console.log("Zemlja u kojoj želite živjeti je Hrvatska");
} else {
  console.log("Hrvatska nije ta zemlja.");
} */

/* zadatak 3:

Predvidi rezultat ovih operacija bez unošenja u VSC ili konzolu pa provjeri. */

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143
