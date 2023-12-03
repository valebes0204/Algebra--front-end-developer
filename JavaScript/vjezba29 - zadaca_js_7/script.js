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

const info = document.getElementById("info");

data.forEach((a) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${a.name}, ${a.age}`;
  info.appendChild(newDiv);
});

/* zadatak 2:

Kreiraj element u HTML-u (<div id="circle">Click</div>).
Nakon toga kreiraj varijablu u koju ćeš spremiti taj div.
Složi .eventListener funkciju koja će na klik promijeniti neku stilizaciju elementa (koju god osmisliš).

Možeš upotrijebiti zadani CSS: */

const circle = document.getElementById("circle");
circle.addEventListener("click", function () {
  circle.style.color = "rebeccapurple";
  circle.style.backgroundColor = "yellow";
});

/* zadatak 3:

Kreiraj button unutar HTML-a <button>Klikni me</button>.
Kreiraj JS skriptu koja će na klik buttona mijenjati boje pozadine HTML body-a iz liste boja: */

const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

let counter = 0;

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.style.backgroundColor = boje[counter];
  counter = counter + 1;
});
