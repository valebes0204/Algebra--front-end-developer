"use script";

const prijatelji1 = "Ivan";
const prijatelji2 = "Marko";
const prijatelji3 = "Josip";

const listaPrijatelja = ["Ivan", "Marko", "Josip"];

const listaBrojeva = new Array(4, 5, 6); // "školski" način pisanja liste

console.log(listaPrijatelja);
console.log(listaBrojeva);

// kada želimo dohvatiti određenog člana liste, onda ga upisati u [] zagrade; lista počinje od 0
console.log(listaPrijatelja[0]); // Ivan
console.log(listaPrijatelja[1]); // Marko
console.log(listaPrijatelja[2]); // Josip

// kada želimo znati kolko članova liste imamo, onda se upisuje .lenght iza naziva liste
console.log(listaPrijatelja.length); // 3

// kada želimo saznati, npr. vrijednost zadnjeg člana liste, možemo iskoristiti length i složiti izračun na idući način:
console.log(listaPrijatelja[listaPrijatelja.length - 1]); // dohvaća zadnjeg člana liste (Josip)

listaPrijatelja[2] = "Jura";

console.log(listaPrijatelja); // ["Ivan", "Marko", "Jura"]

/* vrijednost const se ne može mijenjati na tzv. primitivnim varijablama, ali lista nije primitivna varijabla pa možemo mijenjati
vrijednost članova liste; ne možemo redefinirati listu (definirati novu listu s istom deklaracijom varijable) */

listaPrijatelja.unshift("Stjepan"); // metoda za dodavanje novog člana liste na početak liste
listaPrijatelja.push("Filip"); // metoda za dodavanje novog člana liste na kraj liste
listaPrijatelja.shift(); // metoda za micanje prvog člana liste iz liste
listaPrijatelja.pop(); // metoda za micanje zadnjeg člana liste iz liste
listaPrijatelja.reverse(); // metoda za izmjenu slijeda liste

console.log(listaPrijatelja); // ["Jura", "Marko", "Ivan"]

// ----------------------------------------------------------------------------------------------------

/* metoda za brojevne liste */

const brojevi = [1996, 2003, 1967, 2012, 2018];

let y;

y = brojevi.includes(1996); // metoda za provjeru postoji li u listi određena vrijednost (true/false)
y = brojevi.indexOf(1996); // metoda za provjeru na kojem mjestu u listi se nalazi određena vrijednost (number)
y = brojevi.slice(1); // metoda kojom, prilikom spremanja liste u novu listu iz postojeće, mičemo određene članove liste
y = brojevi.slice(1, 3); // način kako ostaviti samo članove od/do; sa sliceom ne mijenjamo originalnu postojeću listu
y = brojevi.splice(2, 4); // metoda kojom postojeću listu dijelimo na dvije liste (mijenjamo i postojeću listu)

console.log(y, typeof y);
console.log(brojevi);

if (listaPrijatelja.includes("Jura")) {
  console.log("Imate prijatelja po imenu Jura.");
}

// ----------------------------------------------------------------------------------------------------

/* načini spajanja listi */

let x;

const voce = ["jabuke", "kruske", "sljive"];
const bobice = ["borovnice", "kupina", "malina"];

// ovako se dodaje lista unutar druge liste:

/* voce.push(bobice);
console.log(voce); // ['jabuke', 'kruske', 'sljive', ['borovnice', 'kupina', 'malina']]
console.log(voce[3]); // ['borovnice', 'kupina', 'malina']
console.log(voce[3][0]); */

x = voce.concat(bobice);
console.log(x); // ['jabuke', 'kruske', 'sljive', 'borovnice', 'kupina', 'malina']

const brojevi1 = [1, 2, 3];

/* spread operator služi za ekspandiranje listi/objekata/stringova u jednu varijablu,
najčešće se koristi za spajanje objekata, ali i listi u novi objekt */
const noviBrojevi1 = [...brojevi1, 4, 5, 6];
console.log(noviBrojevi1); // [1, 2, 3, 4, 5, 6]

const noviBrojevi2 = [7, 8, 9];

x = [...noviBrojevi1, ...noviBrojevi2, 10, 11, 12];
console.log(x); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const arr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
const flat = arr.flat(); // metoda za uklanjanje podlisti, tj. slaganje svih podlisti u listu istog ranga
console.log(flat); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ----------------------------------------------------------------------------------------------------

/* statične metode za liste */

// provjerava da li je nešto lista

let xx = Array.isArray(voce);
console.log(xx); // true

// slaganje liste od pojedniačnih članova od stringa

xx = Array.from("1234");
console.log(xx); // ["1", "2", "3", "4"]

// slaganje liste od varijabli

const a = 1;
const b = 2;
const c = 3;

xx = Array.of(a, b, c);
console.log(xx); // [1, 2, 3]
