"use strict";

/* EVENT BUBBLING
- događa se kada je ugniježdeno više HTML elemenata koji se na neki način preklapaju;
ako stavimo event listenere na svaki pojedinačno, svi eventi će se pokrenuti što može stvoriti problem (ako nije namjerno napravljeno);
ako kliknemo prvo na gumb, on će se aktivirati, nakon njega se aktivira div i nakon diva forma jer se preklapaju */

const gumb = document.querySelector(".btn");
const div = document.querySelector(".form-control:nth-child(2)");
const forma = document.querySelector("#zadatak-forma");

gumb.addEventListener("click", (e) => {
  alert("gumb je kliknut");
  e.stopPropagation(); // .stopPropagation zaustavlja pokretanje drugih event listenera na tom području
});

div.addEventListener("click", () => {
  alert("div je kliknut");
});

forma.addEventListener("click", () => {
  alert("forma je kliknuta");
});

// ----------------------------------------------------------------------------------------------------

const lista = document.getElementById("zadatak-list");

// klikom izbrisati list item iz unordered liste "zadatak-list" putem event listenera
lista.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});

// hoveranjem miša promijeniti boju teksta na list itemu
lista.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#ff0000";
  }
});

lista.addEventListener("mouseout", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "initial";
  }
});
