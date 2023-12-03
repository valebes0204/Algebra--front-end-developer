"use strict";

console.log(document.body.innerHTML); // .innerHTML dohvaća unutarnji HTML element kojeg smo targetirali

console.log(document.body.innerText); // .innerText dohvaća unutarnji tekst tog elementa

/* Ovo nije samo read-only, mi možemo i mijenjati prikaz DOM-a na ovaj način: */

// document.body.innerHTML = "<h1>Hello World</h1>";

// ----------------------------------------------------------------------------------------------------

// SELEKTORI

/* .getElementById
- dohvaća elemente po ID-u */

console.log(document.getElementById("header"));
const header = document.getElementById("header");
// header.innerHTML = "<h1>Hello World</h1>";  = document.getElementById("header").innerHTML = "<h1>Hello World</h1>";

// ----------------------------------------------------------------------------------------------------

/* .getElementByTagName
- dohvaća elemente po tagu (rijetko se koristi) */

console.log(document.getElementsByTagName("h1"[0].innerHTML)); // mora se definirati kojeg želimo

/* kod izmjena na CSS-u treba paziti na pozivanje naredbi - naredbe koje imaju 2 riječi u CSS-u ne pišemo kao u CSS-u,
 nego na JS način - spojeno s drugom riječi koja počinje velikim slovom */

const naslov = document.getElementById("naslov");

naslov.style.color = "#ff0000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

// ----------------------------------------------------------------------------------------------------

/* .querySelector
- s njim možemo odabrati što god želimo po bilo kojem atributu;
specifično je ako selektiramo nešto čega ima na više mjesta na stranici (npr. klasa, tag...),
 on će selektirati prvog člana na kojeg naleti u HTML-u */

console.log(document.querySelector("h1"));
console.log(document.querySelector("#naslov"));
console.log(document.querySelector(".form-control"));
console.log(document.querySelector('input[type="text"]'));

// ----------------------------------------------------------------------------------------------------

/* .querySelectorAll
- selektira sve instance pozvanog elementa i od njih kreira listu */

const lista = document.querySelectorAll("ul li");
console.log(lista);
console.log(lista[2]);
console.log(lista[2].innerHTML);
console.log(lista[2].innerText);

// lista.style.color = "red"; - ovo ne možemo napraviti, trebamo s for petljom prolaziti kroz članove liste

lista.forEach((clan_liste, kljuc) => {
  clan_liste.style.color = "red";

  if (kljuc === 1) {
    clan_liste.remove();
  }

  if (kljuc === 2) {
    clan_liste.innerHTML = `Kupi novine! - <mark> Ovaj dio je ubačen kao HTML. </mark>`;
  }
});

// ----------------------------------------------------------------------------------------------------

/* .getElementByClassName
- selektor koji poziva elemente po klasi; e dohvaća sve elemente pod traženim atributom,
nego samo prvoga, ako ne zadamo drugačije */

const dijete = document.getElementsByClassName("dijete");
console.log(dijete); // dijete
console.log(dijete[2].innerText); // dijete no3

// na koje sve načine možemo manipulirati pomoću svojstva na metodama:
let podaci;

const roditelj = document.querySelector(".roditelj");

podaci = roditelj.children;
podaci = roditelj.children[0].innerHTML;
podaci = roditelj.children[0].innerText;
podaci = roditelj.children[0].className;
podaci = roditelj.children[0].nodeName; // DIV

roditelj.children[0].innerText = "Promijenila sam ovaj tekst.";
console.log(podaci);
