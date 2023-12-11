"use strict";

// klasična callback funkcija koju smo i dosad koristili; ne pokrenete se funkcija odmah, nego ju definiramo i pozovemo kasnije
const izmjena = (e) => {
  e.target.classList.toggle("crvena");
};

document.querySelector("button").addEventListener("click", izmjena);

// PRIMJER (simulacija povlačenja podataka)
const imena = [
  { ime: "Jure", prezime: "Jurić" },
  { ime: "Maja", prezime: "Majić" },
];

const kreirajOsobu = (podaci, cb) => {
  setTimeout(() => {
    imena.push(podaci);
    cb();
  }, 700);
};

const dohvatiImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const paragraf = document.createElement("p");
      paragraf.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(paragraf);
    });
  }, 500);
};

kreirajOsobu({ ime: "Ivan", prezime: "Ivić" }, dohvatiImena);

/* ovu situaciju smo riješili slaganjem callback funkcije na način da smo izvršavanje funkcije "dohvatiImena" proslijedili kao parametar u
drugu funkciju "kreirajOsobu" i tek tamo pokrenuli izvršavanje funkcije putem callback-a */
