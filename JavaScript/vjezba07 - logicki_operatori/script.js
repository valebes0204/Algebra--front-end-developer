const imaVozacku = true;
const dobarVid = false;

console.log(imaVozacku && dobarVid); // true
// ovo je kao "i" operator, piše se s && znakovima - and operator će dati true samo kada su SVI true

console.log(imaVozacku || dobarVid); // true
// ovo je kao "ili" operator, piše se s || znakovima - or operator će dati false kada su SVI false

console.log(!imaVozacku); // false
// ! okreće vrijednost true u false i obrnuto

const mozeVoziti = imaVozacku && dobarVid;
console.log(mozeVoziti); // false

if (mozeVoziti) {
  console.log("Osoba može voziti.");
} else {
  console.log("Osoba ne može voziti."); // Osoba ne može voziti.
}

const umoran = true;

console.log(imaVozacku && !umoran);
// vrijednost umoran je true, ali nam ne odgovara kao riješenje pa koristimo !

console.log(imaVozacku || dobarVid || !umoran); // true

// ----------------------------------------------------------------------------------------------------

/* nullish coalesing operator - nulti operator spajanja - logički operator
- operator koji će vratiti operand s desne strane ako je s lijeve strane operand null ili undefined,
inače će vratiti lijevog operanda (za razliku od truthy i falsy koji će vratiti i za 0 i za prazan string) */

let nullish;

nullish = 10 ?? 20; // 10
nullish = "lijeva" ?? "desna"; // lijeva
nullish = "" ?? "desna"; // ""
nullish = undefined ?? "desna"; // desna
nullish = false ?? "desna"; // false

console.log(nullish);

// ----------------------------------------------------------------------------------------------------

/* and (&&) operator vratit će prvu falsy vrijednost ili zadnju truthy vrijednost */

let x;

x = 10 && 20; // zadnja truthy vrijednost 20
x = 10 && 20 && 30; // zadnja truthy vrijednost 30
x = 10 && 0 && 30 && null; // vraća vrijednost 0 jer je prva falsy vrijednost
x = 10 && "" && true; // false zbog praznog stringa

console.log(x, typeof x);

/* PRIMJER kada je ovo korisno: */

let y = [];

console.log(y[0]);

y.length > 0 && console.log(y[0]); // ovako se neće ništa ispisati jer je provjera dala false value i clg se neće ispisati

y = [1, 2];

y.length > 0 && console.log(y[0]); // sada kada su zapisana dva člana liste, prva vrijednost je točna pa se se ispisati u clg

// ----------------------------------------------------------------------------------------------------

/* or (||) operator vratit će prvu truthy vrijednost, ili ako su sve falsy, vratit će zadnju vrijednost */

let z;

z = 10 || 20; // prva truthy vrijednost 10
z = 0 || 10 || 20; // 10, zato što traži prvu truthy vrijednost pa preskače falsy 0
z = 0 || null || ""; // false jer su sve falsy vrijednosti

console.log(z, typeof z);
