"use strict";

/* zadatak 1: 

U HTML-u kreiraj div element s id-em "info" (<div id="info"></div>).
Spremi taj id u JS varijablu "info".
Nakon toga prođi kroz listu objekata nekom od metoda listi, izvuci name i age te ih ispiši u nekom div ili p elementu unutar div-a s id-em "info".

Imaš listu objekata: */

let data = [
  {
    name: "Marko",
    age: "30",
  },
  {
    name: "Luka",
    age: "32",
  },
  {
    name: "Ivan",
    age: "24",
  },
  {
    name: "Stjepan",
    age: "33",
  },
  {
    name: "Domagoj",
    age: "22",
  },
  {
    name: "Kristijan",
    age: "25",
  },
];

const info2 = document.getElementById("info");

data.forEach((a) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${a.name}, ${a.age}`;
  info.appendChild(newDiv);
});

/* Igorovo rješenje:

const info = document.querySelector("#info");

const lista = data.map((clan) => {
  return `<div>${clan.name} ima ${clan.age} godina</div>`;
});

console.log(lista);

info.innerHTML = lista.join(""); */

/* zadatak 2:

Kreiraj element u HTML-u (<div id="circle">Click</div>).
Nakon toga kreiraj varijablu u koju ćeš spremiti taj div.
Složi .eventListener funkciju koja će na klik promijeniti neku stilizaciju elementa (koju god osmisliš).

Možeš upotrijebiti zadani CSS: */

const circle = document.getElementById("circle");

circle.addEventListener("click", function () {
  circle.style.color = "rebeccapurple";
  circle.style.background = "yellow";
});

/* Igorovo rješenje:

const circle = document.querySelector("#circle");

circle.addEventListener("click", () => {
  circle.style.background = "red";
}); */

/* zadatak 3:

Kreiraj button unutar HTML-a <button>Klikni me</button>.
Kreiraj JS skriptu koja će na klik buttona mijenjati boje pozadine HTML body-a iz liste boja: */

const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

const gumb = document.querySelector("button");

let index = 0;

const promijeniBoju = () => {
  const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

  document.body.style.background = boje[index++];

  if (index > boje.length - 1) {
    index = 0;
  }
};

gumb.addEventListener(
  "click",
  promijeniBoju
); /* da smo stavili promijeniBoju() onda funkcija više nije callback,
preskače "click" i odvrti se samo jednom te se briše iz memorije (neće izvrtjeti cijelu listu) */
