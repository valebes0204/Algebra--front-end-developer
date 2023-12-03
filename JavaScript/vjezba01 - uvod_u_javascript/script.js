/* postoje 3 vrste varijabli: var, const i let: */

var a = 5;
const b = 6;
let c = 7;

/* var - prijašnji način pisanja varijabli; var deklaracija dozvoljava redefiniranje same deklaracije i vrijednosti,
dopušta da se varijable zovu isto i JS ne javlja grešku da smo je već negdje drugdje iskoristili */

var x = 10;
var x = 11;

var d;
d = 8;

/* const - nepromijenjiva varijabla (konstanta), odmah trebamo dati ime i vrijednost; const deklaracija ne dozvoljava redefiniranje same deklaracije niti vrijednosti,
ne dopušta da se drugu varijabla nazove istim imenom */

const y = 12;
// const y = 13;
//y = 14

// const e; - ne funkcionira jer nismo odmah dodali vrijednost
e = 9;

/* let - let deklaracija ne dozvoljava redefiniranje same deklaracije ali dozvoljava izmjenu vrijednosti */

let z = 14;
// let z = 15;
console.log(z);
z = 16;
console.log(z);

let f;
let = 10;

/* vrste podataka koje možemo dodijeliti varijablama */

const broj = 7; // brojevni podatak
const string = "Hello World!"; //string podatak (niz slova)
const bolean = true; // Boolean vrijednost može biti samo true ili false
let nedefinirano; // undefined vrijednost je vrijednost koja nije definirana (samo smo dali ime)
// postoji još i null koja je prazna vrijednost, ali je definirana
console.log(broj, string, bolean, nedefinirano); // u konzoli u browseru ispisuje vrijednosti

/* ime varijable ne može početi s brojem, ali može sadržavati broj, slova, donju crtu i znak $;
ne smije biti razmaka u imenu i ne smiju se koristiti rezervirane JavaScript riječi (npr. function, new...) */

let javascriptJeZabavan = true;

console.log(typeof javascriptJeZabavan); // typeof ispisuje u konzoli kakva je vrijednost koju smo ispisali
console.log(typeof 6);
console.log(typeof "ovo je string");
console.log(typeof true);
console.log(typeof nedefinirano);
console.log(typeof null); // za null piše da je object, to je bug

javascriptJeZabavan = "promijenili smo let varijablu i pretvorili je u string";
console.log(typeof javascriptJeZabavan, javascriptJeZabavan);

// ----------------------------------------------------------------------------------------------------

/* matematički operatori */

const Andrija = 2023 - 2001;
console.log(Andrija);

const trenutnaGodina = 2023;
const godinaRodjena = 1999;

const Ivan = trenutnaGodina - godinaRodjena;
console.log(Ivan);

console.log(Andrija * 2, Ivan / 10, Andrija ** 2);

const ime = "Mario";
const prezime = "Marić";

/* string literal - više o tome niže u dokumentu */
console.log(ime + " " + prezime); // " " dodaje razmak

/* shortcuti u matematičkim operacijama */

let g = 10 + 5;
g = g + 10;
g += 10; // isto kao da je napisano g = g + 10
g -= 10; // isto kao da je napisano g = g - 10
g *= 2; // isto kao da je napisano g = g * 10
g++; // uvećavanje za 1
g--; // umanjivanje za 1
console.log(g);

/* usporedni operatori - uspoređuju vrijednosti;
ne može se staviti jedan znak jednako (to bi značilo da dodjeljujemo novu vrijednost na varijablu),
samo <, >, ==, <=, >=, === */

console.log(Ivan < Andrija);
console.log(Ivan >= 18);

/* možemo istovremeno definirati dvije varijable te im dodijeliti istu vrijednost */

let prva, druga;
prva = druga = 25 - 10 - 5;
console.log(prva, druga);

const prosjek = (Ivan + Andrija) / 2;
console.log(prosjek);

// ----------------------------------------------------------------------------------------------------

/* string literal */

const predavac = "Igor";
const ustanova = "Algebra";
const godina = "2023.";

const stringLiteral =
  "Ja sam " +
  predavac +
  " i radim za ustanovu koja se zove " +
  ustanova +
  " u godini " +
  godina;

console.log(stringLiteral);

// ----------------------------------------------------------------------------------------------------

/* template literal - backtick Alt Gr + 7*/

let templateLiteral = `Ja sam ${predavac} i radim za ustanovu koja se zove ${ustanova} u godini ${godina}.`;
console.log(templateLiteral); // ako se u template literalu ode u novi red, u konzoli se vidi taj break

console.log(templateLiteral.length); // .lenght računa koliko charactera ima u stringu koji se koriste

// property se pozivaju s točkom (.lenght), a metode na kraju varijable sa zagradama (.sqrt())

// ----------------------------------------------------------------------------------------------------

/* matematičke metode s brojevima i varijablama */

let i;

// korijen
i = Math.sqrt(16);

// apsolutna vrijednost
i = Math.abs(-5);

// zaokruživanje
i = Math.round(5.2);

// prisilno zaokruživanje na gore
i = Math.ceil(5.1);

// prisilno zaokruživanje na dolje
i = Math.floor(5.9);

// uklanjanje decimala
i = Math.trunc(4.4);

// minimalni broj iz niza brojeva
i = Math.min(6, 5, 8, 2, 9);

// maksimalni broj iz niza brojeva
i = Math.max(6, 5, 8, 2, 9);

// generiranje nasumičnog broja
i = Math.random();

i = Math.random() * 10; // dobit ćemo broj između 0 i 9
i = Math.random() * 10 + 1; // dobit ćemo broj između 1 i 10
i = Math.trunc(Math.random() * 10 + 1); // dobit ćemo broj između 1 i 10, ali bez decimala
i = Math.floor(Math.random() * 10 + 1); // ista stvar kao i linija gore

console.log(i);
