"use strict";

/* zadatak 1:

slijedeći HTML sintaksu, složi JavaScript kod koji će, klikom na button "smanji", u paragrafu smanjiti broj za 1, a klikom na button "povećaj", povećati za 1. */

const p = document.querySelector("p");

document.getElementById("smanji").addEventListener("click", () => {
  p.innerText = p.innerText - 1;
});

document.getElementById("povecaj").addEventListener("click", () => {
  p.innerText = Number(p.innerText) + 1;
});

/* zadatak 2:

napravi funkciju pod nazivom "suma" koja prima 2 parametra - prvi neka bude lista brojeva, a drugi callback funkcija koja se primjenjuje na svaki element liste (unutar funkcije 'suma').
Neka suma vrati novu listu popunjenu brojevima iz liste pomnoženima s 2. */

const lista = [1, 2, 3, 4, 5];

const suma = (listaBrojeva, cb) => {
  const listaRezultata = [];
  listaBrojeva.forEach((broj) => {
    listaRezultata.push(cb(broj));
  });
  return listaRezultata;
};

console.log(suma(lista, (broj) => broj * 2));
