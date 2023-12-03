/* falsy vrijednosti : 0, prazan string "", undefined, null, NaN  - vrijednosti koje nisu netočne,
ali će postati kada se pretvore u boolean vrijednost */

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean({})); // objekte, i kad su prazni, pokazuje kao true vrijednosti

/* ovo se ne radi u praksi, Boolean vrijednosti se definiraju implicitno, a ne eksplicitno kao ovdje.
to uvijek odrađuje JS prisilom */

const novac = 0;

if (novac) {
  console.log("Imaš novaca.");
} else {
  console.log("Nemaš novaca.");
}
// ispisuje ELSE jer brojevnu vrijednost pretvara u boolean (u ovom slučaju FALSE jer je 0 falsy vrijednost)

let x;

if (x) {
  console.log("Imamo x.");
} else {
  console.log("Nemamo x.");
}
// ispisuje ELSE jer je x vrijednost undefined (falsy)

const godina = 18;

if (godina === 18) {
  console.log("Dobili smo jednake brojeve.");
} else {
  console.log("Ovo nije isti broj.");
}

// ----------------------------------------------------------------------------------------------------

/* loose provjera usporedit će vrijednosti koje se nalaze s lijeve i desne strane i ako prepozna da su jednake,
zaključit će da je to točno i ispisati IF dio petlje (točni dio) */

if ("18" == 18) {
  console.log("Dobili smo jednake brojeve.");
} else {
  console.log("Nismo dobili isti broj.");
}

// ----------------------------------------------------------------------------------------------------

/* strict provjera usporedit će vrijednosti, ali i tip podataka koji se nalazi s lijeve i desne strane,
i ako su oboje identični, zaključit će da je to točno te ispisati IF dio petlje (točan dio),
a ako nisu identični po jednom od ta dva kriterija, onda ispisuje ELSE dio petlje (netočan dio) */

if ("18" == 18) {
  console.log("Dobili smo jednake brojeve.");
} else {
  console.log("Nismo dobili isti broj.");
}

// PRIMJER

const broj = Number(prompt("Koji ti je najdraži broj?")); // prompt je blokirajući i JS se ne učitava dalje dok se on ne riješi
console.log(broj, typeof broj);

// prompt automatski stavlja da je tip podataka string pa treba staviti odgovarajuću konverziju ako treba

if (broj === 23) {
  console.log("Broj 23 je baš super!");
} else if (broj === 7) {
  console.log("Broj 7 je isto super!");
} else if (broj === 2) {
  console.log("Broj 2 je odličan!");
} else {
  console.log("Niste upisali dobar broj! :(");
}
