"use strict";

// primjer funkcije koja kreira objekte
/* function auto(vrsta, model, godina) { - 3 točkice na imenu funkcije predlažu da se funkcija pretvori u classu
  this.vrsta = vrsta;
  this.model = model;
  this.godina = godina;
}

const autox = new Auto("BMW", "M5", 2013);
const autoy = new Auto("Mercedes", "CLK", 2015);
console.log(autox, autoy); */

/* klase u JS-u su sintaktička zamjena za prototip objektno-nasljeđivačkog modela koji se upotrijebljava u JS.
One nisu klase kao u drugim programskim jezicima, ali je krajnji rezultat isti. Njihova ideja je da budu predložak
za izradu objekata - taj predložak može imati predefinirane vrijednosti, ali također pruža mogućnost unosa vrijednosti prilikom 
kreiranja objekta putem parametara. */

class Auto {
  constructor(vrsta, model, godina) {
    // constructor je metoda kojoj se stvaraju i inicijaliziraju objekti te klase
    this.vrsta = vrsta;
    this.model = model;
    this.godina = godina;
  }
}

const auto1 = new Auto("BMW", "M5", 2013);
const auto2 = new Auto("Mercedes", "CLK", 2015);
console.log(auto1, auto2); // Auto {vrsta: "BMW", model: "M5", godina: 2013}, Auto {vrsta: "Mercedes", model: "CLK", godina: 2015}

class User {
  constructor(ime, prezime, godina) {
    this.ime = ime;
    this.prezime = prezime;
    this.godina = godina;
    this.provjera = false;
  }
  logiran() {
    this.provjera = true;
    console.log(this.ime, "se logirao/la.");
    return this;
  }
  odlogiran() {
    this.provjera = false;
    console.log(this.ime, "se odlogirao/la.");
    // return this;
  }
}

const user1 = new User("Igor", "Jevremović", 40);
const user2 = new User("Ivan", "Ivić", 50);
const user3 = new User("Marija", "Marić", 20);

console.log(user1, user2, user3);
/* User {ime: 'Igor', prezime: 'Jevremović', godina: 40, provjera: false}
User {ime: 'Ivan', prezime: 'Ivić', godina: 50, provjera: false}
User {ime: 'Marija', prezime: 'Marić', godina: 20, provjera: false} */

user1.logiran(); // Igor se logirao/la.
user2.logiran(); // Ivan se logirao/la.
user1.odlogiran(); // Igor se odlogirao/la.

/* method chaining */

// koristi se radi čišćeg koda; u slučaju da neka od metoda ne returna vrijednost, vratit će undefined i neće nastaviti dalje
user3.logiran().odlogiran().logiran();
