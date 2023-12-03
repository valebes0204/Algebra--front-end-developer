"use strict";

/* REPLACE METODA
- zamijena postojećih elemenata */

function zamijeniZadatak(tekst) {
  // spremili smo prvi element liste u varijablu "zadatak"
  const zadatak = document.querySelector("li:first-child");

  // kreirali smo novi list item i dodali mu sadržaj
  const li = document.createElement("li");
  li.innerText = tekst;

  // na kraju smo sa .replaceWith metodom zamijenili prvi element liste s kreiranim list itemom unutar funkcije
  zadatak.replaceWith(li);
}

zamijeniZadatak("Zamijenili smo prvi zadatak.");

// ----------------------------------------------------------------------------------------------------

/* OUTERHTML METODA
- mijenja cijeli HTML element s novim HTML elementom */

function zamijeniZadatak2(tekst) {
  const zadatak = document.querySelector("li:last-child");
  zadatak.outerHTML = `<li>${tekst}</li>`; // potrebno je napisati cijeli HTML tag
}

zamijeniZadatak2("Zamijenili smo i ovaj zadatak");

// koristeći forEach petlju zamijeni sve elemente u listi
function zamijeniSve() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak) => {
    zadatak.outerHTML = "<li>Zamijenili smo sve zadatke.</li>";
  });
}

zamijeniSve();

// ----------------------------------------------------------------------------------------------------

/* INNERHTML METODA
-  ne mijenja HTML element nego samo njegov string */

function zamijeniDrugi() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak, index) => {
    if (index === 1) {
      zadatak.innerHTML = "Zamijenili smo drugog člana liste";
    } else if (index === 2) {
      zadatak.innerHTML = "Zamijenili smo i ovog člana liste";
    }
  });
}

zamijeniDrugi();

// ----------------------------------------------------------------------------------------------------

/* REMOVE METODA
- brisanje elemenata */

function ukloniButton() {
  document.querySelector("#clear").remove();
}

ukloniButton();

// ----------------------------------------------------------------------------------------------------

/* REMOVECHILD METODA
- brisanje prvog člana liste */

function ukloniZadatak() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

ukloniZadatak();
