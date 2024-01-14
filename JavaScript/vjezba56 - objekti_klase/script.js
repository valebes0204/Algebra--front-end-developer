"use strict";

/* funkcije su kod koji se definira i koji se može pozvati na ekzekuciju putem imena funkcije;
 u memoriji spremamo podatke - postoji globalna, ali i lokalna memorija;
  JS je single-threader (linija po linija, "jednonitni" programski jezik) što znači da odrađuje task po task (nema multitaskanja);
   kada se funkcija pozove na ekzekuciju, taj zadatak se postavlja na Thread of Execution (niz izvršenja) i u tom trenutku interpreter poziva našu funkciju na call stack,
   otvara Local Execution Context i lokalnu memoriju za taj task;
    kada se funkcija odvrti i vrati određenu vrijednost, ona se zapisuje u neku varijablu, a interpreter briše (popa) naš zadatak sa call stack-a (JS ima Garbage collector koji će umjesto nas počistiti memoriju);
     call stack se vrti po LIFO (Last-in-First-out) principu */

const user1 = {
  id: 1,
  ime: "Mislav",
  povecaj() {
    this.id++;
  },
};

console.log(user1);
user1.povecaj();
console.log(user1);

/* što će se dogoditi kada pozovemo objektnu metodu u globalnom kontekstu?
otvorit će se Local Execution Context, naš interpreter će pushati zadatak na call stack,
 izvrtit će se u LEO i onda će se brisati s call stacka;
  nakon toga će se izvršavanje koda vratiti na globalni scope */

// drugi način kreiranja objekta
const user2 = {};

user2.id = 2;
user2.Ime = "Josip";
user2.povecaj = () => {
  this.id++;
};

// treći način kreiranja objekta
const user3 = Object.create(null);

user3.id = 3;
user3.ime = "Nikola";
user3.povecaj = () => {
  this.id++;
};

console.log(user2, user3);

// izrada objekta pomoću constructora (prvi dio)
/* function kreirajUsera(id, ime) {
  const user = Object.create(funkcijaKreirajUsera);
  user.id = id;
  user.ime = ime;

  return user;
}

const funkcijaKreirajUsera = {
  povecaj() {
    this.id++;
  },
  login() {
    console.log(`${this.ime} se logirao`);
  },
};

const user4 = kreirajUsera(4, "Mario");
const user5 = kreirajUsera(5, "Vlado");
const user6 = kreirajUsera(6, "Filip"); */

// dodatno uređivanje (drugi dio)
/* function kreirajUsera(id, ime) {
  this.id = id;
  this.ime = ime;
}

kreirajUsera.prototype.povecaj = function () {
  this.id++;
};

kreirajUsera.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

const user4 = new kreirajUsera(4, "Mario");
const user5 = new kreirajUsera(5, "Vlado");
const user6 = new kreirajUsera(6, "Filip"); */

// pretvaranje u klasu
class KreirajUsera {
  constructor(id, ime) {
    this.id = id;
    this.ime = ime;
  }
  povecaj() {
    this.id++;
  }
  login() {
    console.log(`${this.ime} se logirao`);
  }
}

const user4 = new KreirajUsera(4, "Mario");
const user5 = new KreirajUsera(5, "Vlado");
const user6 = new KreirajUsera(6, "Filip");

console.log(user4, user5, user6);

let useri = [];
useri.push(user4, user5, user6);
console.log(useri);

// nasljeđivanje u klasama
class Admin extends KreirajUsera {
  obrisiUsera(user_iz_parametra) {
    useri = useri.filter((user_iz_liste) => {
      return user_iz_parametra != user_iz_liste;
    });
  }
}

const admin1 = new Admin(7, "Admin");
console.log(admin1);

admin1.obrisiUsera(user5);

console.log(useri);
