const inputGodina = "2000";
console.log(inputGodina + 18); // 200018 dobili smo string

const x = inputGodina + 18;
console.log(typeof x); // string

/* type conversion */

// prva metoda izmjene stringa u broj
let conversionGodina = Number(inputGodina);

// druga metoda izmjene stringa u broj
conversionGodina = parseInt(inputGodina);

// treća metoda izmjene stringa u broj
conversionGodina = +inputGodina;

// metoda za izmjenu broja u string
conversionGodina = String(inputGodina); // string

console.log(typeof conversionGodina);

let decBroj = "20.5";

decBroj = parseFloat(decBroj);
console.log(decBroj); // 20.5, pretvori string u decimalni broj, funkcionira samo kada su decimale u pitanju

// ako izmjenjujemo decimalni broj iz stringa u broj, parseInt zaokružuje taj broj u nižu vrijednost

decBroj = parseInt(decBroj);
console.log(decBroj); // 20

console.log(Number("Valentina")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(String(true)); // true

// ----------------------------------------------------------------------------------------------------

/* type coercion (prisilna promjena) */

// kad se broj nađe unutar string literal načina pisanja, on će prisilom postati string
console.log("Ja sam " + 5 + " broj."); // Ja sam 5 broj.

// ovako je to "školski" definirano
console.log("Ja sam " + String(5) + " broj."); // Ja sam 5 broj.

/* JS prepoznaje da se unutar stringa nalaze brojevi pa ih prisilno mijenja u brojeve;
ako se koristi + onda prisilno mijenja u string literal */
console.log("23" - "10" - 5); // 8

console.log(23 + "10" + 5); // 23105 - izbacuje ga kao string jer ima + u sebi

console.log(5 + true); // 6 - prisilno pretvara boolean u broj (true = 1)
console.log(5 + false); // 5 - prisilno pretvara boolean u broj (false = 0)

console.log(5 + undefined); // Nan (Not a Number), ali je u konzoli prezentirana kao brojčana vrijednost

console.log("22" + "22" / 100); // 22.22 (2222 je string vrijednost koja se prisilno mijenja u broj pa dijeli)

let n = "1" + 1;
n--;
console.log(n); // 10

let m = 2 + 3 + 4 + "5";
console.log(m, typeof m); // 95 string
