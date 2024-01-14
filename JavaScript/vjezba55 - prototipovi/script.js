"use strict";

/* svaki objekt u JS ima ugrađeno svojstvo koje se naziva njegovim prototipom;
prototip je sam po sebi objekt, tako da će i on imati svoje prototipove te tako čini lanac prototipova;
lanac završava kada dođemo do razine prototipa koji ima null vrijednost za vlastiti prototip nastavak */

const user1 = {
  ime: "Marko",
};

console.log(user1);
console.log(user1.__proto__);

console.log(user1.__proto__ === Object.prototype);

// constructor funkcija
/* function korisnik(ime) {
  this.ime = ime;
  this.login = function () {
    console.log(`${this.ime} se logirao.`);
  };
}

const user2 = new korisnik("Stjepan");
const user3 = new korisnik("Matija");

user2.login();
user3.login(); */

/* nije poželjno da prilikom kreiranja novog objekta, pomoću constructor funkcije, kreiramo na svakom objektu istu metodu;
sad ćemo izvući ovu metodu van i od nje napraviti prototip metodu na objektu;
ne preporuča se za vrijednost prototipa dodavati primitivne vrijednosti */

function korisnik(ime) {
  this.ime = ime;
}

korisnik.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

const user2 = new korisnik("Stjepan");
const user3 = new korisnik("Matija");

user2.login();
user3.login();
