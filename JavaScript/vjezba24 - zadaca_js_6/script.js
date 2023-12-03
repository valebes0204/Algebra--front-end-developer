"use strict";

/* zadatak 1:

Kreiraj lista imena (do 5 komada), neka jedno ime bude tvoje ime. Napravi for petlju
koja će za tvoje ime ispisati "Ime je super!" dok će ostala imena samo ispisati. */

const imena = ["Davor", "Mario", "Jadranka", "Valentina", "Svemirko"];

for (let i = 0; i < imena.length; i++) {
  const ime = imena[i];

  if (ime === "Valentina") {
    console.log(`Ime ${ime} je super!`);
  } else {
    console.log(ime);
  }
}

/* Igorovo riješenje:

const listaImena = ["Ivan", "Marko", "Igor", "Marija", "Josip"];

for (let i = 0; i < listaImena.length; i++) {
  if (listaImena[i] === "Igor") {
    console.log("Ime je super");
    continue;
  }
  console.log(listaImena[i]);
} */

/* zadatak 2:

pPetlja u petlji vježba. Napravi petlju koja će se ispisati 4 puta. Unutar te petlje
složi podpetlju koja se bude izvrtjela 6 puta. Prva petlja može ispisati brojeve 1-4.
Druga petlja neka ispiše 5-10 brojeve. */

for (let i = 1; i <= 4; i++) {
  console.log(i);
  for (let j = 5; j <= 10; j++) {
    console.log(j);
  }
}

/* zadatak 3:

Iz postojeće liste objekata, koristeći neku od metoda listi, izvadi "limuzine" u novu listu.
Bonus: kako bi napisala funkciju koja će filtrirati aute proizvedene između 2016 i 2020? */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const limuzine = auti.filter((auto) => {
  auto.kategorija === "limuzina";
});

console.log(limuzine);

const godiste = auti.filter((auto) => {
  auto.godinaProizvodnje >= 2016 && auto.godinaProizvodnje <= 2020;
});

console.log(godiste);

/* zadatak 4:
 
Imaš 2 liste - listu računa i listu napojnica. 
Trebaš koristeći funkciju i for petlju u toj funkciji napraviti izračun sume.
I onda koristeći tu funkciju napraviti izračun sume za svaku listu.

Rezultat treba zapisati u nove liste.

hint 1: članove obje liste u funkciju ubaci putem pripadajućih parametara.
hint 2: Postavi početno stanje izračuna na 0 i tu listu sa sumom vrati u returnu te funkcije. */

const racuni = [125, 555, 44];
const napojnice = [2, 6, 7];

function suma(lista) {
  let izracun = 0;

  for (let i = 0; i < lista.length; i++) {
    izracun = izracun + lista[i];
  }
  return izracun;
}

console.log(suma(racuni));
console.log(suma(napojnice));
