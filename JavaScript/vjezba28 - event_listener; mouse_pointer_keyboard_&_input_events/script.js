"use strict";

/* EVENT LISTENER
- .addEventListener postavlja se na određeni element i na njega postavljaju se 2 parametra:
1. event na koji želimo da event listener pokrene funkciju
2. funkcija koja će se pokrenuti kada se dogodi tražena akcija */

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function () {
  alert("Event listener ovdje!"); // nije potrebno pozivati funkciju, ovisi o drugom elementu koji će ju pozvati
});

// napisano kao arrow funkcija
clearBtn.addEventListener("click", () => {
  console.log("Hello world!");
});

// napisano kao callback funkcija
function pocisti() {
  console.log("callback console log"); // funkcije se ne pozivaju automatski, nego pod zadanim uvjetom
}

clearBtn.addEventListener("click", pocisti);

/* definiraj callback funkciju koja će pobrisati sve zadatke te definirajte .addEventListener na "clearBtn"
koji će na klik pokrenuti tu callback funkciju */

function brisanjeZadatka() {
  // jedna verzija
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li");
  ul.remove(li);
}

function brisanjeZadatka2() {
  // druga verzija
  const zadaci = document.querySelectorAll("li");

  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
}

clearBtn.addEventListener("click", brisanjeZadatka);

// ----------------------------------------------------------------------------------------------------

/* MOUSE EVENTS */

const naslov = document.querySelector("h1");

// naslov.addEventListener("dblclick", () => console.log("dupli klik")); - dupli klik mišem
// naslov.addEventListener("mousedown", () => console.log("klik")); - stisni i drži klik miša (ili lijevi ili desni)
// naslov.addEventListener("mouseup", () => console.log("out")); - funkcija se vrti nakon što pustim klik miša
// naslov.addEventListener("wheel", () => console.log("kotačić")); - funkcija se vrti na scroll miša (postoji i wheelup i wheeldown)
// naslov.addEventListener("mouseover", () => console.log("mouseover")); - funkcija se vrti na "hover-in" miša
// naslov.addEventListener("mouseout", () => console.log("mouseout")); - funkcija se vrti na "hover-out" miša

// ----------------------------------------------------------------------------------------------------

/* POINTER EVENTS
- zahtjevaju parametre */

const pointerEvent = (event) => {
  /* console.log(event); */
  // vidjet ćemo listu svih pointer evenata koji su nam dostupni
  /* console.log(event.target); */
  // daje element koji smo kliknuli
  /* console.log(event.type); */
  // daje vrstu eventa koji je aktiviran
  /* console.log(event.clientX); */
  // daje vrijednost (koordinate) po horizontali relativno prema prozoru, ovisno gdje je napravljen klik
  /* console.log(event.clientY); */
  // daje vrijednost po vertikali relativno prema prozoru
  /* console.log(event.offsetX); */
  // daje vrijednost po horizontali relativno prema elementu
  /* console.log(event.offsetY); */
  // daje vrijednost po vertikali relativno prema elementu
  /* console.log(event.pageX); */
  // daje vrijednost po horizontali relativno prema stranici
  /* console.log(event.pageY); */
  // daje vrijednost po vertikali relativno prema stranici
  /* console.log(event.screenX); */
  // daje vrijednost po horizontali relativno prema ekranu monitora
  /* console.log(event.screenY); */
  // daje vrijednost po vertikali relativno prema ekranu monitora
};

naslov.addEventListener("click", pointerEvent);

// ----------------------------------------------------------------------------------------------------

/* PREVENTDEFAULT METODA
- spriječava defaultno ponašanje određenog HTML elementa, najčešće se koristi za spriječavanje refresh stranice
prilikom klika na gumb */

const gumb = document.querySelector("a");

gumb.addEventListener("drag", (e) => {
  // drag - povlačenje mišem
  e.preventDefault();

  console.log("Spriječili smo odlazak na Google ovom metodom.");

  const naslov = document.querySelector("h1");
  naslov.textContent = `X ${e.offsetX} > ${e.offsetY}`; // povlačanjem mišem po elementu, ispisujemo koordinate
});

// ----------------------------------------------------------------------------------------------------

/* KEYBOARD EVENTS */

const inputKey = document.querySelector("#zadatak-input");

// keypress se pokreće čim stisnemo bilo koju tipku; u ovom slučaju console log ne ispisuje utipkano, nego samo "keypress"
// keypress uključuje cijeli flow - i keyup i keydown
/* inputKey.addEventListener("keypress", () => {
  console.log("keypress");
}); */

// keyup se pokreće kada stisnemo tipku pa maknemo prst s bilo koje tipke
/* inputKey.addEventListener("keyup", () => {
  console.log("keyup");
}); */

// keydown se pokreće čim stisnemo tipku
/* inputKey.addEventListener("keydown", () => {
  console.log("keydown");
});
 */

/* pomoću event pointera možemo, koristeći metodu .key na event pointeru, definirati što želimo da se dogodi
prilikom stiskanja određene tipke na tipkovnici;
sa .repeat metodom možemo provjeriti da li je korisnik "sjeo" na tipku i u tom trenutku definirati događaj */

/* inputKey.addEventListener("keydown", (e) => {
  if (e.key === "e") {
    console.log("Stisnuo si slovo e!");
  }

  if (e.repeat) {
    alert(`Pusti tipku ${e.key}!`); // ako držimo tipku, javlja se alert koji nas zaustavlja
  }
}); */

// ----------------------------------------------------------------------------------------------------

/* INPUT EVENTS ! koristimo .inputKey i naslov varijable od prijašnjih primjera !
- input je event koji radi slično kao i keydown, ali ga je bolje koristiti kada se radi s input poljima;
može se koristiti i .change, ali to je stariji selektor i ima širu upotrebu;
ako imamo npr. checkbox, taj dio forme možemo provjeriti umjesto s e.target.value s e.target.checked
što daje true/false vrijednost (da li je označeno ili nije) */

inputKey.addEventListener("input", (e) => {
  console.log(e.target.value); //s target.value možemo vidjeti što se upisuje u inputu
  naslov.textContent = e.target.value;
});

// provjerava jesmo li kliknuli na određeno polje (u ovom slučaju input polje)
inputKey.addEventListener("focus", () => {
  console.log("Input polje je u fokusu.");
});

// provjerava jesmo li kliknuli van određenog polja (u ovom slučaju input polja)
inputKey.addEventListener("blur", () => {
  console.log("Kliknuli ste van input polja.");
});
